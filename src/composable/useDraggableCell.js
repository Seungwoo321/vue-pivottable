import { computed, reactive } from "vue"
import { PivotData, getSort, sortAs, aggregators } from '../helper/utils'

export const useDraggableCell = (props, { slots, emit }) => {
  const pvtAttrSlot = slots.pvtAttr
  const attributes = reactive(props.attrValues)
  const rowAttrs = computed(() => {
    return props.cols.filter(
      e =>
        !props.hiddenAttributes.includes(e) &&
        !props.hiddenFromDragDrop.includes(e)
    )
  })
  const colAttrs = computed(() => {
      return props.cols.filter(
        e =>
          !props.hiddenAttributes.includes(e) &&
          !props.hiddenFromDragDrop.includes(e)
      )
    })
    const unusedAttrs = computed(() => {
      console.log(props.attributes)
      return props.attributes.filter(
        e =>
          !props.rows.includes(e) &&
          !props.cols.includes(e) &&
          !props.hiddenAttributes.includes(e) &&
          !props.hiddenFromDragDrop.includes(e)
      ).sort(sortAs(props.unusedOrder))
    })
    const handleChangeRowCell = e => {
      const item = e.item.getAttribute('data-id')
      if (props.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtRows') || !e.to.classList.contains('pvtRows'))) {
        return
      }
      if (e.from.classList.contains('pvtRows')) {
        props.rows.splice(e.oldIndex, 1)
        emit('dragged:rows', item)
      }
      if (e.to.classList.contains('pvtRows')) {
        props.rows.splice(e.newIndex, 0, item)
        emit('dropped:rows', item)
      }
    }
    const handleChangeColCell = e => {
      const item = e.item.getAttribute('data-id')
      if (props.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtCols') || !e.to.classList.contains('pvtCols'))) {
        return
      }
      if (e.from.classList.contains('pvtCols')) {
        props.cols.splice(e.oldIndex, 1)
        emit('dragged:cols', item)
      }
      if (e.to.classList.contains('pvtCols')) {
        props.cols.splice(e.newIndex, 0, item)
        emit('dropped:cols', item)
      }
    }
    const handleChangeUnusedCell = e => {
      const item = e.item.getAttribute('data-id')
      if (props.sortonlyFromDragDrop.includes(item) && (!e.from.classList.contains('pvtUnused') || !e.to.classList.contains('pvtUnused'))) {
        return
      }
      if (e.from.classList.contains('pvtUnused')) {
        // this.openFilterBox({ attribute: item, open: false })
        props.unusedOrder.splice(e.oldIndex, 1)
        emit('dragged:unused', item)
      }
      if (e.to.classList.contains('pvtUnused')) {
        // this.openFilterBox({ attribute: item, open: false })
        props.unusedOrder.splice(e.newIndex, 0, item)
        emit('dropped:unused', item)
      }
    }
    return {
      pvtAttrSlot,
      attributes,
      rowAttrs,
      colAttrs,
      unusedAttrs,
      handleChangeRowCell,
      handleChangeColCell,
      handleChangeUnusedCell
    }
}