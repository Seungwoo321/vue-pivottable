import VuePivottable from '../src/Pivottable'
import { aggregators } from '../src/helper/utils'

const sampleData = [
  { region: 'East', product: 'Apple', year: '2023', sales: 100, quantity: 10 },
  { region: 'East', product: 'Apple', year: '2024', sales: 120, quantity: 12 },
  { region: 'East', product: 'Banana', year: '2023', sales: 80, quantity: 20 },
  { region: 'East', product: 'Banana', year: '2024', sales: 90, quantity: 22 },
  { region: 'West', product: 'Apple', year: '2023', sales: 150, quantity: 15 },
  { region: 'West', product: 'Apple', year: '2024', sales: 180, quantity: 18 },
  { region: 'West', product: 'Banana', year: '2023', sales: 70, quantity: 18 },
  { region: 'West', product: 'Banana', year: '2024', sales: 85, quantity: 21 },
  { region: 'North', product: 'Apple', year: '2023', sales: 130, quantity: 13 },
  { region: 'North', product: 'Apple', year: '2024', sales: 140, quantity: 14 },
  { region: 'North', product: 'Banana', year: '2023', sales: 60, quantity: 15 },
  { region: 'North', product: 'Banana', year: '2024', sales: 75, quantity: 19 },
  { region: 'South', product: 'Apple', year: '2023', sales: 110, quantity: 11 },
  { region: 'South', product: 'Apple', year: '2024', sales: 125, quantity: 13 },
  { region: 'South', product: 'Banana', year: '2023', sales: 95, quantity: 24 },
  { region: 'South', product: 'Banana', year: '2024', sales: 105, quantity: 26 }
]

export default {
  title: 'Components/VuePivottable',
  component: VuePivottable,
  tags: ['autodocs'],
  argTypes: {
    aggregatorName: {
      control: 'select',
      options: Object.keys(aggregators)
    },
    rendererName: {
      control: 'select',
      options: ['Table', 'Table Heatmap', 'Table Col Heatmap', 'Table Row Heatmap', 'Export Table TSV']
    }
  }
}

export const Default = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Count',
    rendererName: 'Table'
  }
}

export const SumAggregation = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table'
  }
}

export const AverageAggregation = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Average',
    rendererName: 'Table'
  }
}

export const MultipleRows = {
  args: {
    data: sampleData,
    rows: ['region', 'product'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table'
  }
}

export const Heatmap = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table Heatmap'
  }
}

export const RowHeatmap = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table Row Heatmap'
  }
}

export const ColHeatmap = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table Col Heatmap'
  }
}

export const NoTotals = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Count',
    rendererName: 'Table',
    rowTotal: false,
    colTotal: false
  }
}

export const TSVExport = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Export Table TSV'
  }
}

export const WithMaxWidth = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product', 'year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table',
    tableMaxWidth: 400
  }
}

export const ClickCallback = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table',
    tableOptions: {
      clickCallback: (e, value, filters, pivotData) => {
        alert(`Clicked cell with value: ${value}\nFilters: ${JSON.stringify(filters)}`)
      }
    }
  }
}

export const CustomLabels = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table',
    labels: {
      region: (val) => {
        const regionLabels = {
          East: '동부',
          West: '서부',
          North: '북부',
          South: '남부'
        }
        return regionLabels[val] || val
      },
      product: (val) => {
        const productLabels = {
          Apple: '사과',
          Banana: '바나나'
        }
        return productLabels[val] || val
      }
    }
  }
}

export const LabelsWithMultipleRowsCols = {
  args: {
    data: sampleData,
    rows: ['region', 'product'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Table',
    labels: {
      region: (val) => `Region: ${val}`,
      product: (val) => `Product: ${val}`,
      year: (val) => `FY${val}`
    }
  }
}
