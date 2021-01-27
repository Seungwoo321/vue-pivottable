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
    aggregatorName: {
      type: String,
      default: 'Sum'
    },
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
    renderers: Object,
    rendererName: {
      type: String,
      default: 'Table'
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
          tooMany: 'too many values to show',
          filterResults: 'Filter values',
          totals: 'Totals',
          only: 'only',
          rendererMap: {
            Table: 'Table',
            'Table Heatmap': 'Table Heatmap',
            'Table Col Heatmap': 'Table Col Heatmap',
            'Table Row Heatmap': 'Table Row Heatmap',
            'Export Table TSV': 'Export Table TSV',
            'Grouped Column Chart': 'Grouped Column Chart',
            'Stacked Column Chart': 'Stacked Column Chart',
            'Grouped Bar Chart': 'Grouped Bar Chart',
            'Stacked Bar Chart': 'Stacked Bar Chart',
            'Line Chart': 'Line Chart',
            'Dot Chart': 'Dot Chart',
            'Area Chart': 'Area Chart',
            'Scatter Chart': 'Scatter Chart',
            'Multiple Pie Chart': 'Multiple Pie Chart'
          },
          aggregatorMap: {
            Count: 'Count',
            'Count Unique Values': 'Count Unique Values',
            'List Unique Values': 'List Unique Values',
            Sum: 'Sum',
            'Integer Sum': 'Integer Sum',
            Average: 'Average',
            Median: 'Median',
            'Sample Variance': 'Sample Variance',
            'Sample Standard Deviation': 'Sample Standard Deviation',
            Minimum: 'Minimum',
            Maximum: 'Maximum',
            First: 'First',
            Last: 'Last',
            'Sum over Sum': 'Sum over Sum',
            'Sum as Fraction of Total': 'Sum as Fraction of Total',
            'Sum as Fraction of Rows': 'Sum as Fraction of Rows',
            'Sum as Fraction of Columns': 'Sum as Fraction of Columns',
            'Count as Fraction of Total': 'Count as Fraction of Total',
            'Count as Fraction of Rows': 'Count as Fraction of Rows',
            'Count as Fraction of Columns': 'Count as Fraction of Columns'
          }
        }
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
      return h('span', (this.localeStrings.renderError) || 'An error occurred rendering the PivotTable results.')
    },
    computeError (h) {
      return h('span', (this.localeStrings.computeError) || 'An error occurred computing the PivotTable results.')
    },
    uiRenderError (h) {
      return h('span', (this.localeStrings.uiRenderError) || 'An error occurred rendering the PivotTable UI.')
    }
  }
}
