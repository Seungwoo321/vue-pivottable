<template>
  <div id="app">
      <h3>Pivottable Demo</h3>
      <div class="table-responsive">
        <vue-pivottable-ui
            :data="pivotData"
            :aggregatorName="aggregatorName"
            :rendererName="rendererName"
            :rows="rows"
            :cols="cols"
            :vals="vals"
            :disabledFromDragDrop="disabledFromDragDrop"
            :sortonlyFromDragDrop="sortonlyFromDragDrop"
            :hiddenFromDragDrop="hiddenFromDragDrop">
            <template slot="rendererCell">
                {{ rendererName }}
            </template>
            <template slot="aggregatorCell">
                {{ vals.toString() }}
            </template>
        </vue-pivottable-ui>
        <!-- <vue-pivottable-ui
            :data="pivotData"
            :aggregatorName="aggregatorName"
            :rendererName="rendererName"
            :rows="rows"
            :cols="cols"
            :vals="vals"
            :rowTotal="true"
            :colTotal="true"
        >
        </vue-pivottable-ui> -->
      </div>
  </div>
</template>

<script>
import tips from './tips'
export default {
  name: 'app',
  data () {
    return {
      pivotData: tips,
      aggregatorName: 'Sum',
      rendererName: 'Table Heatmap',
      rows: ['Payer Gender', 'Party Size'],
      cols: ['Meal'],
      vals: ['Total Bill'],
      disabledFromDragDrop: ['Payer Gender'],
      hiddenFromDragDrop: ['Total Bill'],
      sortonlyFromDragDrop: ['Party Size']
    }
  }
}
</script>

<style>
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}
</style>
