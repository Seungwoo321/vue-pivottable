import { computed, h, reactive, ref } from 'vue'
import { useFilterbox } from './composable'
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
    zIndex: Number
  },
  emits: [
    'openFilterbox',
    'moveToTopFilterbox',
    'toggleFilterbox'
  ],
  setup (props, context) {
    const {
      filterState,
      handleUpdateValueFilter
    } = useFilterbox(props, context)
    // state
    const open = ref(false)
    const filterText = ref('')
    const attribute = ref('')
    const values = reactive([])
    const filter = reactive({})
    
    // getters
    const disabled = computed(() => !props.sortable && !props.draggable)
    const sortonly = computed(() => props.sortable && !props.draggable)

    // actions
    const setValuesInFilter = (attribute, values) => {
      const valueFilter = values.reduce((r, v) => {
        r[v] = true
        return r
      }, {})
      handleUpdateValueFilter({ attribute, valueFilter })
    }
    const addValuesToFilter = (attribute, values) => {
      const valueFilter = values.reduce((r, v) => {
        r[v] = true
        return r
      }, Object.assign({}, filterState))
      handleUpdateValueFilter({ attribute, valueFilter })
    }
    const removeValuesFromFilter = (attribute, values) => {
      const valueFilter = values.reduce((r, v) => {
        if (r[v]) {
          delete r[v]
        }
        return r
      }, Object.assign({}, filterState))
      handleUpdateValueFilter({ attribute, valueFilter })
    }
    const moveFilterBoxToTop = (attribute) => {
      emit('moveToTop:filterbox', { attribute })
    }
    const toggleValue = (value) => {
      if (value in filterState) {
        removeValuesFromFilter(props.name, [value])
      } else {
        addValuesToFilter(props.name, [value])
      }
    }
    const matchesFilter = (x) => {
      return x
        .toLowerCase()
        .trim()
        .includes(filterText.value.toLowerCase().trim())
    }
    const selectOnly = (e, value) => {
      e.stopPropagation()
      // this.value = value
      setValuesInFilter(props.name, Object.keys(props.attrValues).filter(y => y !== value))
    }
    const getFilterBox = () => {
      const showMenu = Object.keys(props.attrValues).length < props.menuLimit
      const values = Object.keys(props.attrValues)
      const shown = values.filter(matchesFilter).sort(props.sorter)
      return h('div', {
        class: 'pvtFilterBox',
        style: {
          display: 'block',
          cursor: 'initial',
          zIndex: props.zIndex
        },
        onClick: (e) => {
          e.stopPropagation()
          moveFilterBoxToTop(props.name)
        }
      },
        [
          h('div', {
            class: 'pvtSearchContainer'
          },
            [
              showMenu || h('p', props.localeStrings.tooMany),
              showMenu && h('input', {
                class: 'pvtSearch',
                type: 'text',
                placeholder: props.localeStrings.filterResults,
                value: filterText.value,
                onInput: e => {
                  filterText.value = e.target.value
                  emit('input', e.target.value)
                }
              }),
              h('a', {
                class: 'pvtFilterTextClear',
                onClick: () => { this.filterText = '' }
              }),
              h('a', {
                class: 'pvtButton',
                role: 'button',
                onClick: () => removeValuesFromFilter(props.name, Object.keys(props.attrValues).filter(matchesFilter.bind(this)))
              }, props.localeStrings.selectAll),
              h('a', {
                class: 'pvtButton',
                role: 'button',
                onClick: () => addValuesToFilter(props.name, Object.keys(props.attrValues).filter(matchesFilter.bind(this)))
              }, props.localeStrings.selectNone)
            ]),
          showMenu && h('div', {
            class: 'pvtCheckContainer'
          },
            shown.map(x => {
              const checked = !(x in filterState)
              return h('p', {
                class: {
                  selected: checked
                },
                key: x,
                onClick: () => toggleValue(x)
              },
                [
                  h('input', {
                    type: 'checkbox',
                    checked: checked
                  }),
                  x,
                  h('a', {
                    class: 'pvtOnly',
                    onClick: e => selectOnly(e, x)
                  }, props.localeStrings.only),
                  h('a', {
                    class: 'pvtOnlySpacer'
                  })
                ])
            })
          )
        ])
    }
    const toggleFilterBox = (event) => {
      console.log(event)
      console.log(props.attrValues)
      event.stopPropagation()
      if (!props.attrValues) {
        // if (this.$listeners['no:filterbox']) {
        //   this.$emit('no:filterbox')
        // }
        return
      }
      openFilterBox(props.name, !open.value)
      moveFilterBoxToTop(props.name)
    }
    const openFilterBox = (attribute, open) => {
      emit('open:filterbox', { attribute, open })
    }
    const slots = context.slots
    return () => {
      console.log(disabled.value)
      const filtered = Object.keys(filterState).length !== 0 ? 'pvtFilteredAttribute' : ''
      const pvtAttrSlot = slots.pvtAttr
      return h('li', {
        'data-id': !disabled.value ? props.name : undefined
      },
        [
          h('span', {
            class: `pvtAttr${filtered} ${sortonly.value ? 'sortonly' : ''} ${disabled.value ? 'disabled' : ''}`
          },
            [
              pvtAttrSlot ? pvtAttrSlot(props.name) : props.name,
              !disabled.value && h('span', {
                  class: 'pvtTriangle',
                  onClick: toggleFilterBox
                }, '  ▾'),
              open.value ? getFilterBox(h) : undefined
            ]
          )
        ])
    }
  }
}
