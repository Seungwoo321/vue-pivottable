import { debounce } from 'lodash'
import { PivotUtilities } from 'vue-pivottable'
import defaultProps from './common'
function redColorScaleGenerator (values) {
  const min = Math.min.apply(Math, values)
  const max = Math.max.apply(Math, values)
  return x => {
    // eslint-disable-next-line no-magic-numbers
    const nonRed = 255 - Math.round(255 * (x - min) / (max - min))
    return { backgroundColor: `rgb(255,${nonRed},${nonRed})` }
  }
}
function makeRenderer (opts = {}) {
  const scrollRenderer = {
    name: opts.name,
    mixins: [defaultProps],
    props: {
      colLimit: {
        type: Number,
        default: 100
      },
      rowLimit: {
        type: Number,
        default: 100
      },
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
    data () {
      return {
        scrollEvent: null,
        colStart: 0,
        rowStart: 0,
        colEnd: 100,
        rowEnd: 100
      }
    },
    created () {
      this.colEnd = this.colLimit
      this.rowEnd = this.rowLimit
    },
    computed: {
      pivotData () {
        const props = { ...this.$props, ...this.$attrs.props }
        return new PivotUtilities.PivotData(props)
      },
      maxRows () {
        return this.pivotData.getRowKeys().length - 1
      },
      maxCols () {
        return this.pivotData.getColKeys().length - 1
      },
      loaded () {
        return this.rowEnd >= this.maxRows && this.colEnd >= this.maxCols
      }
    },
    methods: {
      isOverlap (arr, i, j) {
        if (j === 0) return -1
        if (arr[j].length - 1 === i) return -1
        if (i === 0) {
          if (arr[j][i] === arr[j - 1][i]) return 1
          else return -1
        }
        while (i > 0) {
          if (arr[j][i] === arr[j - 1][i] && arr[j][i - 1] === arr[j - 1][i - 1]) i--
          else return -1
        }
      },
      handleKeydownendEvent (e) {
        if (e.code === 'PageDown') {
          this.handleScrollRender()
        }
        if (e.code === 'end') {
          this.handleScrollRender()
        }
        if (e.ecode === 'ArrowDown') {
          this.handleScrollRender()
        }
      },
      handleScrollRender () {
        if (this.rowEnd <= this.maxRows) {
          this.rowEnd += this.rowLimit
        }
        if (this.colEnd <= this.maxCols) {
          this.colEnd += this.colLimit
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', debounce(this.handleScrollRender.bind(this), 1000))
      window.addEventListener('keydown', debounce(this.handleKeydownendEvent.bind(this), 1000))
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScrollRender)
      window.removeEventListener('keydown', this.handleKeydownendEvent)
    },
    render (h) {
      if (!this.pivotData) {
        return this.computeError(h)
      }
      const { rowStart, rowEnd, colStart, colEnd, isOverlap, pivotData, rowTotal, colTotal, localeStrings } = this
      const { cols: colAttrs, rows: rowAttrs } = pivotData.props
      const rowKeys = pivotData.getRowKeys()
      const colKeys = pivotData.getColKeys()
      // eslint-disable-next-line no-unused-vars
      let valueCellColors = () => { }
      // eslint-disable-next-line no-unused-vars
      let rowTotalColors = () => { }
      // eslint-disable-next-line no-unused-vars
      let colTotalColors = () => { }
      if (opts.heatmapMode) {
        const colorScaleGenerator = this.tableColorScaleGenerator
        const rowTotalValues = colKeys.map(x =>
          pivotData.getAggregator([], x).value()
        )
        rowTotalColors = colorScaleGenerator(rowTotalValues)
        const colTotalValues = rowKeys.map(x =>
          pivotData.getAggregator(x, []).value()
        )
        colTotalColors = colorScaleGenerator(colTotalValues)

        if (opts.heatmapMode === 'full') {
          const allValues = []
          rowKeys.map(r =>
            colKeys.map(c =>
              allValues.push(pivotData.getAggregator(r, c).value())
            )
          )
          const colorScale = colorScaleGenerator(allValues)
          valueCellColors = (r, c, v) => colorScale(v)
        } else if (opts.heatmapMode === 'row') {
          const rowColorScales = {}
          rowKeys.map(r => {
            const rowValues = colKeys.map(x =>
              pivotData.getAggregator(r, x).value()
            )
            rowColorScales[r] = colorScaleGenerator(rowValues)
          })
          valueCellColors = (r, c, v) => rowColorScales[r](v)
        } else if (opts.heatmapMode === 'col') {
          const colColorScales = {}
          colKeys.map(c => {
            const colValues = rowKeys.map(x =>
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
          for (let i in colAttrs) {
            if (!colValues.hasOwnProperty(i)) continue
            attr = colAttrs[i]
            if (colValues[i] !== null) {
              filters[attr] = colValues[i]
            }
          }
          for (let i in rowAttrs) {
            if (!rowValues.hasOwnProperty(i)) continue
            attr = rowAttrs[i]
            if (rowValues[i] !== null) {
              filters[attr] = rowValues[i]
            }
          }
          return e => tableOptions.clickCallback(e, value, filters, pivotData)
        }
      }
      const theadTh = (h, i, colIndex) => {
        const elements = []
        const [colStart, colEnd] = colIndex
        for (let j = colStart; j < colEnd; j++) {
          if (!colKeys.hasOwnProperty(j)) continue
          const x = isOverlap(colKeys, i, j)
          elements.push(
            h('th', {
              class: {
                pvtColLabel: true
              },
              style: {
                'border-right': 'none',
                'border-left': x !== -1 ? 'none' : null
              },
              attrs: {
                rowspan: (i === colAttrs.length - 1) && rowAttrs.length ? 2 : null
              }
            }, x === -1 ? colKeys[j][i] : null)
          )
        }
        if (rowTotal && i === 0) {
          elements.push(
            h('th', {
              className: {
                pvtTotalLabel: true,
                pvtRowTotalLabel: true
              },
              attrs: {
                rowspan: colAttrs.length + (rowAttrs.length === 0 ? 0 : 1)
              }
            }, localeStrings.totals)
          )
        }
        return elements
      }
      const theadThTotal = (h) => {
        return rowAttrs.length !== 0 ? h('tr',
          [
            rowAttrs.map((r, i) => {
              return h('th', {
                class: {
                  pvtAxisLabel: true
                },
                attrs: {
                  key: `rowAttr${i}`
                }
              }, r)
            }),
            rowTotal || colAttrs.length ? h('th', {
              class: {
                pvtTotalLabel: true
              }
            }, '') : null
          ]
        ) : null
      }
      const tbodyTr = (h, colIndex, rowIndex) => {
        const elements = []
        const [rowStart, rowEnd] = rowIndex
        for (let i = rowStart; i < rowEnd; i++) {
          if (!rowKeys.hasOwnProperty(i)) continue
          elements.push(
            h('tr', [
              tbodyTrTh(h, i),
              tbodyTrTd(h, i, colIndex)
            ]
            )
          )
        }
        return elements
      }
      const tbodyTrTh = (h, i) => {
        const elements = []
        const rowKey = rowKeys[i]
        for (let j = 0; j < rowKey.length; j++) {
          if (!rowKey.hasOwnProperty(j)) continue
          const x = isOverlap(rowKeys, j, i)
          elements.push(
            h('th', {
              className: {
                pvtRowLabel: true
              },
              style: {
                'border-bottom': 'none',
                'border-top': x !== -1 ? 'none' : null
              },
              attrs: {
                key: `rowKeyLabel${i}-${j}`,
                colspan: colAttrs.length && j === rowKey.length - 1 ? 2 : null
              }
            }, x === -1 ? rowKey[j] : null)
          )
        }
        return elements
      }
      const tbodyTrTd = (h, i, colIndex) => {
        const elements = []
        const rowKey = rowKeys[i]
        const [colStart, colEnd] = colIndex
        for (let j = colStart; j < colEnd; j++) {
          if (!colKeys.hasOwnProperty(j)) continue
          const colKey = colKeys[j]
          const aggregator = pivotData.getAggregator(rowKey, colKey)
          const val = aggregator.value()
          elements.push(
            h('td', {
              class: {
                pvVal: true
              },
              style: valueCellColors(rowKey, colKey, val),
              attrs: {
                key: `pvtVal${i}-${j}`
              },
              on: this.tableOptions.clickCallback ? {
                click: getClickHandler(val, rowKey, colKey)
              } : {}
            }, aggregator.format(val))
          )
        }
        if (rowTotal) elements.push(rowTotalTd(h, i))
        return elements
      }
      const rowTotalTd = (h, i) => {
        const rowKey = rowKeys[i]
        const totalAggregator = pivotData.getAggregator(rowKey, [])
        return h('td', {
          class: {
            pvtTotal: true
          },
          style: colTotalColors(totalAggregator.value()),
          on: this.tableOptions.clickCallback ? {
            click: getClickHandler(totalAggregator.value(), rowKey, [])
          } : {}
        }, totalAggregator.format(totalAggregator.value()))
      }
      const colTotalTh = (h) => {
        return colTotal ? h('th', {
          class: {
            pvtTotalLabel: true
          },
          attrs: {
            colspan: rowAttrs.length + (colAttrs.length === 0 ? 0 : 1)
          }
        }, localeStrings.totals) : null
      }
      const colTotalTd = (h, colIndex) => {
        const [colStart, colEnd] = colIndex
        const elements = []
        for (let i = colStart; i < colEnd; i++) {
          if (!colKeys.hasOwnProperty(i)) continue
          const colKey = colKeys[i]
          const totalAggregator = pivotData.getAggregator([], colKey)
          elements.push(h('td', {
            staticClass: ['pvtTotal'],
            style: rowTotalColors(totalAggregator.value()),
            attrs: {
              key: `total${i}`
            },
            on: this.tableOptions.clickCallback ? {
              click: getClickHandler(totalAggregator.value(), [], colKey)
            } : {}
          }, totalAggregator.format(totalAggregator.value())))
        }
        return elements
      }
      const grandTotalTd = (h) => {
        const grandTotalAggregator = pivotData.getAggregator([], [])
        return colTotal && rowTotal ? h('td', {
          staticClass: ['pvtGrandTotal'],
          on: this.tableOptions.clickCallback ? {
            click: getClickHandler(grandTotalAggregator.value(), [], [])
          } : {}
        }, grandTotalAggregator.format(grandTotalAggregator.value())) : undefined
      }
      return h('table', {
        ref: 'pvtOutput',
        staticClass: ['pvtTable']
      }, [
        h('thead',
          [
            colAttrs.map((c, j) => {
              return h('tr', {
                attrs: {
                  key: `colAttrs${j}`
                }
              },
              [
                j === 0 && rowAttrs.length !== 0 ? h('th', {
                  attrs: {
                    colspan: rowAttrs.length,
                    rowspan: colAttrs.length
                  }
                }) : null,
                h('th', {
                  class: {
                    pvtAxisLabel: true
                  }
                }, c),
                theadTh(h, j, [colStart, colEnd])
              ])
            }),
            theadThTotal(h)
          ]
        ),
        h('tbody',
          [
            tbodyTr(h, [colStart, colEnd], [rowStart, rowEnd]),
            !this.loaded && rowEnd < this.maxRows ? h('tr', [
              h('td', {
                style: {
                  'text-align': 'center'
                },
                attrs: {
                  colspan: rowAttrs.length + colEnd + 1
                }
              }, 'loading...')
            ]) : null,
            h('tr', [
              colTotalTh(h),
              colTotalTd(h, [colStart, colEnd]),
              grandTotalTd(h)
            ])
          ]
        )
      ])
    },
    renderError (h, error) {
      return this.computeError(h)
    }
  }
  return scrollRenderer
}

export default {
  'Table': makeRenderer({ name: 'vue-table' }),
  'Table Heatmap': makeRenderer({ heatmapMode: 'full', name: 'vue-table-heatmap' }),
  'Table Col Heatmap': makeRenderer({ heatmapMode: 'col', name: 'vue-table-col-heatmap' }),
  'Table Row Heatmap': makeRenderer({ heatmapMode: 'row', name: 'vue-table-col-heatmap' })
}
