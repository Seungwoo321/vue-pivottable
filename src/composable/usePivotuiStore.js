import { reactive, ref, computed } from 'vue'
import { createInjectionState } from '@vueuse/shared'

const [useProvidePivotuiStore, usePivotuiStore] = createInjectionState(($props, $context) => {
  // state
  const appliedFilter = reactive($props.valueFilter)
  const sortIcons = reactive({
    key_a_to_z: {
      rowSymbol: '↕',
      colSymbol: '↔',
      next: 'value_a_to_z'
    },
    value_a_to_z: {
      rowSymbol: '↓',
      colSymbol: '→',
      next: 'value_z_to_a'
    },
    value_z_to_a: {
      rowSymbol: '↑',
      colSymbol: '←',
      next: 'key_a_to_z'
    }
  })

  // getters


  // actions
  return {
    appliedFilter,
    sortIcons
  }
})

export { useProvidePivotuiStore }

export { usePivotuiStore }