import TableRenderer from "./TableRenderer"
import defaultProps from "./helper/common"
export default {
  name: "vue-pivottable",
  mixins: [defaultProps],
  computed: {
    rendererItems() {
      return this.renderers || Object.assign({}, TableRenderer)
    },
  },
  methods: {
    createPivottable(h) {
      const props = this.$props
      return h(this.rendererItems[this.rendererName], {
        props: Object.assign(props, {
          localeStrings: props.locales[props.locale].localeStrings,
        }),
      })
    },
    createWrapperContainer(h) {
      return h(
        "div",
        {
          style: {
            "max-width": this.tableMaxWidth
              ? `${this.tableMaxWidth}px`
              : undefined,
          },
        },
        [this.createPivottable(h)],
      )
    },
  },
  render(h) {
    return this.createWrapperContainer(h)
  },
  renderError(h, error) {
    return this.renderError(h)
  },
}
