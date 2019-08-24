
export default {
  name: 'draggable-attribute',
  // model: {
  //   prop: 'valueFilter',
  //   event: 'update:valueFilter'
  // },
  props: {
    name: {
      type: String,
      required: true
    },
    attrValues: {
      type: Object,
      required: true
    },
    valueFilter: {
      type: Object,
      default: function () {
        return {}
      }
    },
    sorter: {
      type: Function,
      required: true
    },
    menuLimit: Number,
    zIndex: Number
  },
  data () {
    return {
      open: false,
      filterText: '',
      attribute: '',
      values: [],
      updateFilter: {}
    }
  },
  created () {
    this.updateFilter = this.valueFilter
  },
  methods: {
    setValuesInFilter (attribute, values) {
      this.updateFilter = values.reduce((r, v) => {
        r[v] = true
        return r
      }, {})
      this.$emit('update:valueFilter', { attribute, valueFilter: this.updateFilter })
    },
    addValuesToFilter (attribute, values) {
      this.updateFilter = values.reduce((r, v) => {
        r[v] = true
        return r
      }, {
        ...this.updateFilter
      })
      this.$emit('update:valueFilter', { attribute, valueFilter: this.updateFilter })
    },
    removeValuesFromFilter (attribute, values) {
      this.updateFilter = values.reduce((r, v) => {
        if (r[v]) {
          delete r[v]
        }
        return r
      }, {
        ...this.updateFilter
      })
      this.$emit('update:valueFilter', { attribute, valueFilter: this.updateFilter })
    },
    moveFilterBoxToTop (attribute) {
      this.$emit('moveToTop:filterBox', { attribute })
    },
    toggleValue (value) {
      if (value in this.updateFilter) {
        this.removeValuesFromFilter(this.name, [value])
      } else {
        this.addValuesToFilter(this.name, [value])
      }
    },
    matchesFilter (x) {
      return x
        .toLowerCase()
        .trim()
        .includes(this.filterText.toLowerCase().trim())
    },
    selectOnly (e, value) {
      e.stopPropagation()
      this.value = value
      this.setValuesInFilter(this.name, Object.keys(this.attrValues).filter(y => y !== value))
    },
    getFilterBox (h) {
      const showMenu = Object.keys(this.attrValues).length < this.menuLimit
      const values = Object.keys(this.attrValues)
      const shown = values.filter(this.matchesFilter.bind(this)).sort(this.sorter)
      return h('div', {
        staticClass: ['pvtFilterBox'],
        style: {
          display: 'block',
          cursor: 'initial',
          zIndex: this.zIndex
        },
        on: {
          click: () => this.moveFilterBoxToTop.bind(this.name)
        }
      },
      [
        h('div', {
          staticClass: 'pvtSearchContainer'
        },
        [
          showMenu || h('p', 'too many values to show'),
          showMenu && h('input', {
            staticClass: ['pvtSearch'],
            attrs: {
              type: 'text',
              placeholder: 'Filter Values'
            },
            domProps: {
              value: this.filterText
            },
            on: {
              input: e => {
                this.filterText = e.target.value
                this.$emit('input', e.target.value)
              }
            }
          }),
          h('a', {
            staticClass: ['pvtFilterTextClear'],
            on: {
              click: () => { this.filterText = '' }
            }
          }),
          h('a', {
            staticClass: ['pvtButton'],
            attrs: {
              role: 'button'
            },
            on: {
              click: () => this.removeValuesFromFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
            }
          }, `Select ${values.length === shown.length ? 'All' : shown.length}`),
          h('a', {
            staticClass: ['pvtButton'],
            attrs: {
              role: 'button'
            },
            on: {
              click: () => this.addValuesToFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
            }
          }, `Deselect ${values.length === shown.length ? 'All' : shown.length}`)
        ]),
        showMenu && h('div', {
          staticClass: ['pvtCheckContainer']
        },
        [
          ...shown.map(x => {
            return h('p', {
              class: {
                selected: !(x in this.updateFilter)
              },
              attrs: {
                key: x
              },
              on: {
                click: () => this.toggleValue(x)
              }
            },
            [
              h('input', {
                attrs: {
                  type: 'checkbox',
                  checked: !(x in this.updateFilter)
                }
              }),
              x,
              h('a', {
                staticClass: ['pvtOnly'],
                on: {
                  click: e => this.selectOnly(e, x)
                }
              }, 'only'),
              h('a', {
                staticClass: ['pvtOnlySpacer']
              })
            ])
          })
        ])
      ])
    },
    toggleFilterBox () {
      this.open = !this.open
      this.moveFilterBoxToTop(this.name)
    }
  },
  render (h) {
    const filtered = Object.keys(this.updateFilter).length !== 0 ? 'pvtFilteredAttribute' : ''
    return h('li', {
      attrs: {
        'data-id': this.name
      }
    },
    [
      h('span', {
        staticClass: ['pvtAttr ' + filtered]
      },
      [
        this.name,
        h('span', {
          staticClass: ['pvtTriangle'],
          on: {
            click: this.toggleFilterBox.bind(this)
          }
        }, '  ▾'),
        this.open ? this.getFilterBox(h) : undefined
      ]
      )
    ])
  }
}
