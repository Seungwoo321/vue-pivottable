import VuePivottable from './Pivottable'
import VuePivottableUi from './PivottableUi'
import {
  aggregatorTemplates,
  aggregators,
  derivers,
  locales,
  naturalSort,
  numberFormat,
  getSort,
  sortAs,
  PivotData
} from './helper/utils'

const PivotUtilities = {
  aggregatorTemplates,
  aggregators,
  derivers,
  locales,
  naturalSort,
  numberFormat,
  getSort,
  sortAs,
  PivotData
}

const components = {
  VuePivottable,
  VuePivottableUi
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VuePivottable)

const addVueGlobalUse = (Vue) => {
  for (const key in components) {
    Vue.component(components[key].name, components[key])
  }
}

export {
  VuePivottable,
  VuePivottableUi,
  PivotUtilities,
  addVueGlobalUse
}
