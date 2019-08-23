
export default {
  name: 'draggable-attribute',
  // prop: {
  //   event: 'input',
  //   value: 'valueFilter'
  // },
  props: {
    name: {
      type: String,
      required: true
    },
    addValuesToFilter: {
      type: Function,
      required: true
    },
    removeValuesFromFilter: {
      type: Function,
      required: true
    },
    attrValues: {
      type: Object,
      required: true
    },
    // v-model
    valueFilter: {
      type: Object,
      default: function () {
        return {}
      }
    },
    moveFilterBoxToTop: {
      type: Function,
      required: true
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
      values: []
    }
    //   }
    //   computed: {
    //     valueFilter: {
    //       get: function () {
    //         return this
    //       },
    //       set: function () {
    //         return this
    //       }
    //     },
    // setValuesInFilter () {
    //   this.valueFilter[this.attribute] = this.values.reducer((r, v) => {
    //     r[v] = true
    //     return r
    //   })
    // }
  },
  methods: {
    toggleValue (value) {
      if (value in this.valueFilter) {
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
    // setValuesInFilter (attribute, values) {
    //   this.attribute = attribute
    //   this.values = values
    //   this.valueFilter[attribute] = values.reducer((r, v) => {
    //     r[v] = true
    //     return r
    //   })
    // },
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
          click: () => this.moveFilterBoxToTop(this.name)
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
                selected: !(x in this.valueFilter)
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
                  checked: !(x in this.valueFilter)
                }
              }, x === '' ? h('em', 'null') : x),
              h('a', {
                staticClass: ['pvtOnly'],
                on: {
                  click: e => this.selectOnly(e, x)
                }
              }, 'only'),
              h('a', {
                staticClass: ['pvtOnlySpacer']
              }, '&nbsp;')
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
    console.log(this.open)
    const filtered = Object.keys(this.valueFilter).length !== 0 ? 'pvtFilteredAttribute' : ''
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
