<template>
  <vue-pivottable-ui
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    :rows="['color']"
    :cols="['shape']"
  >
  </vue-pivottable-ui>
</template>

<script>
import { VuePivottableUi } from '../../../src'
import '../../../dist/vue-pivottable.css'
export default {
  components: {
    VuePivottableUi
  }
}
</script>

<style>

</style>