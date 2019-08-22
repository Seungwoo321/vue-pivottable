export default {
  name: 'vue-pivottable-ui',
  created () {
    console.log(this.$vnode)
  },
  mounted () {
    console.log(this.$vnode)
    console.log(this.$el)
  },
  render (h) {
    return h('div', this.$slots.default)
  }
}
