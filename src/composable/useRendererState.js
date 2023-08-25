import { ref, reactive } from "vue";
import TableRenderer from '../TableRenderer'

export const useRendererState = (props, context) => {
  const slots = context.slots
  const rendererSlot = slots.renderer
  const rendererName = ref(props.rendererName)
  const rendererItems = reactive(props.renderers || Object.assign({}, TableRenderer))
  const rendererKeys = reactive(Object.keys(rendererItems))
  function handleChangeRenderName(value) {
    rendererName.value = value
  }
  return {
    rendererSlot,
    rendererName,
    rendererItems,
    rendererKeys,
    handleChangeRenderName
  }
}

