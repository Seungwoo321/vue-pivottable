<template>
  <div id="app">
    <a href="https://github.com/seungwoo321/vue-pivottable" target="_blank"
      style="position: fixed; top: 1rem; right: 1rem;">
      <svg id="i-github" viewBox="0 0 64 64" width="36" height="36">
        <path stroke-width="0" fill="black"
          d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z">
        </path>
      </svg>
    </a>
    <div class="title">
      <h1>Vue Pivottable</h1>
      <small>Sample Dataset: Tips({{ filteredData.length }})</small>
    </div>
    <div>
      <select v-model="locale">
        <option value="en" :selected="locale === 'en' ? 'selected' : undefined">en</option>
        <option value="ko" :selected="locale === 'ko' ? 'selected' : undefined">ko</option>
        <option value="fr" :selected="locale === 'fr' ? 'selected' : undefined">fr</option>
      </select>
    </div>
      <div class="main-wrapper">
        <vue-pivottable-ui
          v-model="config"
          :data="pivotData"
          :locale="locale"
          :locales="locales"
          :renderers="renderers"
          :aggregatorName="aggregatorName"
          :tableColorScaleGenerator="colorScaleGenerator"
          :attributes="attributes"
          :valueFilter="valueFilter"
          :rows="rows"
          :cols="cols"
          :vals="vals"
          :colLimit="100"
          :rowLimit="100"
          :async="false"
          :disabledFromDragDrop="disabledFromDragDrop"
          :sortonlyFromDragDrop="sortonlyFromDragDrop"
          :hiddenFromDragDrop="hiddenFromDragDrop"
          :sorters="sorters"
          rowOrder="key_a_to_z"
          :tableOptions="tableOptions"
          :menuLimit="10000"
          @no:filterbox="noFilterbox"
        >
          <!-- Slot ColGroup -->
          <template v-slot:colGroup>
            <colgroup>
              <col :width="300">
              <col>
            </colgroup>
          </template>
          <!-- Slot Output -->
          <!-- <template v-slot:output>
                  <div v-if="loading">
                    loading...
                  </div>
                </template> -->
          <div v-if="loading" slot="output">
            loading...
          </div>

          <!-- Scoped Slot PvtAttr -->
          <template v-slot:pvtAttr="{ name }">
            {{ name }}
          </template>

          <!-- Scoped Slot Output -->
          <!-- <template v-if="!loading" v-slot:output="{ pivotData }">
                  <div v-if="!viewTable">
                    <button @click="viewTable = !viewTable">
                      View Table
                    </button>
                    <button @click="otherAction(pivotData)">
                      Other action
                    </button>
                  </div>
                  <template v-else>
                    <table-renderer
                      v-if="pivotData.props.rendererName === 'Table'"
                      :data="pivotData.props.data"
                      :props="pivotData.props"
                    >
                    </table-renderer>
                    <heatmap-renderer
                      v-if="pivotData.props.rendererName === 'Table Heatmap'"
                      :data="pivotData.props.data"
                      :props="pivotData.props"
                    >
                    </heatmap-renderer>
                  </template>
                </template> -->

        </vue-pivottable-ui>
        <!-- <vue-pivottable
                :data="data"
                :rendererName="rendererName"
                :aggregatorName="aggregatorName"
                :rows="rows"
                :cols="cols"
                :vals="vals"
                :sorters="sorters"
                :locales="locales"
                :locale="locale"
              >
              </vue-pivottable> -->
        <textarea style="height: 500px; margin: 10px;" readonly :value="JSON.stringify(config, undefined, 2)">
        </textarea>
      </div>
    <footer>Released under the <a href="//github.com/seungwoo321/vue-pivottable/blob/master/LICENSE">MIT</a> license. <a href="//github.com/seungwoo321/vue-pivottable">View source.</a></footer>
  </div>
</template>

<script>
import btcDaily from './btc-daily.js'
import { VuePivottableUi, PivotUtilities, Renderer } from '../../src/'
import PlotlyRenderer from '../../packages/plotly-renderer'
import ScrollRenderer from '../../packages/scroll-renderer'
import '../../src/assets/vue-pivottable.css'
import { scaleLinear } from 'd3-scale'

export default {
  name: 'App',
  components: {
    VuePivottableUi
    // TableRenderer,
    // HeatmapRenderer
    // VuePivottable
  },
  data () {
    return {
      viewTable: false,
      // fix issue #27
      valueFilter: {
        // Merge pull reqest #77
        date: {
          '*': true
        }
      },
      config: {},
      filteredData: [],
      pivotData: btcDaily,
      asyncFields: ['Unused 1'],
      attributes: ['Unused 1', 'unix', 'date', 'symbol', 'open', 'high', 'low', 'close', 'Volume BTC', 'Volume USD'],
      rows: ['date'],
      cols: ['symbol'],
      vals: ['Volume BTC'],
      disabledFromDragDrop: [], // ['Payer Gender'],
      hiddenFromDragDrop: [],
      sortonlyFromDragDrop: [], // ['Party Size'],
      pivotColumns: ['Meal', 'Payer Smoker', 'Day of Week', 'Payer Gender', 'Party Size'],
      loading: false,
      aggregatorName: 'Sum',
      rendererName: 'Table',
      locale: 'en'
    }
  },
  created () {
    this.data = btcDaily
  },
  computed: {
    tableOptions () {
      return {
        clickCallback: function (e, value, filters, pivotData) {
          const values = []
          pivotData.forEachMatchingRecord(filters,
            function (record) {
              values.push(Object.values(record))
            }
          )
          alert(values.join('\n'))
        }
      }
    },
    sorters () {
      return {
        'Day of Week': PivotUtilities.sortAs(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
      }
    },
    locales () {
      return {
        fr: PivotUtilities.locales.fr,
        en: PivotUtilities.locales.en,
        ko: {
          aggregators: this.aggregators,
          localeStrings: {
            renderError: '피벗 테이블 결과를 렌더링하는 동안 오류가 발생 했습니다.',
            computeError: '피벗 테이블 결과를 계산하는 동안 오류가 발생 했습니다.',
            uiRenderError: '피벗 테이블 UI를 렌더링하는 동안 오류가 발생 했습니다.',
            selectAll: '모두 선택',
            selectNone: '선택 안함',
            tooMany: '표시 할 값이 너무 많습니다.',
            filterResults: '값 필터링',
            totals: '합계',
            only: '단독',
            vs: 'vs',
            by: 'by'
          }
        }
      }
    },
    aggregators () {
      const usFmt = PivotUtilities.numberFormat()
      const usFmtInt = PivotUtilities.numberFormat({ digitsAfterDecimal: 0 })
      const usFmtPct = PivotUtilities.numberFormat({
        digitsAfterDecimal: 1,
        scaler: 100,
        suffix: '%'
      })

      return ((tpl) => ({
        Count: tpl.count(usFmtInt),
        'Count Unique Values': tpl.countUnique(usFmtInt),
        'List Unique Values': tpl.listUnique(', '),
        Sum: tpl.sum(usFmt),
        'Integer Sum': tpl.sum(usFmtInt),
        Average: tpl.average(usFmt),
        Median: tpl.median(usFmt),
        'Sample Variance': tpl.var(1, usFmt),
        'Sample Standard Deviation': tpl.stdev(1, usFmt),
        Minimum: tpl.min(usFmt),
        Maximum: tpl.max(usFmt),
        First: tpl.first(usFmt),
        Last: tpl.last(usFmt),
        'Sum over Sum': tpl.sumOverSum(usFmt),
        'Sum as Fraction of Total': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
        'Sum as Fraction of Rows': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
        'Sum as Fraction of Columns': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
        'Count as Fraction of Total': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
        'Count as Fraction of Rows': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
        'Count as Fraction of Columns': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
      })
      )(PivotUtilities.aggregatorTemplates)
    },
    renderers () {
      const TableRenderer = Renderer.TableRenderer
      return (() => ({
        Table: TableRenderer.Table,
        'Scroll Table': ScrollRenderer.Table,
        'Table Heatmap': ScrollRenderer['Table Heatmap'],
        'Table Col Heatmap': TableRenderer['Table Col Heatmap'],
        'Table Row Heatmap': TableRenderer['Table Row Heatmap'],
        'Export Table TSV': TableRenderer['Export Table TSV'],
        'Grouped Column Chart': PlotlyRenderer['Grouped Column Chart'],
        'Stacked Column Chart': PlotlyRenderer['Stacked Column Chart'],
        'Grouped Bar Chart': PlotlyRenderer['Grouped Bar Chart'],
        'Stacked Bar Chart': PlotlyRenderer['Stacked Bar Chart'],
        'Line Chart': PlotlyRenderer['Line Chart'],
        'Dot Chart': PlotlyRenderer['Dot Chart'],
        'Area Chart': PlotlyRenderer['Area Chart'],
        'Scatter Chart': PlotlyRenderer['Scatter Chart'],
        'Multiple Pie Chart': PlotlyRenderer['Multiple Pie Chart']
      })
      )()
    }
  },
  methods: {
    colorScaleGenerator (values) {
      const scale = scaleLinear()
        .domain([0, Math.max.apply(null, values)])
        .range(['#fff', '#77f'])
      return x => {
        return { 'background-color': scale(x) }
      }
    },
    noFilterbox () {
      alert('no data')
    },
    otherAction (pivotData) {
      alert(`All Total Count: ${pivotData.allTotal.count}`)
    }
  },
  watch: {
    config: {
      handler (value, oldValue) {
        delete value.data
      },
      deep: true,
      immediate: false
    }
  }
}
</script>

<style>
.main-wrapper {
  display: flex;
  flex-flow: column;
}

@media screen and (min-width: 900px) {
  .main-wrapper {
    flex-flow: row;
  }

  .main-wrapper>textarea {
    width: 500px;
  }
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
