export default {
  props: ['values', 'changeValue'],
  methods: {
    handleChange (e) {
      const changeValue = e.target.value
      this.$emit('input', changeValue)
    }
  },
  render (h) {
    return h('select', {
      staticClass: ['pvtDropdown'],
      attrs: {
        value: this.value
      },
      on: {
        change: this.handleChange
      }
    },
    [
      this.values.map(r => {
        return h('option', {
          attrs: {
            value: r
          }
        }, r)
      })
    ])
  }
}
