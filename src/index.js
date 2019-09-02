import VuePivottable from './Pivottable'
import VuePivottableUi from './PivottableUi'

const components = {
  VuePivottable,
  VuePivottableUi
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VuePivottable)
console.log(VuePivottable)
export {
  VuePivottable,
  VuePivottableUi
}

export default (Vue) => {
  for (const key in components) {
    Vue.component(components[key].name, components[key])
  }
}
