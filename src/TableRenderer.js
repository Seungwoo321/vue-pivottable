import { PivotData } from './helper/utils'
import defaultProps from './helper/common'
function redColorScaleGenerator(values) {
 const min = Math.min.apply(Math, values)
 const max = Math.max.apply(Math, values)
 return (x) => {
  // eslint-disable-next-line no-magic-numbers
  const nonRed = 255 - Math.round((255 * (x - min)) / (max - min))
  return { backgroundColor: `rgb(255,${nonRed},${nonRed})` }
 }
}
function makeRenderer(opts = {}) {
 const TableRenderer = {
  name: opts.name,
  mixins: [defaultProps],
  props: {
   heatmapMode: String,
   tableColorScaleGenerator: {
    type: Function,
    default: redColorScaleGenerator
   },
   tableOptions: {
    type: Object,
    default: function () {
     return {
      clickCallback: null
     }
    }
   },
   localeStrings: {
    type: Object,
    default: function () {
     return {
      totals: 'Totals'
     }
    }
   }
  },
  methods: {
   spanSize(arr, i, j) {
    // helper function for setting row/col-span in pivotTableRenderer
    let x
    if (i !== 0) {
     let asc, end
     let noDraw = true
     for (
      x = 0, end = j, asc = end >= 0;
      asc ? x <= end : x >= end;
      asc ? x++ : x--
     ) {
      if (arr[i - 1][x] !== arr[i][x]) {
       noDraw = false
      }
     }
     if (noDraw) {
      return -1
     }
    }
    let len = 0
    while (i + len < arr.length) {
     let asc1, end1
     let stop = false
     for (
      x = 0, end1 = j, asc1 = end1 >= 0;
      asc1 ? x <= end1 : x >= end1;
      asc1 ? x++ : x--
     ) {
      if (arr[i][x] !== arr[i + len][x]) {
       stop = true
      }
     }
     if (stop) {
      break
     }
     len++
    }
    return len
   }
  },
  render(h) {
   let pivotData = null
   try {
    const props = Object.assign({}, this.$props, this.$attrs.props)
    pivotData = new PivotData(props)
   } catch (error) {
    // eslint-disable-next-line no-console
    if (console && console.error(error.stack)) {
     return this.computeError(h)
    }
   }
   const colAttrs = pivotData.props.cols
   const rowAttrs = pivotData.props.rows
   const rowKeys = pivotData.getRowKeys()
   const colKeys = pivotData.getColKeys()
   const grandTotalAggregators = pivotData.getAggregator([], [])
   // eslint-disable-next-line no-unused-vars
   let valueCellColors = () => {}
   // eslint-disable-next-line no-unused-vars
   let rowTotalColors = () => {}
   // eslint-disable-next-line no-unused-vars
   let colTotalColors = () => {}
   if (opts.heatmapMode) {
    const colorScaleGenerator = this.tableColorScaleGenerator
    const rowTotalValues = colKeys.map((x) =>
     pivotData.getAggregator([], x).value()
    )
    rowTotalColors = colorScaleGenerator(rowTotalValues)
    const colTotalValues = rowKeys.map((x) =>
     pivotData.getAggregator(x, []).value()
    )
    colTotalColors = colorScaleGenerator(colTotalValues)

    if (opts.heatmapMode === 'full') {
     const allValues = []
     rowKeys.map((r) =>
      colKeys.map((c) => allValues.push(pivotData.getAggregator(r, c).value()))
     )
     const colorScale = colorScaleGenerator(allValues)
     valueCellColors = (r, c, v) => colorScale(v)
    } else if (opts.heatmapMode === 'row') {
     const rowColorScales = {}
     rowKeys.forEach((r) => {
      const rowValues = colKeys.map((x) =>
       pivotData.getAggregator(r, x).value()
      )
      rowColorScales[r] = colorScaleGenerator(rowValues)
     })
     valueCellColors = (r, c, v) => rowColorScales[r](v)
    } else if (opts.heatmapMode === 'col') {
     const colColorScales = {}
     colKeys.forEach((c) => {
      const colValues = rowKeys.map((x) =>
       pivotData.getAggregator(x, c).value()
      )
      colColorScales[c] = colorScaleGenerator(colValues)
     })
     valueCellColors = (r, c, v) => colColorScales[c](v)
    }
   }
   const getClickHandler = (value, rowValues, colValues) => {
    const tableOptions = this.tableOptions
    if (tableOptions && tableOptions.clickCallback) {
     const filters = {}
     let attr = {}
     for (const i in colAttrs) {
      // eslint-disable-next-line no-prototype-builtins
      if (!colValues.hasOwnProperty(i)) continue
      attr = colAttrs[i]
      if (colValues[i] !== null) {
       filters[attr] = colValues[i]
      }
     }
     for (const i in rowAttrs) {
      // eslint-disable-next-line no-prototype-builtins
      if (!rowValues.hasOwnProperty(i)) continue
      attr = rowAttrs[i]
      if (rowValues[i] !== null) {
       filters[attr] = rowValues[i]
      }
     }
     return (e) => tableOptions.clickCallback(e, value, filters, pivotData)
    }
   }

   const aggregationAttributesCount = Object.keys(pivotData.aggregators).length

   // Set the total number of AggregationFieldColumns to be created
   const totalColLength = pivotData.colKeys.length

   return h(
    'table',
    {
     staticClass: ['pvtTable']
    },
    [
     h('thead', [
      colAttrs.length !== 0
       ? colAttrs.map((c, j) => {
          return h(
           'tr',
           {
            attrs: {
             key: `colAttrs${j}`
            }
           },
           [
            j === 0 && rowAttrs.length !== 0
             ? h('th', {
                attrs: {
                 colSpan: rowAttrs.length,
                 rowSpan: colAttrs.length
                }
               })
             : undefined,

            h(
             'th',
             {
              staticClass: ['pvtAxisLabel']
             },
             c
            ),

            colKeys.map((colKey, i) => {
             let x = this.spanSize(colKeys, i, j)
             if (x === -1) {
              return null
             } else {
              x *= aggregationAttributesCount
             }

             return h(
              'th',
              {
               staticClass: ['pvtColLabel'],
               attrs: {
                key: `colKey${i}`,
                colSpan: x,
                rowSpan:
                 j === colAttrs.length - 1 &&
                 rowAttrs.length !== 0 &&
                 aggregationAttributesCount === 1
                  ? 2
                  : 1
               }
              },
              colKey[j]
             )
            }),
            j === 0 && this.rowTotal
             ? h(
                'th',
                {
                 staticClass: ['pvtTotalLabel'],
                 attrs: {
                  rowSpan:
                   aggregationAttributesCount > 1
                    ? colAttrs.length
                    : colAttrs.length + 1,
                  colSpan: aggregationAttributesCount
                 }
                },
                this.localeStrings.totals
               )
             : undefined
           ]
          )
         })
       : h(
          'tr',
          {
           attrs: {
            key: `colAttrs0`
           }
          },
          [
           h('th', {
            attrs: {
             colSpan: rowAttrs.length
            }
           }),
           this.rowTotal
            ? h(
               'th',
               {
                staticClass: ['pvtTotalLabel'],
                attrs: {
                 colSpan: aggregationAttributesCount,
                 rowSpan: aggregationAttributesCount > 1 ? 1 : 2
                }
               },
               this.localeStrings.totals
              )
            : undefined
          ]
         ),

      rowAttrs.length !== 0
       ? h('tr', [
          rowAttrs.map((r, i) => {
           return h(
            'th',
            {
             staticClass: ['pvtAxisLabel'],
             attrs: {
              key: `rowAttr${i}`
             }
            },
            r
           )
          }),

          this.rowTotal && colAttrs.length !== 0
           ? h('th', { staticClass: ['pvtTotalLabel'] }, null)
           : undefined,

          aggregationAttributesCount > 1
           ? Array(totalColLength + 1)
              .fill()
              .flatMap((_) =>
               Object.entries(pivotData.aggregators).map(([attribute, _]) =>
                h('th', { staticClass: ['pvtColLabel'] }, attribute)
               )
              )
           : undefined
         ])
       : h('tr', [
          h('th', { staticClass: ['pvtTotalLabel'] }, null),
          aggregationAttributesCount > 1
           ? Array(totalColLength + 1)
              .fill()
              .flatMap((_) =>
               Object.entries(pivotData.aggregators).map(([attribute, _]) =>
                h('th', { staticClass: ['pvtColLabel'] }, attribute)
               )
              )
           : undefined
         ])
     ]),

     h('tbody', [
      rowKeys.map((rowKey, i) => {
       const rowTotalAggregators = pivotData.getAggregator(rowKey, [])
       return h(
        'tr',
        {
         attrs: {
          key: `rowKeyRow${i}`
         }
        },
        [
         rowKey.map((text, j) => {
          const x = this.spanSize(rowKeys, i, j)
          if (x === -1) {
           return null
          }
          return h(
           'th',
           {
            staticClass: ['pvtRowLabel'],
            attrs: {
             key: `rowKeyLabel${i}-${j}`,
             rowSpan: x,
             colSpan: j === rowAttrs.length - 1 && colAttrs.length !== 0 ? 2 : 1
            }
           },
           text
          )
         }),

         colKeys.flatMap((colKey, j) => {
          const aggregators = pivotData.getAggregator(rowKey, colKey)
          return aggregators.map((agg) => {
           return h(
            'td',
            {
             staticClass: ['pvVal'],
             style: valueCellColors(rowKey, colKey, agg.value()),
             attrs: {
              key: `pvtVal${i}-${j}`
             },
             on: this.tableOptions.clickCallback
              ? {
                 click: getClickHandler(agg.value(), rowKey, colKey)
                }
              : {}
            },
            agg.format(agg.value())
           )
          })
         }),

         this.rowTotal
          ? rowTotalAggregators.map((totalAggregator) =>
             h(
              'td',
              {
               staticClass: ['pvtTotal'],
               style: colTotalColors(totalAggregator.value()),
               on: this.tableOptions.clickCallback
                ? {
                   click: getClickHandler(totalAggregator.value(), rowKey, [])
                  }
                : {}
              },
              totalAggregator.format(totalAggregator.value())
             )
            )
          : undefined
        ]
       )
      }),

      h('tr', [
       this.colTotal
        ? h(
           'th',
           {
            staticClass: ['pvtTotalLabel'],
            attrs: {
             colSpan: rowAttrs.length + (colAttrs.length === 0 ? 0 : 1)
            }
           },
           this.localeStrings.totals
          )
        : undefined,

       this.colTotal
        ? colKeys.flatMap((colKey, i) => {
           const columnTotalAggregators = pivotData.getAggregator([], colKey)
           return columnTotalAggregators.map((totalAggregator) =>
            h(
             'td',
             {
              staticClass: ['pvtTotal'],
              style: rowTotalColors(totalAggregator.value()),
              attrs: {
               key: `total${i}`
              },
              on: this.tableOptions.clickCallback
               ? {
                  click: getClickHandler(totalAggregator.value(), [], colKey)
                 }
               : {}
             },
             totalAggregator.format(totalAggregator.value())
            )
           )
          })
        : undefined,

       this.colTotal && this.rowTotal
        ? grandTotalAggregators.map((grandTotalAggregator) =>
           h(
            'td',
            {
             staticClass: ['pvtGrandTotal'],
             on: this.tableOptions.clickCallback
              ? {
                 click: getClickHandler(grandTotalAggregator.value(), [], [])
                }
              : {}
            },
            grandTotalAggregator.format(grandTotalAggregator.value())
           )
          )
        : undefined
      ])
     ])
    ]
   )
  },
  renderError(h, error) {
   return this.renderError(h)
  }
 }
 return TableRenderer
}

const TSVExportRenderer = {
 name: 'tsv-export-renderers',
 mixins: [defaultProps],
 render(h) {
  const pivotData = new PivotData(this.$props)
  const rowKeys = pivotData.getRowKeys()
  const colKeys = pivotData.getColKeys()
  if (rowKeys.length === 0) {
   rowKeys.push([])
  }
  if (colKeys.length === 0) {
   colKeys.push([])
  }
  const headerRow = pivotData.props.rows.map((r) => r)
  if (colKeys.length === 1 && colKeys[0].length === 0) {
   headerRow.push(this.aggregatorName)
  } else {
   colKeys.map((c) => headerRow.push(c.join('-')))
  }

  const result = rowKeys.map((r) => {
   const row = r.map((x) => x)
   colKeys.forEach((c) => {
    const v = pivotData.getAggregator(r, c).value()
    row.push(v || '')
   })
   return row
  })
  result.unshift(headerRow)
  return h('textarea', {
   style: {
    width: `100%`,
    height: `${window.innerHeight / 2}px`
   },
   attrs: {
    readOnly: true
   },
   domProps: {
    value: result.map((r) => r.join('\t')).join('\n')
   }
  })
 },
 renderError(h, error) {
  return this.renderError(h)
 }
}

export default {
 Table: makeRenderer({ name: 'vue-table' }),
 'Table Heatmap': makeRenderer({
  heatmapMode: 'full',
  name: 'vue-table-heatmap'
 }),
 'Table Col Heatmap': makeRenderer({
  heatmapMode: 'col',
  name: 'vue-table-col-heatmap'
 }),
 'Table Row Heatmap': makeRenderer({
  heatmapMode: 'row',
  name: 'vue-table-col-heatmap'
 }),
 'Export Table TSV': TSVExportRenderer
}
