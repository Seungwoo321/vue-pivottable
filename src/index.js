import VuePivottable from './Pivottable'
import VuePivottableUi from './PivottableUi'

const components = {
  VuePivottable,
  VuePivottableUi
}
// VuePivottable.install = function (Vue) {
//   Vue.component(VuePivottable.name, VuePivottable)
// }

// VuePivottableUi.install = function (Vue) {
//   Vue.component(VuePivottableUi.name, VuePivottableUi)
// }

export default (Vue) => {
  for (const key in components) {
    Vue.component(components[key].name, components[key])
  }
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VuePivottable)

export {
  VuePivottable,
  VuePivottableUi
}
