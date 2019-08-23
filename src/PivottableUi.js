import common from './helper/defaultProps'
import DraggableAttribute from './DraggableAttribute'
import Dropdown from './Dropdown'
import Pivottable from './Pivottable'
import { PivotData, getSort, aggregators } from './helper/utils'
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
      return aggregators[this.currentAggregatorName || this.aggregatorName]([])().numInputs || 0
    }
  },
  data () {
    return {
      updateValueFilter: {},
      attrValues: {},
      unusedOrder: [],
      zIndices: {},
      maxZIndex: 1000,
      openDropdown: false,
      materializedInput: [],
      currentAggregatorName: '',
      currentRendererName: '',
      currentRowOrder: 'key_a_to_z',
      currentColOrder: 'key_a_to_z',
      currentData: [],
      currentVals: [],
      currentcols: [],
      currentrows: [],
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
    // this.currentRendererName = this.rendererName
    this.materializeInput(this.data)
    this.currentVals = this.vals.slice()
  },
  beforeUpdated (nextProps) {
    this.materializeInput(nextProps.data)
  },
  methods: {
    propUpdater (key) {
      return value => { this[`current${key}`] = value }
    },
    setValuesInFilter (attribute, values) {
      // this.updateValueFilter = Object.assign(this.valueFilter, this.updateValueFilter)
      this.updateValueFilter[attribute] = values.reduce((r, v) => { r[v] = true; return r })
    },
    addValuesToFilter (attribute, values) {
      this.updateValueFilter[attribute] = values
    },
    removeValuesFromFilter (attribute, values) {
      // this.updateValueFilter[attribute]
      delete this.updateValueFilter[attribute]
    },
    moveFilterBoxToTop (attribute) {
      this.maxZIndex += 1
      this.zIndices[attribute] = this.maxZIndex + 1
      console.log(this.maxZIndex)
      console.log(this.zIndices[attribute])
    },
    materializeInput (nextData) {
      if (this.currentData === nextData) {
        return
      }
      this.currentData = nextData
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
              valueFilter: this.updateValueFilter[x] || {},
              sorter: getSort(this.sorters, x),
              menuLimit: this.menuLimit,
              setValuesInFilter: this.setValuesInFilter.bind(this),
              addValuesToFilter: this.addValuesToFilter.bind(this),
              moveFilterBoxToTop: this.moveFilterBoxToTop.bind(this),
              removeValuesFromFilter: this.removeValuesFromFilter.bind(this),
              zIndex: this.zIndices[x] || this.maxZIndex
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
            input: (value) => { this.currentRendererName = value }
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
                input: (value) => { this.currentAggregatorName = value }
              }
            }),
            h('a', {
              staticClass: ['pvtRowOrder'],
              attrs: {
                role: 'button'
              },
              on: {
                click: () => { this.currentRowOrder = this.sortIcons[this.currentRowOrder].next }
              }
            }, this.sortIcons[this.currentRowOrder].rowSymbol),
            h('a', {
              staticClass: ['pvtColOrder'],
              attrs: {
                role: 'button'
              },
              on: {
                click: () => { this.currentColOrder = this.sortIcons[this.currentColOrder].next }
              }
            }, this.sortIcons[this.currentColOrder].colSymbol)
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
                input: (value) => { this.currentVals.splice(i, 1, value) }
              }
            })
          ])
          : undefined
      ])
    }
  },
  render (h) {
    const rendererName = this.currentRendererName || this.rendererName
    const aggregatorName = this.currentAggregatorName || this.aggregatorName
    const vals = this.currentVals
    const unusedAttrs = null
    const unusedLength = null
    const horizUnused = null
    const unusedAttrsCell = null

    const colAttrs = this.cols.filter(
      e =>
        !this.hiddenAttributes.includes(e) &&
        !this.hiddenFromDragDrop.includes(e)
    )
    const colAttrsCell = this.makeDnDCell(
      colAttrs,
      this.propUpdater('col'),
      'pvtAxisContainer pvtHorizList pvtCols',
      h
    )
    const rowAttrs = null
    const rowAttrsCell = null
    const props = {
      ...this.$props,
      data: this.materializedInput,
      rowOrder: this.currentRowOrder,
      colOrder: this.currentColOrder,
      rendererName,
      aggregatorName,
      vals
    }
    const outputCell = h('td', {
      staticClass: ['pvtOutput']
    },
    [
      h(Pivottable, {
        props
      })
    ])

    return h('table', {
      staticClass: ['pvtUi']
    },
    [
      h('tbody',
        [
          h('tr',
            [
              this.rendererCell(rendererName, h),
              this.aggregatorCell(aggregatorName, vals, h),
              colAttrsCell
            ]),
          h('tr',
            [
              outputCell
            ])
        ]
      )
    ]
    )
  }
}
