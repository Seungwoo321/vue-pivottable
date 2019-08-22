
export default {
  name: 'draggable-attribute',
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
      filterText: ''
    }
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
      this.setValuesInFilter(this.name, Object.keys(this.attrValues).filter(y => y !== value))
    },
    getFilterBox (h) {
      const showMenu = Object.keys(this.attrValues).length < this.menuLimit
      const values = Object.keys(this.attrValues)
      const shown = values.filter(this.matchesFilter.bind(this)).sort(this.sorter)
      return h('div', {
        staticClass: ['pvtDragHandle']
      },
      [
        h('div', {
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
          h('a', {
            staticClass: ['pvtCloseX'],
            on: {
              click: () => { this.open = false }
            }
          }),
          h('span', {
            staticClass: ['pvtDragHandle']
          }, '☰'),
          h('h4', this.name),
          showMenu || h('p', 'too many values to show'),
          showMenu && h('p',
            [
              h('input', {
                staticClass: ['pvtSearch'],
                attrs: {
                  type: 'text',
                  placeholder: 'Filter Values',
                  value: this.filterText
                },
                on: {
                  change: e => { this.filterText = e.target.value }
                }
              }),
              h('br'),
              h('a', {
                staticClass: ['pvtButton'],
                attrs: {
                  role: 'button'
                },
                on: {
                  click: () => this.removeValuesFromFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
                }
              }, `Select ${values.length === shown.length ? 'All' : shown.length}`),
              '',
              h('a', {
                staticClass: ['pvtButton'],
                attrs: {
                  role: 'button'
                },
                on: {
                  click: () => this.addValuesToFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
                }
              }, `Deselect ${values.length === shown.length ? 'All' : shown.length}`)
            ]
          ),
          showMenu && h('div', {
            staticClass: ['pvtCheckContainer']
          }, [
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
                h('a', {
                  staticClass: ['pvtOnly'],
                  on: {
                    click: e => this.selectOnly(e, x)
                  }
                }, 'only'),
                h('a', {
                  staticClass: ['pvtOnlySpacer']
                }, '&nbsp;'),
                x === '' ? h('em', 'null') : x
              ])
            })
          ])
        ])
      ])
    },
    toggleFilterBox () {
      this.open = !this.open
      this.moveFilterBoxToTop(this.name)
    }
  },
  render (h) {
    const filtered = Object.keys(this.props.valueFilter).length !== 0 ? 'pvtFilteredAttribute' : ''
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
        }, '  ▾')
      ])
    ], this.open ? this.getFilterBox() : null)
  }
}
