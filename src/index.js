import './pivottable.css'
import Pivottable from './Pivottable'
import PivottableUi from './PivottableUi'
const components = {
  Pivottable,
  PivottableUi
}

function install (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

export {
  install,
  components
}
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  install,
  ...components
}
