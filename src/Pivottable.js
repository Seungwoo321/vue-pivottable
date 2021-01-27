import TableRenderer from './TableRenderer'
import defaultProps from './helper/common'
export default {
  name: 'vue-pivottable',
  mixins: [defaultProps],
  computed: {
    rendererItems () {
      return this.renderers || Object.assign({}, TableRenderer)
    }
  },
  methods: {
    createPivottable (h) {
      const props = this.$props
      return h(this.rendererItems[this.rendererName], {
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
  },
  renderError (h, error) {
    return this.renderError(h)
  }
}
