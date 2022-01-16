import TableRenderer from './TableRenderer'
import defaultProps from './helper/common'
export default {
  name: 'vue-pivottable',
  mixins: [
    defaultProps
  ],
  computed: {
    tableRenderer () {
      const makeRenderer = TableRenderer.makeRenderer
      return {
        Table: makeRenderer({ name: 'vue-table' }),
        'Table Heatmap': makeRenderer({ heatmapMode: 'full', name: 'vue-table-heatmap' }),
        'Table Col Heatmap': makeRenderer({ heatmapMode: 'col', name: 'vue-table-col-heatmap' }),
        'Table Row Heatmap': makeRenderer({ heatmapMode: 'row', name: 'vue-table-col-heatmap' }),
        'Export Table TSV': TableRenderer.TSVExportRenderer
      }
    },
    rendererItems () {
      const TableRenderer = this.tableRenderer
      return this.renderers || Object.assign({}, TableRenderer)
    }
  },
  methods: {
    createPivottable (h) {
      const props = this.$props
      return h(this.rendererItems[this.rendererName], {
        props: {
          ...props,
          localeStrings: props.locales[props.locale].localeStrings
        }
      })
    },
    createWrapperContainer (h) {
      return h('div', {
        style: {
          display: 'block',
          width: '100%',
          'overflow-x': 'auto',
          'max-width': this.tableMaxWidth ? `${this.tableMaxWidth}px` : undefined
        }
      }, [
        this.createPivottable(h)
      ])
    }
  },
  render (h) {
    return this.createWrapperContainer(h)
  },
  renderError (h, error) {
    return this.renderError(h)
  }
}
