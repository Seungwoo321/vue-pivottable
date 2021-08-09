<template>
  <div id="app">
    <a href="https://github.com/seungwoo321/vue-pivottable" target="_blank" style="position: fixed; top: 1rem; right: 1rem;">
      <svg id="i-github" viewBox="0 0 64 64" width="36" height="36">
        <path stroke-width="0" fill="black" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path>
      </svg>
    </a>
    <div class="main">
      <h1>Vue Pivottable</h1>
      <div class="table-responsive">
        <vue-pivottable
          :data="pivotData"
          :aggregatorName="aggregatorName"
          :rendererName="rendererName"
          :rows="rows"
          :cols="cols"
          :vals="vals">
        </vue-pivottable>
      </div>
      <pre>
        <code>
          &lt;vue-pivottable
              :data="pivotData"
              :aggregatorName="aggregatorName"
              :rendererName="rendererName"
              :rows="rows"
              :cols="cols"
              :vals="vals"&gt;
          &lt;/vue-pivottable&gt;
        </code>
      </pre>
      <h1>Vue Pivottable Ui</h1>
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
            :hiddenFromDragDrop="hiddenFromDragDrop"
        >
            <colgroup slot="colGroup">
                <col :width="300">
            </colgroup>
        </vue-pivottable-ui>
      </div>
      <pre>
        <code>
          &lt;vue-pivottable-ui
              :data="pivotData"
              :aggregatorName="aggregatorName"
              :rendererName="rendererName"
              :rows="rows"
              :cols="cols"
              :vals="vals"
              :disabledFromDragDrop="disabledFromDragDrop"
              :sortonlyFromDragDrop="sortonlyFromDragDrop"
              :hiddenFromDragDrop="hiddenFromDragDrop"&gt;
          &lt;/vue-pivottable-ui&gt;
        </code>
      </pre>
    </div>
    <footer>Released under the <a href="//github.com/seungwoo321/vue-pivottable/blob/master/LICENSE">MIT</a> license. <a href="//github.com/seungwoo321/vue-pivottable">View source.</a></footer>
  </div>
</template>

<script>
import tips from './tips'
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
  components: {
    VuePivottableUi,
    VuePivottable
  },
  name: 'app',
  data () {
    return {
      pivotData: tips,
      aggregatorName: 'Sum',
      rendererName: 'Table Heatmap',
      rows: ['Payer Gender', 'Party Size'],
      cols: ['Meal', 'Payer Smoker', 'Day of Week'],
      vals: ['Total Bill'],
      disabledFromDragDrop: ['Payer Gender'],
      hiddenFromDragDrop: ['Total Bill'],
      sortonlyFromDragDrop: ['Party Size']
    }
  }
}
</script>

<style>
.main {
  max-width: 980px;
  margin: 8vh auto 20px;
}
h1 {
  text-align: center;
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}
pre {
  text-align: left;
  background-color: #f8f8f8;
  padding: 1.2em 1.4em;
  line-height: 1.5em;
  margin: 60px 0 0;
  overflow: auto;
}
code {
  padding: 0;
  margin: 0;
}
footer {
  text-align: center;
  margin-top: 40px;
  line-height: 2;
}
</style>
