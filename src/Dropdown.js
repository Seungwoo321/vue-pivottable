import { h, defineEmits, toRefs, computed, ref } from 'vue'

export default {
  name: 'vue-pivottable-dropdown',
  props: {
    values: {
      type: Array,
      default: function () {
        return []
      }
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:model-value'],
  setup (props, { emit }) {
    return () => (
      h('div', [
        h('select', {
          class: 'pvtDropdown',
          value: props.modelValue,
          onChange: e => emit('update:model-value', e.target.value),
        },
          [
            props.values.map(r => {
              return h('option', {
                value: r
              }, r)
            })
          ])
      ])
    )
  }
}
