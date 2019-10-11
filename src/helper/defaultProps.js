export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    },
    data: {
      type: [Array, Object, Function],
      required: true
    },
    aggregatorName: String,
    cols: {
      type: Array,
      default: function () {
        return []
      }
    },
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
      type: Object,
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
    }
  }
}
