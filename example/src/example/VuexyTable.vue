<template>
  <div>
    Vuexy template
    <vue-pivottable-ui
      :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
      :rows="['color']"
      :cols="['shape']"
    >
    </vue-pivottable-ui>
  </div>

</template>

<script>
import { VuePivottableUi } from '../../../src'
import './vuexy-style.css'
export default {
  components: {
    VuePivottableUi
  }
}
</script>
