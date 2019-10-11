import common from './helper/defaultProps'
import DraggableAttribute from './DraggableAttribute'
import Dropdown from './Dropdown'
import Pivottable from './Pivottable'
import { PivotData, getSort, locales, sortAs } from './helper/utils'
import draggable from 'vuedraggable'
import { getRenders } from './TableRenderer'

export default {
  name: 'vue-pivottable-ui',
  mixins: [common],
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
    menuLimit: {
      type: Number,
      default: 500
    }
  },
  computed: {
    renderers() {
      let renders = getRenders(this.lang)
      return renders
    },
    numValsAllowed() {
      let aggregators = locales[this.lang]['aggregators']
      return aggregators[this.propsData.aggregatorName || this.aggregatorName]([])().numInputs || 0
    },
    rowAttrs() {
      return this.propsData.rows.filter(
        e =>
          !this.hiddenAttributes.includes(e) &&
          !this.hiddenFromDragDrop.includes(e)
      )
    },
    colAttrs() {
      return this.propsData.cols.filter(
        e =>
          !this.hiddenAttributes.includes(e) &&
          !this.hiddenFromDragDrop.includes(e)
      )
    },
    unusedAttrs() {
      return Object.keys(this.attrValues)
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
  data() {
    return {
      propsData: {
        aggregatorName: '',
        rendererName: '',
        rowOrder: 'key_a_to_z',
        colOrder: 'key_a_to_z',
        data: [],
        vals: [],
        cols: [],
        rows: [],
        valueFilter: {}
      },
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
  created() {
    this.materializeInput(this.data)
    this.propsData.vals = this.vals.slice()
    this.propsData.rows = this.rows
    this.propsData.cols = this.cols
    this.unusedOrder = this.unusedAttrs
    Object.keys(this.attrValues).map(this.assignValue)
    Object.keys(this.openStatus).map(this.assignValue)
  },
  watch: {
    data() {
      this.materializeInput(this.data)
      this.propsData.vals = this.vals.slice()
      this.propsData.rows = this.rows
      this.propsData.cols = this.cols
      this.unusedOrder = this.unusedAttrs
      Object.keys(this.attrValues).map(this.assignValue)
      Object.keys(this.openStatus).map(this.assignValue)
    }
  },
  methods: {
    assignValue(field) {
      this.propsData.valueFilter = {
        ...this.propsData.valueFilter,
        [field]: {}
      }
    },
    propUpdater(key) {
      return value => {
        this.propsData[key] = value
      }
    },
    updateValueFilter({ attribute, valueFilter }) {
      this.propsData.valueFilter[attribute] = { ...valueFilter }
    },
    moveFilterBoxToTop({ attribute }) {
      this.maxZIndex += 1
      this.zIndices[attribute] = this.maxZIndex + 1
    },
    openFilterBox({ attribute, open }) {
      this.openStatus[attribute] = open
    },
    materializeInput(nextData) {
      if (this.propsData.data === nextData) {
        return
      }
      this.propsData.data = nextData
      const attrValues = {}
      const materializedInput = []
      let recordsProcessed = 0
      PivotData.defaultProps.lang = this.lang
      PivotData.defaultProps.aggregators = locales[this.lang]['aggregators']
      PivotData.forEachRecord(this.data, this.derivedAttributes, function (record) {
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
    makeDnDCell(items, onChange, classes, h) {
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
                open: this.openStatus[x]
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
    rendererCell(rendererName, h) {
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
                values: Object.keys(this.renderers)
              },
              domProps: {
                value: rendererName
              },
              on: {
                input: (value) => { this.propUpdater('rendererName')(value) }
              }
            })
          ])
    },
    aggregatorCell(aggregatorName, vals, h) {
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
                    values: Object.keys(locales[this.lang]['aggregators'])
                  },
                  domProps: {
                    value: aggregatorName
                  },
                  on: {
                    input: (value) => { this.propUpdater('aggregatorName')(value) }
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
    outputCell(props, h) {
      return h('td', {
        staticClass: ['pvtOutput']
      },
        [
          h(Pivottable, {
            props
          })
        ])
    }
  },
  render(h) {
    if (this.data.length < 1) return
    const rendererName = this.propsData.rendererName || this.rendererName
    const aggregatorName = this.propsData.aggregatorName || this.aggregatorName
    const vals = this.propsData.vals
    const unusedAttrsCell = this.makeDnDCell(
      this.unusedAttrs,
      e => {
        const item = e.item.getAttribute('data-id')
        if (this.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtUnused') || !e.to.classList.contains('pvtUnused'))) {
          return
        }
        if (e.from.classList.contains('pvtUnused')) {
          this.unusedOrder.splice(e.oldIndex, 1)
        }
        if (e.to.classList.contains('pvtUnused')) {
          this.unusedOrder.splice(e.newIndex, 0, item)
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
        }
        if (e.to.classList.contains('pvtCols')) {
          this.propsData.cols.splice(e.newIndex, 0, item)
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
        }
        if (e.to.classList.contains('pvtRows')) {
          this.propsData.rows.splice(e.newIndex, 0, item)
        }
      },
      'pvtAxisContainer pvtVertList pvtRows',
      h
    )
    const props = {
      ...this.$props,
      data: this.materializedInput,
      rowOrder: this.propsData.rowOrder,
      colOrder: this.propsData.colOrder,
      valueFilter: this.propsData.valueFilter,
      rows: this.propsData.rows,
      cols: this.propsData.cols,
      rendererName,
      aggregatorName,
      vals
    }

    const rendererCell = this.rendererCell(rendererName, h)
    const aggregatorCell = this.aggregatorCell(aggregatorName, vals, h)
    const outputCell = this.outputCell(props, h)

    return h('table', {
      staticClass: ['pvtUi']
    },
      [
        h('tbody',
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
                outputCell
              ]
            )
          ])
      ])
  }
}
