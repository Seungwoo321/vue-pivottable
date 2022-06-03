import defaultProps from './helper/common'
import DraggableAttribute from './DraggableAttribute'
import Dropdown from './Dropdown'
import Pivottable from './Pivottable'
import TableRenderer from './TableRenderer'
import PlotlyRenderer from './PlotlyRenderer'
import { PivotData, getSort, sortAs, aggregators } from './helper/utils'
import draggable from 'vuedraggable'
export default {
 name: 'vue-pivottable-ui',
 mixins: [defaultProps],
 model: {
  prop: 'config',
  event: 'onRefresh'
 },
 props: {
  async: {
   type: Boolean,
   default: false
  },
  hiddenAttributes: {
   type: Array,
   default: function () {
    return []
   }
  },
  hiddenFromAggregators: {
   type: Array,
   default: function () {
    return []
   }
  },
  hiddenFromDragDrop: {
   type: Array,
   default: function () {
    return []
   }
  },
  sortonlyFromDragDrop: {
   type: Array,
   default: function () {
    return []
   }
  },
  disabledFromDragDrop: {
   type: Array,
   default: function () {
    return []
   }
  },
  menuLimit: {
   type: Number,
   default: 500
  },
  config: {
   type: Object,
   default: function () {
    return {}
   }
  }
 },
 computed: {
  appliedFilter() {
   return this.propsData.valueFilter
  },
  rendererItems() {
   return this.renderers || Object.assign({}, TableRenderer, PlotlyRenderer)
  },
  aggregatorItems() {
   return this.aggregators || aggregators
  },
  rowAttrs() {
   return this.propsData.rows.filter(
    (e) =>
     !this.hiddenAttributes.includes(e) && !this.hiddenFromDragDrop.includes(e)
   )
  },
  colAttrs() {
   return this.propsData.cols.filter(
    (e) =>
     !this.hiddenAttributes.includes(e) && !this.hiddenFromDragDrop.includes(e)
   )
  },
  unusedAttrs() {
   return this.propsData.attributes
    .filter(
     (e) =>
      !this.propsData.rows.includes(e) &&
      !this.propsData.cols.includes(e) &&
      !this.hiddenAttributes.includes(e) &&
      !this.hiddenFromDragDrop.includes(e)
    )
    .sort(sortAs(this.unusedOrder))
  }
 },
 data() {
  return {
   propsData: {
    selectedAggregators: [],
    aggregatorName: '',
    rendererName: '',
    rowOrder: {},
    colOrder: {},
    vals: [],
    cols: [],
    rows: [],
    attributes: [],
    valueFilter: {},
    renderer: null
   },
   pivotData: [],
   openStatus: {},
   attrValues: {},
   unusedOrder: [],
   zIndices: {},
   maxZIndex: 1000,
   openDropdown: false,
   materializedInput: [],
   sortIcons: {
    key_a_to_z: {
     rowSymbol: '↕',
     colSymbol: '↔',
     next: 'value_a_to_z'
    },
    value_a_to_z: {
     rowSymbol: '↓',
     colSymbol: '→',
     next: 'value_z_to_a'
    },
    value_z_to_a: {
     rowSymbol: '↑',
     colSymbol: '←',
     next: 'key_a_to_z'
    }
   }
  }
 },
 beforeUpdated(nextProps) {
  this.materializeInput(nextProps.data)
 },
 watch: {
  cols: {
   handler(value) {
    this.propsData.cols = value
    this.$emit('update:cols', value)
   }
  },
  rows: {
   handler(value) {
    this.propsData.rows = value
    this.$emit('update:rows', value)
   }
  },
  rendererName: {
   handler(value) {
    this.propsData.rendererName = value
   }
  },
  appliedFilter: {
   handler(value, oldValue) {
    this.$emit('update:valueFilter', value)
   },
   immediate: true,
   deep: true
  },
  valueFilter: {
   handler(value) {
    this.propsData.valueFilter = value
   },
   immediate: true,
   deep: true
  },
  data: {
   handler(value) {
    this.init()
   },
   immediate: true,
   deep: true
  },
  attributes: {
   handler(value) {
    this.propsData.attributes =
     value.length > 0 ? value : Object.keys(this.attrValues)
   },
   deep: true
  },
  propsData: {
   handler(value) {
    if (this.pivotData.length === 0) return
    const props = {
     derivedAttributes: this.derivedAttributes,
     hiddenAttributes: this.hiddenAttributes,
     hiddenFromAggregators: this.hiddenFromAggregators,
     hiddenFromDragDrop: this.hiddenFromDragDrop,
     sortonlyFromDragDrop: this.sortonlyFromDragDrop,
     disabledFromDragDrop: this.disabledFromDragDrop,
     menuLimit: this.menuLimit,
     attributes: value.attributes,
     unusedAttrs: this.unusedAttrs,
     sorters: this.sorters,
     data: this.materializedInput,
     rowOrder: value.rowOrder,
     colOrder: value.colOrder,
     valueFilter: value.valueFilter,
     rows: value.rows,
     cols: value.cols,
     rendererName: value.rendererName,
     aggregatorName: value.aggregatorName,
     aggregators: this.aggregatorItems,
     selectedAggregators: value.selectedAggregators,
     vals: value.vals
    }
    this.$emit('onRefresh', props)
   },
   immediate: false,
   deep: true
  }
 },
 methods: {
  init() {
   // Set dynamic defaults
   this.$set(this.rowOrder, '0', 'key_a_to_z')
   this.$set(this.colOrder, '0', 'key_a_to_z')

   this.materializeInput(this.data)
   this.propsData.vals = this.vals.slice()
   this.propsData.rows = this.rows
   this.propsData.cols = this.cols
   this.propsData.rowOrder = this.rowOrder
   this.propsData.colOrder = this.colOrder
   this.propsData.rendererName = this.rendererName
   this.propsData.aggregatorName = this.aggregatorName
   this.propsData.selectedAggregators = this.selectedAggregators
   this.propsData.attributes =
    this.attributes.length > 0 ? this.attributes : Object.keys(this.attrValues)
   this.unusedOrder = this.unusedAttrs

   this.localeStrings = this.locales[this.locale].localeStrings

   Object.keys(this.attrValues).forEach((key) => {
    let valueFilter = {}
    const values = this.valueFilter && this.valueFilter[key]
    if (values && Object.keys(values).length) {
     valueFilter = this.valueFilter[key]
    }
    this.updateValueFilter({
     attribute: key,
     valueFilter
    })
   })
  },
  numValsAllowed(aggregatorName) {
   return this.aggregatorItems[aggregatorName]([])().numInputs || 0
  },
  assignValue(field) {
   this.$set(this.propsData.valueFilter, field, {})
  },
  propUpdater(key) {
   return (value) => {
    this.propsData[key] = value
   }
  },
  updateRowOrder(index, order) {
   this.propsData.rowOrder = {}
   this.$set(this.propsData.rowOrder, index, order)
  },
  updateColOrder(index, order) {
   this.propsData.colOrder = {}
   this.$set(this.propsData.colOrder, index, order)
  },
  updateAggregator(index, name, vals) {
   this.$set(this.propsData.selectedAggregators, index, { name, vals })
  },
  addAggregator() {
   this.propsData.selectedAggregators.push({ name: 'Count', vals: [] })
  },
  removeAggregator(index) {
   this.propsData.selectedAggregators.splice(index, 1)
  },
  updateValueFilter({ attribute, valueFilter }) {
   this.$set(this.propsData.valueFilter, attribute, valueFilter)
  },
  moveFilterBoxToTop({ attribute }) {
   this.maxZIndex += 1
   this.zIndices[attribute] = this.maxZIndex + 1
  },
  openFilterBox({ attribute, open }) {
   this.$set(this.openStatus, attribute, open)
  },
  closeFilterBox(event) {
   this.openStatus = {}
  },
  materializeInput(nextData) {
   if (this.pivotData === nextData) {
    return
   }
   this.pivotData = nextData
   const attrValues = {}
   const materializedInput = []
   let recordsProcessed = 0
   PivotData.forEachRecord(
    this.pivotData,
    this.derivedAttributes,
    function (record) {
     materializedInput.push(record)
     for (const attr of Object.keys(record)) {
      if (!(attr in attrValues)) {
       attrValues[attr] = {}
       if (recordsProcessed > 0) {
        attrValues[attr].null = recordsProcessed
       }
      }
     }
     for (const attr in attrValues) {
      const value = attr in record ? record[attr] : 'null'
      if (!(value in attrValues[attr])) {
       attrValues[attr][value] = 0
      }
      attrValues[attr][value]++
     }
     recordsProcessed++
    }
   )
   this.materializedInput = materializedInput
   this.attrValues = attrValues
  },
  makeDnDCell(
   items,
   label,
   onChange,
   classes,
   h,
   maxWidth = false,
   available = false
  ) {
   const scopedSlots = this.$scopedSlots.pvtAttr
   return h(
    'div',
    {
     staticClass: [
      `pvtAxisContainerWrapper ${maxWidth ? 'pvtVertList' : ''} ${
       available ? 'pvtAvailableFields' : ''
      }`
     ]
    },
    [
     this.labels ? h('span', label) : undefined,
     h(
      draggable,
      {
       attrs: {
        draggable: 'li[data-id]',
        group: 'sharted',
        filter: '.pvtFilterBox',
        preventOnFilter: false,
        tag: 'div'
       },
       props: {
        value: items
       },
       staticClass: classes,
       on: {
        sort: onChange.bind(this)
       }
      },
      [
       items.map((x) => {
        return h(DraggableAttribute, {
         [scopedSlots ? 'scopedSlots' : undefined]: {
          pvtAttr: (props) => h('slot', scopedSlots(props))
         },
         props: {
          sortable:
           this.sortonlyFromDragDrop.includes(x) ||
           !this.disabledFromDragDrop.includes(x),
          draggable:
           !this.sortonlyFromDragDrop.includes(x) &&
           !this.disabledFromDragDrop.includes(x),
          name: x,
          key: x,
          attrValues: this.attrValues[x],
          sorter: getSort(this.sorters, x),
          menuLimit: this.menuLimit,
          zIndex: this.zIndices[x] || this.maxZIndex,
          valueFilter: this.propsData.valueFilter[x],
          open: this.openStatus[x],
          async: this.async,
          unused: this.unusedAttrs.includes(x),
          localeStrings: this.localeStrings
         },
         domProps: {},
         on: {
          'update:filter': this.updateValueFilter,
          'moveToTop:filterbox': this.moveFilterBoxToTop,
          'open:filterbox': this.openFilterBox,
          'no:filterbox': () => this.$emit('no:filterbox')
         }
        })
       })
      ]
     )
    ]
   )
  },
  rendererCell(rendererName, h) {
   return this.$slots.rendererCell
    ? h('div', this.$slots.rendererCell)
    : h('div', { staticClass: ['pvtRenderContainer'] }, [
       h(Dropdown, {
        props: {
         values: Object.keys(this.rendererItems),
         value: rendererName
        },
        on: {
         input: (value) => {
          this.propUpdater('rendererName')(value)
          this.propUpdater('renderer', this.rendererItems[this.rendererName])
         }
        }
       })
      ])
  },
  aggregatorCell(selectedAggregators, isPlot, h) {
   return this.$slots.aggregatorCell
    ? h('div', this.$slots.aggregatorCell)
    : h('div', { staticClass: ['pvtValuesWrapper'] }, [
       this.labels ? h('span', this.localeStrings.values) : undefined, // TODO set in localization
       h(
        draggable,
        {
         attrs: {
          list: selectedAggregators,
          tag: 'div'
         },
         staticClass: ['pvtVals']
        },
        [
         selectedAggregators.map(
          ({ name: aggregatorName, vals: attributes }, index) => {
           return h(
            'div',
            {
             staticClass: [
              `pvtValAttribute ${
               index > 0 && isPlot ? 'pvtValAttributeInactive' : ''
              }`
             ]
            },
            [
             h(Dropdown, {
              style: {
               display: 'inline-block'
              },
              props: {
               values: Object.keys(this.aggregatorItems),
               value: aggregatorName
              },
              on: {
               input: (selectedAggregatorName) => {
                const valsAllowed = this.numValsAllowed(selectedAggregatorName)
                if (attributes.length !== valsAllowed) {
                 attributes = new Array(valsAllowed)
                  .fill()
                  .map(
                   (_, i) =>
                    Object.keys(this.attrValues).filter(
                     (e) =>
                      !this.hiddenAttributes.includes(e) &&
                      !this.hiddenFromAggregators.includes(e)
                    )[i]
                  )
                }
                this.updateAggregator(index, selectedAggregatorName, attributes)
               }
              }
             }),
             this.numValsAllowed(aggregatorName) > 0
              ? new Array(this.numValsAllowed(aggregatorName))
                 .fill()
                 .map((_, i) => [
                  h(Dropdown, {
                   props: {
                    values: Object.keys(this.attrValues).filter(
                     (e) =>
                      !this.hiddenAttributes.includes(e) &&
                      !this.hiddenFromAggregators.includes(e)
                    ),
                    value: attributes[i]
                   },
                   on: {
                    input: (value) => {
                     if (attributes.length === 0) {
                      attributes = [value]
                     } else {
                      attributes.splice(i, 1, value)
                     }

                     this.updateAggregator(index, aggregatorName, attributes)
                    }
                   }
                  })
                 ])
              : undefined,
             h('div', [
              h(
               'a',
               {
                staticClass: ['pvtRowOrder'],
                attrs: {
                 role: 'button'
                },
                on: {
                 click: () => {
                  this.updateRowOrder(
                   index,
                   this.sortIcons[
                    this.propsData.rowOrder[index] ?? 'key_a_to_z'
                   ].next
                  )
                 }
                }
               },
               this.sortIcons[this.propsData.rowOrder[index] ?? 'key_a_to_z']
                .rowSymbol
              ),
              h(
               'a',
               {
                staticClass: ['pvtColOrder'],
                attrs: {
                 role: 'button'
                },
                on: {
                 click: () => {
                  this.updateColOrder(
                   index,
                   this.sortIcons[
                    this.propsData.colOrder[index] ?? 'key_a_to_z'
                   ].next
                  )
                 }
                }
               },
               this.sortIcons[this.propsData.colOrder[index] ?? 'key_a_to_z']
                .colSymbol
              )
             ]),
             h(
              'button',
              {
               staticClass: ['pvtButton'],
               type: 'button',
               on: {
                click: () => {
                 this.removeAggregator(index)
                }
               }
              },
              'Remove'
             )
            ]
           )
          }
         )
        ]
       ),
       h(
        'button',
        {
         staticClass: ['pvtButton'],
         type: 'button',
         on: {
          click: () => {
           this.addAggregator()
          }
         }
        },
        'Add'
       )
      ])
  },
  outputCell(props, isPlotlyRenderer, h) {
   return h('div', { staticClass: ['pvtTableContainer'] }, [
    isPlotlyRenderer
     ? h(PlotlyRenderer[props.rendererName], {
        props
       })
     : h(Pivottable, {
        props: Object.assign(props, { tableMaxWidth: this.tableMaxWidth })
       })
   ])
  }
 },
 render(h) {
  if (this.data.length < 1) return
  const outputScopedSlot = this.$scopedSlots.output
  const outputSlot = this.$slots.output
  const rendererName = this.propsData.rendererName
  const aggregationAttributes = this.propsData.selectedAggregators.flatMap(
   ({ _, attr }) => attr
  )
  const vals = this.propsData.vals
  const unusedAttrsCell = this.makeDnDCell(
   // Exclude aggregation filters from unused filter options
   this.unusedAttrs.filter((a) => aggregationAttributes.indexOf(a) === -1),
   this.localeStrings.unused,
   (e) => {
    const item = e.item.getAttribute('data-id')
    if (
     this.sortonlyFromDragDrop.includes(item) &&
     (!e.from.classList.contains('pvtUnused') ||
      !e.to.classList.contains('pvtUnused'))
    ) {
     return
    }
    if (e.from.classList.contains('pvtUnused')) {
     this.openFilterBox({ attribute: item, open: false })
     this.unusedOrder.splice(e.oldIndex, 1)
     this.$emit('dragged:unused', item)
    }
    if (e.to.classList.contains('pvtUnused')) {
     this.openFilterBox({ attribute: item, open: false })
     this.unusedOrder.splice(e.newIndex, 0, item)
     this.$emit('dropped:unused', item)
    }
   },
   `pvtAxisContainer pvtUnused pvtVertList pvtVertDraggable`,
   h,
   true,
   true
  )
  const colAttrsCell = this.makeDnDCell(
   this.colAttrs,
   this.localeStrings.columns,
   (e) => {
    const item = e.item.getAttribute('data-id')
    if (
     this.sortonlyFromDragDrop.includes(item) &&
     (!e.from.classList.contains('pvtCols') ||
      !e.to.classList.contains('pvtCols'))
    ) {
     return
    }
    if (e.from.classList.contains('pvtCols')) {
     this.propsData.cols.splice(e.oldIndex, 1)
     this.$emit('dragged:cols', item)
    }
    if (e.to.classList.contains('pvtCols')) {
     this.propsData.cols.splice(e.newIndex, 0, item)
     this.$emit('dropped:cols', item)
    }
   },
   'pvtAxisContainer pvtCols pvtHorizontalDraggable',
   h
  )
  const rowAttrsCell = this.makeDnDCell(
   this.rowAttrs,
   this.localeStrings.rows, // Set in localization
   (e) => {
    const item = e.item.getAttribute('data-id')
    if (
     this.sortonlyFromDragDrop.includes(item) &&
     (!e.from.classList.contains('pvtRows') ||
      !e.to.classList.contains('pvtRows'))
    ) {
     return
    }
    if (e.from.classList.contains('pvtRows')) {
     this.propsData.rows.splice(e.oldIndex, 1)
     this.$emit('dragged:rows', item)
    }
    if (e.to.classList.contains('pvtRows')) {
     this.propsData.rows.splice(e.newIndex, 0, item)
     this.$emit('dropped:rows', item)
    }
   },
   'pvtAxisContainer pvtRows pvtHorizontalDraggable',
   h
  )

  const props = Object.assign({}, this.$props, {
   localeStrings: this.localeStrings,
   data: this.materializedInput,
   rowOrder: this.propsData.rowOrder,
   colOrder: this.propsData.colOrder,
   valueFilter: this.propsData.valueFilter,
   rows: this.propsData.rows,
   cols: this.propsData.cols,
   aggregators: this.aggregatorItems,
   selectedAggregators: this.propsData.selectedAggregators,
   rendererName,
   vals
  })

  let pivotData = null

  if (outputScopedSlot && !outputSlot) {
   try {
    pivotData = new PivotData(props)
   } catch (error) {
    // eslint-disable-next-line no-console
    if (console && console.error(error.stack)) {
     return this.computeError(h)
    }
   }
  }

  const isPlot = rendererName.indexOf('Chart') > -1
  const rendererCell = this.rendererCell(rendererName, h)
  const aggregatorCell = this.aggregatorCell(
   this.propsData.selectedAggregators,
   isPlot,
   h
  )

  const outputCell = this.outputCell(props, isPlot, h)
  const colGroupSlot = this.$slots.colGroup

  return h('div', { staticClass: ['pvtUIContainer'] }, [
   colGroupSlot,
   h('div', { staticClass: ['pvtUIRowContainer'] }, [rendererCell]),
   h('div', { staticClass: ['pvtUIRowContainer'] }, [
    unusedAttrsCell,
    aggregatorCell
   ]),
   h('div', { staticClass: ['pvtUIRowTopContainer'] }, [
    colAttrsCell,
    rowAttrsCell
   ]),
   h('div', { staticClass: ['pvtUIRowBottomContainer'] }, [
    outputSlot ? h('div', outputSlot) : undefined,
    outputScopedSlot && !outputSlot
     ? h('div', outputScopedSlot({ pivotData }))
     : undefined,
    !outputSlot && !outputScopedSlot ? outputCell : undefined
   ])
  ])
 },
 renderError(h, error) {
  return this.uiRenderError(h)
 }
}
