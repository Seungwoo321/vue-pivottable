export default {
  props: ['values', 'localeStrings'],
  data () {
    return {
      changeValue: ''
    }
  },
  methods: {
    handleChange (e) {
      this.changeValue = e.target.value
      this.$emit('input', this.changeValue)
    }
  },
  render (h) {
    return h('select', {
      staticClass: ['pvtDropdown'],
      attrs: {
        value: this.changeValue
      },
      on: {
        change: this.handleChange
      }
    },
    [
      this.values.map(r => {
        const text = this.localeStrings ? this.localeStrings[r] : r
        return h('option', {
          attrs: {
            value: r,
            selected: r === this.changeValue ? 'selected' : undefined
          }
        }, text)
      })
    ])
  }
}
