import { aggregators } from './utils'

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
  }
}
