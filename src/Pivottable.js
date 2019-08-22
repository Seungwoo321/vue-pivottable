import TableRenderer from './TableRenderer'
import TsvExportRenderer from './TsvExportRenderer'
import defaultProps from './helper/defaultProps'
export default {
  name: 'vue-pivottable',
  mixins: [defaultProps],
  props: {
    heatmapMode: {
      type: String,
      default: 'full',
      validator: function (value) {
        return ['full', 'col', 'row'].indexOf(value) !== -1
      }
    },
    rendererName: {
      type: String,
      default: 'Table'
    }
  },
  computed: {
    renderers () {
      if (this.rendererName === 'TSV Export Renderers') {
        return TsvExportRenderer
      } else {
        return TableRenderer
      }
    }
  },
  render (h) {
    const props = this.$props
    return h(this.renderers, {
      props
    })
  }
}
