<template>
  <div id="app">
    <a href="https://github.com/seungwoo321/vue-pivottable" target="_blank" style="position: fixed; top: 1rem; right: 1rem;">
      <svg id="i-github" viewBox="0 0 64 64" width="36" height="36">
        <path stroke-width="0" fill="black" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path>
      </svg>
    </a>
      <div class="title">
        <h1>Vue Pivottable</h1>
        <small>Sample Dataset: Tips({{ filteredData.length }})</small>
      </div>
      <vue-pivottable-ui
          :data="data"
          :aggregatorName="aggregatorName"
          :rendererName="rendererName"
          :tableColorScaleGenerator="colorScaleGenerator"
          :attributes="attributes"
          :valueFilter="valueFilter"
          :rows="rows"
          :cols="cols"
          :vals="vals"
          :disabledFromDragDrop="disabledFromDragDrop"
          :sortonlyFromDragDrop="sortonlyFromDragDrop"
          :hiddenFromDragDrop="hiddenFromDragDrop"
          :sorters="sorters"
          @onRefresh="onRefresh"
      >
        <div v-if="loading" slot="output">
          loading...
        </div>
        <template v-if="!loading" slot="output" slot-scope="{ pivotData }">
          {{ pivotData }}
        </template>
        <template slot="pvtAttr" slot-scope="{ name }">
          {{ name }}
        </template>
      </vue-pivottable-ui>
    <footer>Released under the <a href="//github.com/seungwoo321/vue-pivottable/blob/master/LICENSE">MIT</a> license. <a href="//github.com/seungwoo321/vue-pivottable">View source.</a></footer>
  </div>
</template>

<script>
import tips from './tips'
import tips2 from './tips2'
// import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import { VuePivottableUi, PivotUtilities } from '../../../src'
import 'vue-pivottable/dist/vue-pivottable.css'
import { scaleLinear } from 'd3-scale'
export default {
  components: {
    VuePivottableUi
  },
  name: 'app',
  data () {
    return {
      valueFilter: {
        Meal: {
          Dinner: true
        }
      },
      PivotData: PivotUtilities.PivotData,
      filteredData: [],
      sortAs: PivotUtilities.sortAs,
      data: [],
      aggregatorName: 'Sum',
      rendererName: 'Table Heatmap',
      attributes: ['Unused 1', 'Meal', 'Payer Smoker', 'Day of Week', 'Payer Gender', 'Party Size'],
      rows: ['Payer Gender', 'Party Size'],
      cols: ['Meal', 'Payer Smoker', 'Day of Week'],
      vals: ['Total Bill'],
      disabledFromDragDrop: [], // ['Payer Gender'],
      hiddenFromDragDrop: ['Total Bill'],
      sortonlyFromDragDrop: [], // ['Party Size'],
      pivotColumns: ['Meal', 'Payer Smoker', 'Day of Week', 'Payer Gender', 'Party Size'],
      loading: false
    }
  },
  created () {
    setTimeout(() => {
      this.data = tips
    }, 1000)
  },
  computed: {
    sorters () {
      return {
        'Day of Week': this.sortAs(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
      }
    }
  },
  methods: {
    onRefresh (config) {
      console.log(config)
      const PivotData = this.PivotData
      this.filteredData = new PivotData(config).getFilteredData()
      // this.pivotColumns = config.cols.concat(config.rows)
      console.log(2)
    },
    colorScaleGenerator (values) {
      const scale = scaleLinear()
        .domain([0, Math.max.apply(null, values)])
        .range(['#fff', '#77f'])
      return x => {
        return { 'background-color': scale(x) }
      }
    }
  },
  watch: {
    pivotColumns: {
      handler (value, oldValue) {
        if (value.length === oldValue.length) return
        if (value.includes('Unused 1')) {
          this.loading = true
          setTimeout(() => {
            this.data = tips2
            this.loading = false
          }, 1000)
        } else {
          this.loading = true
          setTimeout(() => {
            this.data = tips
            this.loading = false
          }, 1000)
        }
      },
      deep: true,
      immediate: false
    }
  }
}
</script>

<style>
.main {
  max-width: 980px;
  margin: 8vh auto 20px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
h1 {
  margin-bottom: 0px;
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
