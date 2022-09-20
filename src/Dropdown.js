export default {
  props: ['values', 'value'],
  model: {
    prop: 'value',
    event: 'input'
  },
  created () {
    this.$emit('input', this.value || this.values[0])
  },
  methods: {
    handleChange (e) {
      this.$emit('input', e.target.value)
    }
  },
  render (h) {
    return h('select', {
      staticClass: ['pvtDropdown'],
      domProps: {
        value: this.value
      },
      on: {
        change: this.handleChange
      }
    },
    [
      this.values.map(r => {
        const text = r
        return h('option', {
          attrs: {
            value: r,
            selected: r === this.value ? 'selected' : undefined
          }
        }, text)
      })
    ])
  }
}
