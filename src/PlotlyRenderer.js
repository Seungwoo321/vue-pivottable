import { PivotData } from './helper/utils'
import defaultProps from './helper/common'
import { Plotly } from 'vue-plotly'
function makeRenderer (opts = {}, traceOptions = {}, layoutOptions = {}, transpose = false) {
  const plotlyRenderer = {
    name: opts.name,
    mixins: [defaultProps],
    props: {
      plotlyOptions: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    render (h) {
      const pivotData = new PivotData(this.$props)
      const rowKeys = pivotData.getRowKeys()
      const colKeys = pivotData.getColKeys()
      const traceKeys = transpose ? colKeys : rowKeys
      if (traceKeys.length === 0) traceKeys.push([])
      const datumKeys = transpose ? rowKeys : colKeys
      if (datumKeys.length === 0) datumKeys.push([])

      let fullAggName = this.$props.aggregatorName
      const numInputs = this.$props.aggregators[fullAggName]([])().numInputs || 0
      if (numInputs !== 0) {
        fullAggName += ` of ${this.$props.vals.slice(0, numInputs).join(', ')}`
      }
      const data = traceKeys.map(traceKey => {
        const values = []
        const labels = []
        for (const datumKey of datumKeys) {
          const val = parseFloat(
            pivotData.getAggregator(
              transpose ? datumKey : traceKey,
              transpose ? traceKey : datumKey
            ).value()
          )
          values.push(isFinite(val) ? val : null)
          labels.push(datumKey.join('-') || ' ')
        }
        const trace = { name: traceKey.join('-') || fullAggName }
        if (traceOptions.type === 'pie') {
          trace.values = values
          trace.labels = labels.length > 1 ? labels : [fullAggName]
        } else {
          trace.x = transpose ? values : labels
          trace.y = transpose ? labels : values
        }
        return Object.assign(trace, traceOptions)
      })

      let titleText = fullAggName
      const hAxisTitle = transpose ? this.$props.rows.join('-') : this.$props.cols.join('-')
      const groupByTitle = transpose ? this.$props.cols.join('-') : this.$props.rows.join('-')
      if (hAxisTitle !== '') titleText += ` vs ${hAxisTitle}`
      if (groupByTitle !== '') titleText += ` by ${groupByTitle}`

      const layout = {
        title: titleText,
        hovermode: 'closest',
        width: window.innerWidth / 1.5,
        height: window.innerHeight / 1.4 - 50
      }

      if (traceOptions.type === 'pie') {
        const columns = Math.ceil(Math.sqrt(data.length))
        const rows = Math.ceil(data.length / columns)
        layout.grid = { columns, rows }
        data.forEach((d, i) => {
          d.domain = {
            row: Math.floor(i / columns),
            column: i - columns * Math.floor(i / columns)
          }
          if (data.length > 1) {
            d.title = d.name
          }
        })
        if (data[0].labels.length === 1) {
          layout.showlegend = false
        }
      } else {
        layout.xaxis = {
          title: transpose ? fullAggName : null,
          automargin: true
        }
        layout.yaxis = {
          title: transpose ? null : fullAggName,
          automargin: true
        }
      }

      return h(Plotly, {
        props: {
          data,
          layout: {
            ...layout,
            ...layoutOptions,
            ...this.$props.plotlyOptions
          }
        }
      })
    }
  }
  return plotlyRenderer
}
function makeScatterRenderer (opts = {}) {
  const scatterRenderer = {
    name: opts.name,
    mixins: [defaultProps],
    props: {
      plotlyOptions: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    render (h) {
      const pivotData = new PivotData(this.$props)
      const rowKeys = pivotData.getRowKeys()
      const colKeys = pivotData.getColKeys()
      if (rowKeys.length === 0) rowKeys.push([])
      if (colKeys.length === 0) colKeys.push([])

      const data = { x: [], y: [], text: [], type: 'scatter', mode: 'markers' }
      rowKeys.map(rowKey => {
        colKeys.map(colKey => {
          const v = pivotData.getAggregator(rowKey, colKey).value()
          if (v !== null) {
            data.x.push(colKey.join('-'))
            data.y.push(rowKey.join('-'))
            data.text.push(v)
          }
        })
      })

      const layout = {
        title: this.$props.rows.join('-') + ' vs ' + this.$props.cols.join('-'),
        hovermode: 'closest',
        xaxis: { title: this.$props.cols.join('-'), automargin: true },
        yaxis: { title: this.$props.rows.join('-'), automargin: true },
        width: window.innerWidth / 1.5,
        height: window.innerHeight / 1.4 - 50
      }

      return h(Plotly, {
        props: {
          data: [data],
          layout: {
            ...layout,
            ...this.$props.plotlyOptions
          }
        }
      })
    }
  }
  return scatterRenderer
}

export default {
  'Grouped Column Chart': makeRenderer({ name: 'vue-grouped-column-chart' }, { type: 'bar' }, { barmode: 'group' }),
  'Stacked Column Chart': makeRenderer({ name: 'vue-stacked-column-chart' }, { type: 'bar' }, { barmode: 'relative' }),
  'Grouped Bar Chart': makeRenderer({ name: 'groupd-bar-chart' }, { type: 'bar', orientation: 'h' }, { barmode: 'group' }, true),
  'Stacked Bar Chart': makeRenderer({ name: 'vue-stacked-bar-chart' }, { type: 'bar', orientation: 'h' }, { barmode: 'relative' }, true),
  'Line Chart': makeRenderer({ name: 'vue-line-chart' }),
  'Dot Chart': makeRenderer({ name: 'vue-dot-chart' }, { mode: 'markers' }, {}, true),
  'Area Chart': makeRenderer({ name: 'vue-area-chart' }, { stackgroup: 1 }),
  'Scatter Chart': makeScatterRenderer({ name: 'vue-scatter-chart' }),
  'Multiple Pie Chart': makeRenderer({ name: 'vue-multiple-pie-chart' }, { type: 'pie', scalegroup: 1, hoverinfo: 'label+value', textinfo: 'none' }, {}, true)
}
