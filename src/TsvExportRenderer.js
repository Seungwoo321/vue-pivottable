import { PivotData } from './helper/utils'
export default {
  name: 'tsv-export-renderers',
  render (h) {
    const pivotData = new PivotData()
    const rowKeys = pivotData.getRowKeys()
    const colKeys = pivotData.getColKeys()
    if (rowKeys.length === 0) {
      rowKeys.push([])
    }
    if (colKeys.length === 0) {
      colKeys.push([])
    }

    const headerRow = pivotData.props.rows.map(r => r)
    if (colKeys.length === 1 && colKeys[0].length === 0) {
      headerRow.push(this.props.aggregatorName)
    } else {
      colKeys.map(c => headerRow.push(c.join('-')))
    }

    const result = rowKeys.map(r => {
      const row = r.map(x => x)
      colKeys.map(c => {
        const v = pivotData.getAggregator(r, c).value()
        row.push(v || '')
      })
      return row
    })

    result.unshift(headerRow)

    return h('textarea', {
      style: {
        width: window.innerWidth / 2,
        height: window.innerHeight / 2
      },
      attrs: {
        value: result.map(r => r.join('\t')).join('\n'),
        readOnly: true
      }
    })
  }
}
