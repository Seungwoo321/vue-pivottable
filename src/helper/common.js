import { aggregators, locales } from './utils'

export default {
  props: {
    data: {
      type: [Array, Object, Function],
      required: true
    },
    aggregators: {
      type: Object,
      default: function () {
        return aggregators
      }
    },
    aggregatorName: {
      type: String,
      default: 'Count'
    },
    heatmapMode: String,
    tableColorScaleGenerator: {
      type: Function
    },
    tableOptions: {
      type: Object,
      default: function () {
        return {}
      }
    },
    renderers: Object,
    rendererName: {
      type: String,
      default: 'Table'
    },
    locale: {
      type: String,
      default: 'en'
    },
    locales: {
      type: Object,
      default: function () {
        return locales
      }
    },
    rowTotal: {
      type: Boolean,
      default: true
    },
    colTotal: {
      type: Boolean,
      default: true
    },
    cols: {
      type: Array,
      default: function () {
        return []
      }
    },
    rows: {
      type: Array,
      default: function () {
        return []
      }
    },
    vals: {
      type: Array,
      default: function () {
        return []
      }
    },
    attributes: {
      type: Array,
      default: function () {
        return []
      }
    },
    valueFilter: {
      type: Object,
      default: function () {
        return {}
      }
    },
    sorters: {
      type: [Function, Object],
      default: function () {
        return {}
      }
    },
    derivedAttributes: {
      type: [Function, Object],
      default: function () {
        return {}
      }
    },
    rowOrder: {
      type: String,
      default: 'key_a_to_z',
      validator: function (value) {
        return ['key_a_to_z', 'value_a_to_z', 'value_z_to_a'].indexOf(value) !== -1
      }
    },
    colOrder: {
      type: String,
      default: 'key_a_to_z',
      validator: function (value) {
        return ['key_a_to_z', 'value_a_to_z', 'value_z_to_a'].indexOf(value) !== -1
      }
    },
    tableMaxWidth: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0
      }
    }
  },
  methods: {
    renderError (h) {
      return h('span', (this.locales[this.locale].localeStrings.renderError) || 'An error occurred rendering the PivotTable results.')
    },
    computeError (h) {
      return h('span', (this.locales[this.locale].localeStrings.computeError) || 'An error occurred computing the PivotTable results.')
    },
    uiRenderError (h) {
      return h('span', (this.locales[this.locale].localeStrings.uiRenderError) || 'An error occurred rendering the PivotTable UI.')
    }
  }
}
