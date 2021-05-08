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
      <div>
        <select v-model="locale">
          <option value="en" :selected="locale === 'en' ? 'selected' : undefined">en</option>
          <option value="ko" :selected="locale === 'ko' ? 'selected' : undefined">ko</option>
        </select>
      </div>
      <!-- {{ localeStrings[locale] }} -->
      <vue-pivottable-ui
        v-model="config"
        :data="data"
        :localeStrings="localeStrings[locale]"
        :rendererName="rendererName"
        :aggregatorName="aggregatorName"
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
        rowOrder="value_a_to_z"
      >
        <colgroup slot="colGroup">
            <col :width="300">
            <col>
        </colgroup>
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
      <!-- <vue-pivottable
        v-model="config"
        :data="data"
        :localeStrings="localeStrings[locale]"
        :rendererName="rendererName"
        :aggregatorName="aggregatorName"
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
        rowOrder="value_a_to_z"
      >
      </vue-pivottable> -->
      <!-- fix issue #14 -->
      <!--
      <div>
        {{ Object.keys(config).length }}
        {{ config }}
      </div>
      -->
    <footer>Released under the <a href="//github.com/seungwoo321/vue-pivottable/blob/master/LICENSE">MIT</a> license. <a href="//github.com/seungwoo321/vue-pivottable">View source.</a></footer>
  </div>
</template>

<script>
import tips from './tips'
import tips2 from './tips2'
// import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import { VuePivottableUi, PivotUtilities, Renderer } from '../../../src'
// import { VuePivottable, PivotUtilities, Renderer } from '../../../src'
import 'vue-pivottable/dist/vue-pivottable.css'
import { scaleLinear } from 'd3-scale'
export default {
  components: {
    VuePivottableUi
    // VuePivottable
  },
  name: 'app',
  data () {
    return {
      // fix issue #27
      valueFilter: {
        Meal: {
          Dinner: true
        }
      },
      config: {},
      filteredData: [],
      data: [],
      attributes: ['Unused 1', 'Meal', 'Payer Smoker', 'Day of Week', 'Payer Gender', 'Party Size'],
      rows: ['Payer Gender', 'Party Size'],
      cols: ['Meal', 'Payer Smoker', 'Day of Week'],
      vals: ['Total Bill'],
      disabledFromDragDrop: [], // ['Payer Gender'],
      hiddenFromDragDrop: ['Total Bill'],
      sortonlyFromDragDrop: [], // ['Party Size'],
      pivotColumns: ['Meal', 'Payer Smoker', 'Day of Week', 'Payer Gender', 'Party Size'],
      loading: false,
      aggregatorName: 'Sum',
      rendererName: 'Table',
      localeStrings: {
        en: {
          renderError: 'An error occurred rendering the PivotTable results.',
          computeError: 'An error occurred computing the PivotTable results.',
          uiRenderError: 'An error occurred rendering the PivotTable UI.',
          selectAll: 'Select All',
          selectNone: 'Select None',
          tooMany: 'too many values to show',
          filterResults: 'Filter values',
          totals: 'Totals',
          only: 'only',
          rendererNames: {
            Table: 'Table',
            'Table Heatmap': 'Table Heatmap',
            'Table Col Heatmap': 'Table Col Heatmap',
            'Table Row Heatmap': 'Table Row Heatmap',
            'Export Table TSV': 'Export Table TSV',
            'Grouped Column Chart': 'Grouped Column Chart',
            'Stacked Column Chart': 'Stacked Column Chart',
            'Grouped Bar Chart': 'Grouped Bar Chart',
            'Stacked Bar Chart': 'Stacked Bar Chart',
            'Line Chart': 'Line Chart',
            'Dot Chart': 'Dot Chart',
            'Area Chart': 'Area Chart',
            'Scatter Chart': 'Scatter Chart',
            'Multiple Pie Chart': 'Multiple Pie Chart'
          },
          aggregatorMap: {
            Count: 'Count',
            'Count Unique Values': 'Count Unique Values',
            'List Unique Values': 'List Unique Values',
            Sum: 'Sum',
            'Integer Sum': 'Integer Sum',
            Average: 'Average',
            Median: 'Median',
            'Sample Variance': 'Sample Variance',
            'Sample Standard Deviation': 'Sample Standard Deviation',
            Minimum: 'Minimum',
            Maximum: 'Maximum',
            First: 'First',
            Last: 'Last',
            'Sum over Sum': 'Sum over Sum',
            'Sum as Fraction of Total': 'Sum as Fraction of Total',
            'Sum as Fraction of Rows': 'Sum as Fraction of Rows',
            'Sum as Fraction of Columns': 'Sum as Fraction of Columns',
            'Count as Fraction of Total': 'Count as Fraction of Total',
            'Count as Fraction of Rows': 'Count as Fraction of Rows',
            'Count as Fraction of Columns': 'Count as Fraction of Columns'
          }
        },
        ko: {
          renderError: '피벗 테이블 결과를 렌더링하는 동안 오류가 발생 했습니다.',
          computeError: '피벗 테이블 결과를 계산하는 동안 오류가 발생 했습니다.',
          uiRenderError: '피벗 테이블 UI를 렌더링하는 동안 오류가 발생 했습니다.',
          selectAll: '모두 선택',
          selectNone: '선택 안함',
          tooMany: '표시 할 값이 너무 많습니다.',
          filterResults: '값 필터링',
          totals: '합계',
          only: '단독',
          rendererMap: {
            Table: '테이블',
            'Table Heatmap': '테이블 히트맵',
            'Table Col Heatmap': '테이블 열 히트맵',
            'Table Row Heatmap': '테이블 행 히트맵',
            'Export Table TSV': '테이블 TSV로 내보내기',
            'Grouped Column Chart': '그룹화된 차트',
            'Stacked Column Chart': '누적 차트',
            'Grouped Bar Chart': '그룹화된 막대형 차트',
            'Stacked Bar Chart': '누적 막대형 차트',
            'Line Chart': '라인 차트',
            'Dot Chart': '도트 차트',
            'Area Chart': '영역 차트',
            'Scatter Chart': '분산형 차트',
            'Multiple Pie Chart': '다중 원형 차트'
          },
          aggregatorMap: {
            Count: '개수',
            'Count Unique Values': '고유 값 개수',
            'List Unique Values': '고유 값 목록',
            Sum: '합계',
            'Integer Sum': '정수 합계',
            Average: '평균',
            Median: '중앙',
            'Sample Variance': '표본 분산',
            'Sample Standard Deviation': '샘플 표준 편차',
            Minimum: '최소',
            Maximum: '최대',
            First: '첫 번째',
            Last: '마지막',
            'Sum over Sum': '누적 합계',
            'Sum as Fraction of Total': '부분별 비율 합계',
            'Sum as Fraction of Rows': '행별 비율 합계',
            'Sum as Fraction of Columns': '열별 비율 합계',
            'Count as Fraction of Total': '전체 중 부분 개수',
            'Count as Fraction of Rows': '행 부분 개수',
            'Count as Fraction of Columns': '열 부분 개수'
          }
        }
      },
      locale: 'en'
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
        'Day of Week': PivotUtilities.sortAs(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
      }
    },
    unusedAttrs () {
      return this.config.unusedAttrs
    },
    aggregators () {
      const usFmt = PivotUtilities.numberFormat()
      // const usFmtInt = PivotUtilities.numberFormat({ digitsAfterDecimal: 0 })
      // const usFmtPct = PivotUtilities.numberFormat({
      //   digitsAfterDecimal: 1,
      //   scaler: 100,
      //   suffix: '%'
      // })

      return ((tpl) => ({
        // 'Count': tpl.count(usFmtInt),
        // 'Count Unique Values': tpl.countUnique(usFmtInt),
        // 'List Unique Values': tpl.listUnique(', '),
        Sum: tpl.sum(usFmt)
        // 'Integer Sum': tpl.sum(usFmtInt),
        // 'Average': tpl.average(usFmt),
        // 'Median': tpl.median(usFmt),
        // 'Sample Variance': tpl.var(1, usFmt),
        // 'Sample Standard Deviation': tpl.stdev(1, usFmt),
        // 'Minimum': tpl.min(usFmt),
        // 'Maximum': tpl.max(usFmt),
        // 'First': tpl.first(usFmt),
        // 'Last': tpl.last(usFmt),
        // 'Sum over Sum': tpl.sumOverSum(usFmt),
        // 'Sum as Fraction of Total': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
        // 'Sum as Fraction of Rows': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
        // 'Sum as Fraction of Columns': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
        // 'Count as Fraction of Total': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
        // 'Count as Fraction of Rows': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
        // 'Count as Fraction of Columns': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
      })
      )(PivotUtilities.aggregatorTemplates)
    },
    renderers () {
      const TableRenderer = Renderer.TableRenderer
      // const PlotlyRenderer = Renderer.PlotlyRenderer
      return (() => ({
        'Table': TableRenderer.Table,
        'Table Heatmap': TableRenderer['Table Heatmap'],
        'Table Col Heatmap': TableRenderer['Table Col Heatmap'],
        'Table Row Heatmap': TableRenderer['Table Row Heatmap'],
        'Export Table TSV': TableRenderer['Export Table TSV']
        // 'Grouped Column Chart': PlotlyRenderer['Grouped Column Chart'],
        // 'Stacked Column Chart': PlotlyRenderer['Stacked Column Chart'],
        // 'Grouped Bar Chart': PlotlyRenderer['Grouped Bar Chart'],
        // 'Stacked Bar Chart': PlotlyRenderer['Stacked Bar Chart'],
        // 'Line Chart': PlotlyRenderer['Line Chart'],
        // 'Dot Chart': PlotlyRenderer['Dot Chart'],
        // 'Area Chart': PlotlyRenderer['Area Chart'],
        // 'Scatter Chart': PlotlyRenderer['Scatter Chart'],
        // 'Multiple Pie Chart': PlotlyRenderer['Multiple Pie Chart']
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
    }
  },
  watch: {
    config: {
      handler (value, oldValue) {
        const PivotData = PivotUtilities.PivotData
        if (value.cols.indexOf('Unused 1') > -1 || value.rows.indexOf('Unused 1') > -1) {
          this.data = tips2
          this.filteredData = new PivotData(value).getFilteredData()
        } else {
          this.data = tips
          this.filteredData = new PivotData(value).getFilteredData()
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
