import TableRenderer from './TableRenderer'
import commonProps from './commonProps'
import { h, computed, toRefs, toRaw, defineComponent } from 'vue'

export default defineComponent({
  name: 'vue-pivottable',
  props: {
    ...commonProps
  },
  setup (props, { expose }) {
    const { renderers, rendererName, locales, locale, tableMaxWidth } = toRefs(props)
    const rendererItems = computed(() => renderers.value || TableRenderer)
    const propsObj = Object.assign({}, toRaw(props),
      { localeStrings: locales.value[locale.value].localeStrings }
    )
    const createPivottable = () => {
      return h(rendererItems.value[rendererName.value], {
        ...propsObj
      })
    }
    const createWrapperContainer = () => {
      return h('div', {
        style: {
          display: 'block',
          width: '100%',
          'overflow-x': 'auto',
          'max-width': tableMaxWidth.value ? `${tableMaxWidth.value}px` : undefined
        }
      }, [
        createPivottable(h)
      ])
    }
    expose({
      rendererItems,
      createPivottable,
      createWrapperContainer
    })
    return () => createWrapperContainer()
  }
})
