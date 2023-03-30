import TableRenderer from './TableRenderer'
import defaultProps from './helper/common'
import { h, computed, toRefs, toRaw } from 'vue'

const props = defaultProps.props

export default {
  name: 'vue-pivottable',
  props,
  setup ($props, $context) {
    const { renderers, rendererName, locales, locale, tableMaxWidth } = toRefs($props)
    const rendererItems = computed(() => renderers.value || Object.assign({}, TableRenderer))
    const props = Object.assign(
      {},
      toRaw($props),
      { localeStrings: locales.value[locale.value].localeStrings }
    )
    console.log(props.data)
    console.log(rendererName.value)
    const createPivottable = (h) => {
      return h(rendererItems.value[rendererName.value], {
        props
      })
    }
    const createWrapperContainer = (h) => {
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
    return {
      rendererItems,
      createPivottable,
      createWrapperContainer
    }
  },
  render () {
    return this.createWrapperContainer(h)
  }
  // renderError (h, error) {
  //   return this.renderError(h)
  // }
}
