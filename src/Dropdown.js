export default {
  props: ['values', 'value'],
  model: {
    prop: 'value',
    event: 'input'
  },
  created () {
    // Only emit default value if value is undefined or null, not empty string
    const emitValue = this.value !== undefined && this.value !== null ? this.value : this.values[0]
    this.$emit('input', emitValue)
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
