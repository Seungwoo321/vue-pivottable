import './pivottable.css'
import VuePivottable from './Pivottable'
import VuePivottableUi from './PivottableUi'

VuePivottable.install = function (Vue) {
  Vue.component(VuePivottable.name, VuePivottable)
  Vue.component(VuePivottableUi.name, VuePivottableUi)
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VuePivottable)

export default VuePivottable
