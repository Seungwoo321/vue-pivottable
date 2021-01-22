import { aggregators } from './utils'

export default {
  props: {
    data: {
      type: [Array, Object, Function],
      required: true
    },
    localeStrings: {
      type: Object,
      default: function () {
        return {
          renderError: 'An error occurred rendering the PivotTable results.',
          computeError: 'An error occurred computing the PivotTable results.',
          uiRenderError: 'An error occurred rendering the PivotTable UI.',
          selectAll: 'Select All',
          selectNone: 'Select None',
          tooMany: '(too many to list)',
          filterResults: 'Filter values',
          totals: 'Totals',
          vs: 'vs',
          by: 'by',
          only: 'only'
        }
      }
    },
    aggregators: {
      type: Object,
      default: function () {
        return aggregators
      }
    },
    aggregatorName: String,
    cols: {
      type: Array,
      default: function () {
        return []
      }
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
    renderers: Function,
    rendererName: {
      type: String,
      default: 'Table'
    },
    rowTotal: {
      type: Boolean,
      default: true
    },
    colTotal: {
      type: Boolean,
      default: true
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
      return h('span', this.localeStrings.renderError)
    },
    computeError (h) {
      return h('span', this.localeStrings.computeError)
    },
    uiRenderError (h) {
      return h('span', this.localeStrings.uiRenderError)
    }
  }
}
