<template>
  <!-- <VuePivottable
    :data="pivotData"
    :rows="rows"
    :cols="cols"
    :tableOptions="tableOptions"
  ></VuePivottable> -->
  <VuePivottableUi
    :data="pivotData"
    :rows="rows"
    :cols="cols"
    :tableOptions="tableOptions"
    :attributes="['color', 'shape', 'unused']"
  >
    <!-- <template v-slot:renderer>
      renderer cell
    </template> -->
  </VuePivottableUi>
</template>

<script setup>
import '../../src/assets/vue-pivottable.css'
import { VuePivottableUi } from '../../src/index'

const pivotData = [{ color: 'blue', shape: 'circle', unused: 1 }, { color: 'red', shape: 'triangle', unused: 2 }]
const rows = []
const cols = []

const tableOptions = {
  clickCallback: function (e, value) {
    console.log('clicked: ' + value)
  }
}
</script>
