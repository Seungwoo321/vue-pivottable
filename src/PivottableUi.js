import common from './helper/defaultProps'
import DraggableAttribute from './DraggableAttribute'
import Dropdown from './Dropdown'
import Pivottable from './Pivottable'
import { PivotData, getSort, aggregators, sortAs } from './helper/utils'
import TableRenderer from './TableRenderer'
export default {
  name: 'vue-pivottable-ui',
  mixins: [common],
  props: {
    // onChange: {
    //   tpye: Function,
    //   required: true
    // },
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
    unusedOrientationCutoff: {
      type: Number,
      default: 85
    },
    menuLimit: {
      type: Number,
      default: 500
    }
  },
  computed: {
    renderers () {
      return TableRenderer
    },
    numValsAllowed () {
      return aggregators[this.propsData.aggregatorName || this.aggregatorName]([])().numInputs || 0
    }
  },
  data () {
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
        valueFilter: {
          // 'Party Size': {}
        },
        hiddenAttributes: [],
        hiddenFromAggregators: [],
        hiddenFromDragDrop: []
      },
      updateFilter: {},
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
  created () {
    this.materializeInput(this.data)
    this.propsData.vals = this.vals.slice()
    this.rows.map(this.assignValueFitler)
    this.cols.map(this.assignValueFitler)
  },
  beforeUpdated (nextProps) {
    this.materializeInput(nextProps.data)
  },
  methods: {
    assignValueFitler (field) {
      this.propsData.valueFilter = {
        ...this.propsData.valueFilter,
        [field]: {}
      }
    },
    propUpdater (key) {
      return value => {
        this.propsData[key] = value
      }
    },
    updateValueFilter ({ attribute, valueFilter }) {
      this.propsData.valueFilter[attribute] = { ...valueFilter }
    },
    moveFilterBoxToTop ({ attribute }) {
      this.maxZIndex += 1
      this.zIndices[attribute] = this.maxZIndex + 1
    },
    materializeInput (nextData) {
      if (this.propsData.data === nextData) {
        return
      }
      this.propsData.data = nextData
      const attrValues = {}
      const materializedInput = []
      let recordsProcessed = 0
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
    makeDnDCell (items, onChange, classes, h) {
      return h('td', {
        staticClass: classes,
        on: {
          change: onChange
        }
      },
      [
        items.map(x => {
          return h(DraggableAttribute, {
            props: {
              name: x,
              key: x,
              attrValues: this.attrValues[x],
              valueFilter: this.propsData.valueFilter[x],
              sorter: getSort(this.sorters, x),
              menuLimit: this.menuLimit,
              zIndex: this.zIndices[x] || this.maxZIndex
            },
            // domProps: {
            //   valueFilter: this.propsData.valueFilter[x]
            // },
            on: {
              'update:valueFilter': this.updateValueFilter,
              'moveToTop:filterBox': this.moveFilterBoxToTop
            }
          })
        })
      ])
    },
    rendererCell (rendererName, h) {
      return h('td', {
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
    aggregatorCell (aggregatorName, vals, h) {
      return h('td', {
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
                values: Object.keys(aggregators)
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
    outputCell (props, h) {
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
  render (h) {
    const rendererName = this.propsData.rendererName || this.rendererName
    const aggregatorName = this.propsData.aggregatorName || this.aggregatorName
    const vals = this.propsData.vals
    const unusedAttrs = Object.keys(this.attrValues)
      .filter(
        e =>
          !this.rows.includes(e) &&
          !this.cols.includes(e) &&
          !this.hiddenAttributes.includes(e) &&
          !this.hiddenFromDragDrop.includes(e)
      )
      .sort(sortAs(this.unusedOrder))
    const unusedLength = unusedAttrs.reduce((r, e) => r + e.length, 0)
    const horizUnused = unusedLength < this.unusedOrientationCutoff
    const unusedAttrsCell = this.makeDnDCell(
      unusedAttrs,
      order => { this.unusedOrder = order },
      `pvtAxisContainer pvtUnused ${
        horizUnused ? 'pvtHorizList' : 'pvtVertList'
      }`,
      h
    )

    const colAttrs = this.cols.filter(
      e =>
        !this.hiddenAttributes.includes(e) &&
        !this.hiddenFromDragDrop.includes(e)
    )
    const colAttrsCell = this.makeDnDCell(
      colAttrs,
      this.propUpdater('cols'),
      'pvtAxisContainer pvtHorizList pvtCols',
      h
    )
    const rowAttrs = this.rows.filter(
      e =>
        !this.hiddenAttributes.includes(e) &&
        !this.hiddenFromDragDrop.includes(e)
    )
    const rowAttrsCell = this.makeDnDCell(
      rowAttrs,
      this.propUpdater('rows'),
      'pvtAxisContainer pvtVertList pvtRows',
      h
    )
    const props = {
      ...this.$props,
      data: this.materializedInput,
      rowOrder: this.propsData.rowOrder,
      colOrder: this.propsData.colOrder,
      valueFilter: this.propsData.valueFilter,
      rendererName,
      aggregatorName,
      vals
    }

    const rendererCell = this.rendererCell(rendererName, h)
    const aggregatorCell = this.aggregatorCell(aggregatorName, vals, h)
    const outputCell = this.outputCell(props, h)

    if (horizUnused) {
      return h('table', {
        staticClass: ['pvtUi']
      },
      [
        h('tbody', {
          on: {
            click: () => { this.openDropdown = false }
          },
          directives: [
            {
              name: 'drag-and-drop',
              value: {
                dropzoneSelector: 'td.pvtAxisContainer',
                draggableSelector: 'td > li',
                handlerSelector: null,
                reactivityEnabled: true,
                multipleDropzonesItemsDraggingEnabled: true,
                showDropzoneAreas: true,
                onDrop: function (event) { },
                onDragstart: function (event) { },
                onDragend: function (event) {
                  console.log(event)
                }
              }
            }
          ]
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
              outputCell
            ]
          )
        ])
      ])
    }
    return h('table', {
      staticClass: ['pvtUi']
    },
    [
      h('tbody', {
        on: {
          click: () => { this.openDropdown = false }
        }
      },
      [
        h('tr',
          [
            rendererCell,
            aggregatorCell,
            colAttrsCell
          ]),
        h('tr',
          [
            unusedAttrsCell,
            rowAttrsCell,
            outputCell
          ]
        )
      ])
    ])
  }
}
