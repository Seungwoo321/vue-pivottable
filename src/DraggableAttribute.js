
export default {
  name: 'draggable-attribute',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    attrValues: {
      type: Object,
      required: false
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
    localeStrings: {
      type: Object,
      default: function () {
        return {
          selectAll: 'Select All',
          selectNone: 'Select None',
          tooMany: '(too many to list)', // too many values to show
          filterResults: 'Filter values',
          only: 'only'
        }
      }
    },
    menuLimit: Number,
    zIndex: Number,
    unused: Boolean
  },
  data () {
    return {
      // open: false,
      filterText: '',
      attribute: '',
      values: [],
      filter: {}
    }
  },
  computed: {
    disabled () {
      return !this.sortable && !this.draggable
    },
    sortonly () {
      return this.sortable && !this.draggable
    }
  },
  methods: {
    setValuesInFilter (attribute, values) {
      const valueFilter = values.reduce((r, v) => {
        r[v] = true
        return r
      }, {})
      this.$emit('update:filter', { attribute, valueFilter })
    },
    addValuesToFilter (attribute, values) {
      const valueFilter = values.reduce((r, v) => {
        r[v] = true
        return r
      }, {
        ...this.valueFilter
      })
      this.$emit('update:filter', { attribute, valueFilter })
    },
    removeValuesFromFilter (attribute, values) {
      const valueFilter = values.reduce((r, v) => {
        if (r[v]) {
          delete r[v]
        }
        return r
      }, {
        ...this.valueFilter
      })
      this.$emit('update:filter', { attribute, valueFilter })
    },
    moveFilterBoxToTop (attribute) {
      this.$emit('moveToTop:filterbox', { attribute })
    },
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
          click: (e) => {
            e.stopPropagation()
            this.moveFilterBoxToTop(this.name)
          }
        }
      },
      [
        h('div', {
          staticClass: 'pvtSearchContainer'
        },
        [
          showMenu || h('p', this.localeStrings.tooMany),
          showMenu && h('input', {
            staticClass: ['pvtSearch'],
            attrs: {
              type: 'text',
              placeholder: this.localeStrings.filterResults
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
          }, this.localeStrings.selectAll),
          h('a', {
            staticClass: ['pvtButton'],
            attrs: {
              role: 'button'
            },
            on: {
              click: () => this.addValuesToFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
            }
          }, this.localeStrings.selectNone)
        ]),
        showMenu && h('div', {
          staticClass: ['pvtCheckContainer']
        },
        [
          ...shown.map(x => {
            const checked = !(x in this.valueFilter)
            return h('p', {
              class: {
                selected: checked
              },
              attrs: {
                key: x
              },
              on: {
                'click': () => this.toggleValue(x)
              }
            },
            [
              h('input', {
                attrs: {
                  type: 'checkbox'
                },
                domProps: {
                  checked: checked
                }
              }),
              x,
              h('a', {
                staticClass: ['pvtOnly'],
                on: {
                  click: e => this.selectOnly(e, x)
                }
              }, this.localeStrings.only),
              h('a', {
                staticClass: ['pvtOnlySpacer']
              })
            ])
          })
        ])
      ])
    },
    toggleFilterBox (event) {
      event.stopPropagation()
      this.openFilterBox(this.name, !this.open)
      this.moveFilterBoxToTop(this.name)
    },
    openFilterBox (attribute, open) {
      this.$emit('open:filterbox', { attribute, open })
    }
  },
  render (h) {
    const filtered = Object.keys(this.valueFilter).length !== 0 ? 'pvtFilteredAttribute' : ''
    const pvtAttrScopedSlot = this.$scopedSlots.pvtAttr
    return h('li', {
      attrs: {
        'data-id': !this.disabled ? this.name : undefined
      }
    },
    [
      h('span', {
        staticClass: ['pvtAttr ' + filtered],
        class: {
          sortonly: this.sortonly,
          disabled: this.disabled
        }
      },
      [
        pvtAttrScopedSlot ? pvtAttrScopedSlot({ name: this.name }) : this.name,
        !this.disabled &&
        !this.unused ? h('span', {
            staticClass: ['pvtTriangle'],
            on: {
              'click': this.toggleFilterBox.bind(this)
            }
          }, '  ▾') : undefined,
        this.open ? this.getFilterBox(h) : undefined
      ]
      )
    ])
  }
}
