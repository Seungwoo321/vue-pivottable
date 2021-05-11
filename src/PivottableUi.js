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
  mixins: [
    defaultProps
  ],
  model: {
    prop: 'config',
    event: 'onRefresh'
  },
  props: {
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
    rowLimit: {
      type: Number,
      default: 0
    },
    colLimit: {
      type: Number,
      default: 0
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
    appliedFilter () {
      return this.propsData.valueFilter
    },
    rendererItems () {
      return (this.renderers) || Object.assign({}, TableRenderer, PlotlyRenderer)
    },
    aggregatorItems () {
      return (this.aggregators) || aggregators
    },
    numValsAllowed () {
      return this.aggregatorItems[this.propsData.aggregatorName]([])().numInputs || 0
    },
    rowAttrs () {
      return this.propsData.rows.filter(
        e =>
          !this.hiddenAttributes.includes(e) &&
                    !this.hiddenFromDragDrop.includes(e)
      )
    },
    colAttrs () {
      return this.propsData.cols.filter(
        e =>
          !this.hiddenAttributes.includes(e) &&
                    !this.hiddenFromDragDrop.includes(e)
      )
    },
    unusedAttrs () {
      return this.propsData.attributes
        .filter(
          e =>
            !this.propsData.rows.includes(e) &&
                        !this.propsData.cols.includes(e) &&
                        !this.hiddenAttributes.includes(e) &&
                        !this.hiddenFromDragDrop.includes(e)
        )
        .sort(sortAs(this.unusedOrder))
    }
  },
  data () {
    return {
      propsData: {
        aggregatorName: '',
        rendererName: '',
        rowOrder: 'key_a_to_z',
        colOrder: 'key_a_to_z',
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
  beforeUpdated (nextProps) {
    this.materializeInput(nextProps.data)
  },
  watch: {
    cols: {
      handler (value) {
        this.propsData.cols = value
      }
    },
    rows: {
      handler (value) {
        this.propsData.rows = value
      }
    },
    rendererName: {
      handler (value) {
        this.propsData.rendererName = value
      }
    },
    appliedFilter: {
      handler (value, oldValue) {
        this.$emit('update:valueFilter', value)
      },
      immediate: true,
      deep: true
    },
    valueFilter: {
      handler (value) {
        this.propsData.valueFilter = value
      },
      immediate: true,
      deep: true
    },
    data: {
      handler (value) {
        this.init()
      },
      immediate: true,
      deep: true
    },
    attributes: {
      handler (value) {
        this.propsData.attributes = value.length > 0 ? value : Object.keys(this.attrValues)
      },
      deep: true
    },
    propsData: {
      handler (value) {
        if (this.pivotData.length === 0) return
        const {
          derivedAttributes,
          hiddenAttributes,
          hiddenFromAggregators,
          hiddenFromDragDrop,
          sortonlyFromDragDrop,
          disabledFromDragDrop,
          menuLimit,
          rowLimit,
          colLimit,
          unusedAttrs,
          sorters
        } = this
        const props = {
          derivedAttributes,
          hiddenAttributes,
          hiddenFromAggregators,
          hiddenFromDragDrop,
          sortonlyFromDragDrop,
          disabledFromDragDrop,
          menuLimit,
          rowLimit,
          colLimit,
          attributes: value.attributes,
          unusedAttrs,
          sorters,
          data: this.materializedInput,
          rowOrder: value.rowOrder,
          colOrder: value.colOrder,
          valueFilter: value.valueFilter,
          rows: value.rows,
          cols: value.cols,
          rendererName: value.rendererName,
          aggregatorName: value.aggregatorName,
          aggregators: this.aggregatorItems,
          vals: value.vals
        }
        this.$emit('onRefresh', props)
      },
      immediate: false,
      deep: true
    }
  },
  methods: {
    init () {
      this.materializeInput(this.data)
      this.propsData.vals = this.vals.slice()
      this.propsData.rows = this.rows
      this.propsData.cols = this.cols
      this.propsData.rowOrder = this.rowOrder
      this.propsData.colOrder = this.colOrder
      this.propsData.rendererName = this.rendererName
      this.propsData.aggregatorName = this.aggregatorName
      this.propsData.attributes = this.attributes.length > 0 ? this.attributes : Object.keys(this.attrValues)
      this.unusedOrder = this.unusedAttrs
      Object.keys(this.attrValues).forEach(key => this.updateValueFilter({ attribute: key, valueFilter: this.valueFilter && this.valueFilter[key] && Object.keys(this.valueFilter[key]).length ? this.valueFilter[key] : {} }))
    },
    assignValue (field) {
      this.$set(this.propsData.valueFilter, field, {})
    },
    propUpdater (key) {
      return value => {
        this.propsData[key] = value
      }
    },
    updateValueFilter ({ attribute, valueFilter }) {
      this.$set(this.propsData.valueFilter, attribute, valueFilter)
    },
    moveFilterBoxToTop ({ attribute }) {
      this.maxZIndex += 1
      this.zIndices[attribute] = this.maxZIndex + 1
    },
    openFilterBox ({ attribute, open }) {
      this.openStatus[attribute] = open
    },
    closeFilterBox (event) {
      this.openStatus = {}
    },
    materializeInput (nextData) {
      if (this.pivotData === nextData) {
        return
      }
      this.pivotData = nextData
      const attrValues = {}
      const materializedInput = []
      let recordsProcessed = 0
      PivotData.forEachRecord(this.pivotData, this.derivedAttributes, function (record) {
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
      })
      this.materializedInput = materializedInput
      this.attrValues = attrValues
    },
    makeDnDCell (items, onChange, classes, h) {
      const scopedSlots = this.$scopedSlots.pvtAttr
      return h(draggable, {
        attrs: {
          draggable: 'li[data-id]',
          group: 'sharted',
          ghostClass: '.pvtPlaceholder',
          filter: '.pvtFilterBox',
          preventOnFilter: false,
          tag: 'td'
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
        items.map(x => {
          return h(DraggableAttribute, {
            [scopedSlots ? 'scopedSlots' : undefined]: {
              pvtAttr: props => h('slot', scopedSlots(props))
            },
            props: {
              sortable: this.sortonlyFromDragDrop.includes(x) || !this.disabledFromDragDrop.includes(x),
              draggable: !this.sortonlyFromDragDrop.includes(x) && !this.disabledFromDragDrop.includes(x),
              name: x,
              key: x,
              attrValues: this.attrValues[x],
              sorter: getSort(this.sorters, x),
              menuLimit: this.menuLimit,
              zIndex: this.zIndices[x] || this.maxZIndex,
              valueFilter: this.propsData.valueFilter[x],
              open: this.openStatus[x],
              unused: this.unusedAttrs.includes(x),
              localeStrings: this.localeStrings
            },
            domProps: {
            },
            on: {
              'update:filter': this.updateValueFilter,
              'moveToTop:filterbox': this.moveFilterBoxToTop,
              'open:filterbox': this.openFilterBox
            }
          })
        })
      ])
    },
    rendererCell (rendererName, h) {
      return this.$slots.rendererCell
        ? h('td', {
          staticClass: ['pvtRenderers pvtVals pvtText']
        }, this.$slots.rendererCell)
        : h('td', {
          staticClass: ['pvtRenderers']
        },
        [
          h(Dropdown, {
            props: {
              values: Object.keys(this.rendererItems),
              localeStrings: this.localeStrings.rendererMap
            },
            domProps: {
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
    aggregatorCell (aggregatorName, vals, h) {
      return this.$slots.aggregatorCell
        ? h('td', {
          staticClass: ['pvtVals pvtText']
        }, this.$slots.aggregatorCell)
        : h('td', {
          staticClass: ['pvtVals']
        },
        [
          h('div',
            [
              h(Dropdown, {
                style: {
                  display: 'inline-block'
                },
                props: {
                  values: Object.keys(this.aggregatorItems),
                  localeStrings: this.localeStrings.aggregatorMap
                },
                domProps: {
                  value: aggregatorName
                },
                on: {
                  input: (value) => {
                    this.propUpdater('aggregatorName')(value)
                  }
                }
              }),
              h('a', {
                staticClass: ['pvtRowOrder'],
                attrs: {
                  role: 'button'
                },
                on: {
                  click: () => { this.propUpdater('rowOrder')(this.sortIcons[this.propsData.rowOrder].next) }
                }
              }, this.sortIcons[this.propsData.rowOrder].rowSymbol),
              h('a', {
                staticClass: ['pvtColOrder'],
                attrs: {
                  role: 'button'
                },
                on: {
                  click: () => { this.propUpdater('colOrder')(this.sortIcons[this.propsData.colOrder].next) }
                }
              }, this.sortIcons[this.propsData.colOrder].colSymbol)
            ]
          ),
          this.numValsAllowed > 0
            ? new Array(this.numValsAllowed).fill().map((n, i) => [
              h(Dropdown, {
                props: {
                  values: Object.keys(this.attrValues).filter(e =>
                    !this.hiddenAttributes.includes(e) &&
                                            !this.hiddenFromAggregators.includes(e))
                },
                domProps: {
                  value: vals[i]
                },
                on: {
                  input: (value) => { this.propsData.vals.splice(i, 1, value) }
                }
              })
            ])
            : undefined
        ])
    },
    outputCell (props, isPlotlyRenderer, h) {
      return h('td', {
        staticClass: ['pvtOutput']
      },
      [
        isPlotlyRenderer
          ? h(PlotlyRenderer[props.rendererName], {
            props
          })
          : h(Pivottable, {
            props: {
              ...props,
              tableMaxWidth: this.tableMaxWidth
            }
          })
      ])
    }
  },
  render (h) {
    if (this.data.length < 1) return
    const outputScopedSlot = this.$scopedSlots.output
    const outputSlot = this.$slots.output
    const rendererName = this.propsData.rendererName
    const aggregatorName = this.propsData.aggregatorName
    const vals = this.propsData.vals
    const unusedAttrsCell = this.makeDnDCell(
      this.unusedAttrs,
      e => {
        const item = e.item.getAttribute('data-id')
        if (this.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtUnused') || !e.to.classList.contains('pvtUnused'))) {
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
      `pvtAxisContainer pvtUnused pvtHorizList`,
      h
    )
    const colAttrsCell = this.makeDnDCell(
      this.colAttrs,
      e => {
        const item = e.item.getAttribute('data-id')
        if (this.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtCols') || !e.to.classList.contains('pvtCols'))) {
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
      'pvtAxisContainer pvtHorizList pvtCols',
      h
    )
    const rowAttrsCell = this.makeDnDCell(
      this.rowAttrs,
      e => {
        const item = e.item.getAttribute('data-id')
        if (this.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtRows') || !e.to.classList.contains('pvtRows'))) {
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
      'pvtAxisContainer pvtVertList pvtRows',
      h
    )
    const props = {
      ...this.$props,
      localeStrings: this.localeStrings,
      data: this.materializedInput,
      rowOrder: this.propsData.rowOrder,
      colOrder: this.propsData.colOrder,
      valueFilter: this.propsData.valueFilter,
      rows: this.propsData.rows,
      cols: this.propsData.cols,
      aggregators: this.aggregatorItems,
      rendererName,
      aggregatorName,
      vals
    }
    let pivotData = null
    try {
      pivotData = new PivotData(props)
    } catch (error) {
      // eslint-disable-next-line no-console
      if (console && console.error(error.stack)) {
        return this.computeError(h)
      }
    }
    const limitOver = outputScopedSlot && this.colLimit > 0 && this.rowLimit > 0 && (pivotData.getColKeys().length > this.colLimit || pivotData.getRowKeys().length > this.rowLimit)
    const rendererCell = this.rendererCell(rendererName, h)
    const aggregatorCell = this.aggregatorCell(aggregatorName, vals, h)
    const outputCell = this.outputCell(props, rendererName.indexOf('Chart') > -1, h)
    const colGroupSlot = this.$slots.colGroup
    return h('table', {
      staticClass: ['pvtUi']
    },
    [
      colGroupSlot || h('colgroup', [
        h('col', {
          attrs: {
            width: '140px'
          }
        }),
        h('col')
      ]),
      h('tbody', {
        on: {
          'click': this.closeFilterBox
        }
      },
      [
        h('tr',
          [
            rendererCell,
            unusedAttrsCell
          ]
        ),
        h('tr',
          [
            aggregatorCell,
            colAttrsCell
          ]
        ),
        h('tr',
          [
            rowAttrsCell,
            outputSlot ? h('td', { staticClass: 'pvtOutput' }, outputSlot) : limitOver ? h('td', { staticClass: 'pvtOutput' }, outputScopedSlot({ pivotData: new PivotData(props) })) : outputCell
          ]
        )
      ])
    ])
  },
  renderError (h, error) {
    return this.uiRenderError(h)
  }
}
