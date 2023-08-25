import { h, ref, toRaw, computed, onBeforeUpdate, watch, reactive, toRefs, defineComponent, defineSlots, defineProps, render } from 'vue'
import { useRendererState, useFilterbox } from './composable/'
import TableRenderer from './TableRenderer'
import DraggableAttribute from './DraggableAttribute'
import commonProps from './commonProps'
import Dropdown from './Dropdown'
import { VueDraggableNext } from 'vue-draggable-next'
import { useDraggableCell } from './composable/useDraggableCell'
import { PivotData, getSort, sortAs, aggregators } from './helper/utils'

export default {
  name: 'vue-pivottable-ui',
  props: {
    ...commonProps,
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
  setup (props, context) {
    const { rendererName, rendererItems, rendererKeys, rendererSlot, handleChangeRenderName } = useRendererState(props, context)
    const { pvtAttrSlot, rowAttrs, colAttrs, unusedAttrs, handleChangeRowCell, handleChangeColCell, handleChangeUnusedCell } = useDraggableCell(props, context)
    const { filterState, handleUpdateValueFilter, handleMoveFilterBoxToTop, handleToggleFilterbox } = useFilterbox(props, context)
    const rendererCell = () => (
      rendererSlot
      ? h('td', {
        class: 'pvtRenderers pvtVals pvtText'
      }, rendererSlot())
      : h('td', {
        class: 'pvtRenderers'
      }, [
        h(Dropdown, {
          values: rendererKeys,
          modelValue: rendererName.value,
          'onUpdate:model-value': handleChangeRenderName
        })
      ])
    )


    const attrValues = computed(() => {
      const values = {}
      let recordsProcessed = 0
      console.log(props.pivotData, props.derivedAttributes)
      // PivotData.forEachRecord(props.pivotData, props.derivedAttributes, function (record) {
      //   for (const attr of Object.keys(record)) {
      //     if (!(attr in values)) {
      //       values[attr] = {}
      //       if (recordsProcessed > 0) {
      //         values[attr].null = recordsProcessed
      //       }
      //     }
      //   }
      //   for (const attr in values) {
      //     const value = attr in record ? record[attr] : 'null'
      //     if (!(value in values[attr])) {
      //       values[attr][value] = 0
      //     }
      //     values[attr][value]++
      //   }
      //   recordsProcessed++
      // })
      return values
    })
    const materializedInput = computed(() => {
      const records = []
      console.log(props.pivotData, props.derivedAttributes)
      // PivotData.forEachRecord(props.pivotData, props.derivedAttributes, function (record) {
      //   records.push(record)
      // })
      return records
    })

    const makeDnDCell = (items, onChange, classes) => {
      return h(VueDraggableNext, {
        class: classes,
        draggable: 'li[data-id]',
        group: 'sharted',
        ghostClass: '.pvtPlaceholder',
        filter: '.pvtFilterBox',
        preventOnFilter: false,
        tag: 'td',
        value: items,
        onSort: onChange.bind(this)
      },
      () => [
        items.map(x => {
          return h(DraggableAttribute, {
            pvtAttrSlot: pvtAttrSlot ? {
              pvtAttr: pvtAttrSlot(props)
            } : undefined,
            sortable: props.sortonlyFromDragDrop.includes(x) || !props.disabledFromDragDrop.includes(x),
            draggable: !props.sortonlyFromDragDrop.includes(x) && !props.disabledFromDragDrop.includes(x),
            name: x,
            key: x,
            attrValues: attrValues.value[x],
            sorter: getSort(props.sorters, x),
            menuLimit: props.menuLimit,
            // zIndex: props.zIndices[x] || props.maxZIndex,
            valueFilter: filterState[x],
            // open: props.openStatus[x],
            localeStrings: props.locales[props.locale].localeStrings,
            onUpdateFilter: handleUpdateValueFilter,
            onMoveToTopFilterbox: handleMoveFilterBoxToTop,
            onToggleFilterbox: handleToggleFilterbox
          })
        })
      ])
    }

    const unusedAttrsCell = makeDnDCell(
      unusedAttrs.value,
      handleChangeUnusedCell,
      `pvtAxisContainer pvtUnused pvtHorizList`
    )
    return () => {
      return h('table', {
        class: ['pvtUi']
      },
        [
          // colGroupSlot,
          h('tbody',
            [
              h('tr',
                [
                  rendererCell(),
                  unusedAttrsCell
                  // unusedAttrsCell()
                  // h(slots.default())
                  // this.rendererCell,
                  // h(rendererCell())
                  // this.unusedAttrsCell
                ]
              ),
              h('tr',
                [
                  // aggregatorCell,
                  // colAttrsCell
                ]
              ),
              h('tr',
                [
                  // rowAttrsCell,
                  // outputSlot ? h('td', { staticClass: 'pvtOutput' }, outputSlot) : outputCell,
                  // outputScopedSlot && !outputSlot ? h('td', { staticClass: 'pvtOutput' }, outputScopedSlot({ pivotData })) : undefined,
                  // !outputSlot && !outputScopedSlot ? outputCell : undefined
                ]
              )
            ])
        ])
    }

  }
}