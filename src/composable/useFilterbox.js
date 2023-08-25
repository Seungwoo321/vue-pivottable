import { reactive, ref } from 'vue'

export const useFilterbox = (props, context) => {
  const filterState = reactive(props.valueFilter)
  const openStatus = reactive({})
  const maxZIndex = ref(1000)
  const zIndices = reactive({})
  const handleUpdateValueFilter = ({ attribute, valueFilter }) => {
    filterState[attribute] = valueFilter
  }
  const openFilterBox = ({ attribute, open }) => {
    openStatus[attribute] = open
  }
  const closeFilterBox = () => {
    openStatus = {}
  }
  const moveFilterBoxToTop = ({ attribute }) => {
    maxZIndex.value += 1
    zIndices[attribute] = maxZIndex.value + 1
  }
  const handleMoveFilterBoxToTop = () => {
    console.log('handleMoveFilterBoxToTop')
  }
  const handleToggleFilterbox = () => {
    console.log('handleToggleFilterbox')
  }
  return {
    filterState,
    openStatus,
    maxZIndex,
    zIndices,
    handleUpdateValueFilter,
    openFilterBox,
    closeFilterBox,
    moveFilterBoxToTop,
    handleMoveFilterBoxToTop,
    handleToggleFilterbox
  }
}