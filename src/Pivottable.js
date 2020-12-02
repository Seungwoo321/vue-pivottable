import TableRenderer from './TableRenderer'
import defaultProps from './helper/defaultProps'
export default {
  name: 'vue-pivottable',
  mixins: [defaultProps],
  computed: {
    defaultRenderers () {
      return TableRenderer[this.rendererName in TableRenderer ? this.rendererName : Object.keys(TableRenderer)[0]]
    }
  },
  methods: {
    createPivottable (h) {
      const props = this.$props
      return h(this.renderers || this.defaultRenderers, {
        props
      })
    },
    createWrapperContainer (h) {
      return h('div', {
        style: {
          display: 'block',
          // width: '100%',
          'overflow-x': 'auto',
          'max-width': `${this.tableMaxWidth}px`
        }
      }, [
        this.createPivottable(h)
      ])
    }
  },
  render (h) {
    return this.tableMaxWidth > 0 ? this.createWrapperContainer(h) : this.createPivottable(h)
  }
}
