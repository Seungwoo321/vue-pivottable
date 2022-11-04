<template>
  <VuePivottableUi
    :data="pivotData"
    :rows="rows"
    :cols="cols"
    :vals="vals"
  >
    <template v-slot:pvtAttr="{ name }">
      {{ name.toUpperCase() }}
    </template>
  </VuePivottableUi>
</template>

<script>
import { VuePivottableUi } from '../../../src'
import 'vue-pivottable/dist/vue-pivottable.css'
import tips from '../tips'

export default {
  name: 'PivotTable',
  components: { VuePivottableUi },
  data () {
    return {
      pivotData: tips,
      aggregatorName: 'Sum',
      rendererName: 'Table Heatmap',
      rows: ['Payer Gender', 'Party Size'],
      cols: ['Meal', 'Payer Smoker', 'Day of Week'],
      vals: ['Total Bill']
    }
  },
  mounted () {
    console.log(this.pivotData)
  }
}
</script>

<style>

</style>
