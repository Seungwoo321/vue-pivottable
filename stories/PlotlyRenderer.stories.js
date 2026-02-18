import VuePivottable from '../src/Pivottable'
import PlotlyRenderers from '../packages/plotly-renderer/src'
import TableRenderers from '../src/TableRenderer'
import { aggregators } from '../src/helper/utils'

const sampleData = [
  { region: 'East', product: 'Apple', year: '2023', quarter: 'Q1', sales: 100, quantity: 10 },
  { region: 'East', product: 'Apple', year: '2023', quarter: 'Q2', sales: 110, quantity: 11 },
  { region: 'East', product: 'Apple', year: '2023', quarter: 'Q3', sales: 105, quantity: 10 },
  { region: 'East', product: 'Apple', year: '2023', quarter: 'Q4', sales: 120, quantity: 12 },
  { region: 'East', product: 'Banana', year: '2023', quarter: 'Q1', sales: 80, quantity: 20 },
  { region: 'East', product: 'Banana', year: '2023', quarter: 'Q2', sales: 85, quantity: 21 },
  { region: 'East', product: 'Banana', year: '2023', quarter: 'Q3', sales: 88, quantity: 22 },
  { region: 'East', product: 'Banana', year: '2023', quarter: 'Q4', sales: 90, quantity: 22 },
  { region: 'West', product: 'Apple', year: '2023', quarter: 'Q1', sales: 150, quantity: 15 },
  { region: 'West', product: 'Apple', year: '2023', quarter: 'Q2', sales: 160, quantity: 16 },
  { region: 'West', product: 'Apple', year: '2023', quarter: 'Q3', sales: 170, quantity: 17 },
  { region: 'West', product: 'Apple', year: '2023', quarter: 'Q4', sales: 180, quantity: 18 },
  { region: 'West', product: 'Banana', year: '2023', quarter: 'Q1', sales: 70, quantity: 18 },
  { region: 'West', product: 'Banana', year: '2023', quarter: 'Q2', sales: 75, quantity: 19 },
  { region: 'West', product: 'Banana', year: '2023', quarter: 'Q3', sales: 80, quantity: 20 },
  { region: 'West', product: 'Banana', year: '2023', quarter: 'Q4', sales: 85, quantity: 21 },
  { region: 'North', product: 'Apple', year: '2023', quarter: 'Q1', sales: 130, quantity: 13 },
  { region: 'North', product: 'Apple', year: '2023', quarter: 'Q2', sales: 135, quantity: 13 },
  { region: 'North', product: 'Apple', year: '2023', quarter: 'Q3', sales: 138, quantity: 14 },
  { region: 'North', product: 'Apple', year: '2023', quarter: 'Q4', sales: 140, quantity: 14 },
  { region: 'North', product: 'Banana', year: '2023', quarter: 'Q1', sales: 60, quantity: 15 },
  { region: 'North', product: 'Banana', year: '2023', quarter: 'Q2', sales: 65, quantity: 16 },
  { region: 'North', product: 'Banana', year: '2023', quarter: 'Q3', sales: 70, quantity: 17 },
  { region: 'North', product: 'Banana', year: '2023', quarter: 'Q4', sales: 75, quantity: 19 },
  { region: 'South', product: 'Apple', year: '2023', quarter: 'Q1', sales: 110, quantity: 11 },
  { region: 'South', product: 'Apple', year: '2023', quarter: 'Q2', sales: 115, quantity: 12 },
  { region: 'South', product: 'Apple', year: '2023', quarter: 'Q3', sales: 120, quantity: 12 },
  { region: 'South', product: 'Apple', year: '2023', quarter: 'Q4', sales: 125, quantity: 13 },
  { region: 'South', product: 'Banana', year: '2023', quarter: 'Q1', sales: 95, quantity: 24 },
  { region: 'South', product: 'Banana', year: '2023', quarter: 'Q2', sales: 98, quantity: 25 },
  { region: 'South', product: 'Banana', year: '2023', quarter: 'Q3', sales: 102, quantity: 25 },
  { region: 'South', product: 'Banana', year: '2023', quarter: 'Q4', sales: 105, quantity: 26 }
]

const combinedRenderers = {
  ...TableRenderers,
  ...PlotlyRenderers
}

export default {
  title: 'Renderers/PlotlyRenderer',
  component: VuePivottable,
  tags: ['autodocs'],
  argTypes: {
    rendererName: {
      control: 'select',
      options: Object.keys(combinedRenderers)
    },
    aggregatorName: {
      control: 'select',
      options: Object.keys(aggregators)
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
**vue-pivottable-plotly-renderer**

Plotly.js-based chart renderers for vue-pivottable.
Provides various chart types including bar charts, line charts, scatter plots, and pie charts.

### Installation
\`\`\`bash
pnpm add vue-pivottable-plotly-renderer
\`\`\`

### Usage
\`\`\`javascript
import PlotlyRenderers from 'vue-pivottable-plotly-renderer'
import TableRenderers from 'vue-pivottable/TableRenderer'

const renderers = { ...TableRenderers, ...PlotlyRenderers }
\`\`\`

### Available Renderers
- Grouped Column Chart
- Stacked Column Chart
- Grouped Bar Chart
- Stacked Bar Chart
- Line Chart
- Dot Chart
- Area Chart
- Scatter Chart
- Multiple Pie Chart
        `
      }
    }
  }
}

export const GroupedColumnChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Grouped Column Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Grouped column chart comparing sales by region and product.'
      }
    }
  }
}

export const StackedColumnChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Stacked Column Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Stacked column chart showing sales composition by region.'
      }
    }
  }
}

export const GroupedBarChart = {
  args: {
    data: sampleData,
    rows: ['product'],
    cols: ['region'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Grouped Bar Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal grouped bar chart. Useful when category labels are long.'
      }
    }
  }
}

export const StackedBarChart = {
  args: {
    data: sampleData,
    rows: ['product'],
    cols: ['region'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Stacked Bar Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stacked bar chart showing proportion of sales by product across regions.'
      }
    }
  }
}

export const LineChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['quarter'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Line Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Line chart showing sales trends across quarters for each region.'
      }
    }
  }
}

export const AreaChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['quarter'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Area Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Stacked area chart showing cumulative sales trend over time.'
      }
    }
  }
}

export const DotChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['quantity'],
    aggregatorName: 'Average',
    rendererName: 'Dot Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Dot chart (Cleveland dot plot) showing average quantities. Good for comparing discrete values.'
      }
    }
  }
}

export const ScatterChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Scatter Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter chart plotting data points. The marker size/color can indicate the aggregated value.'
      }
    }
  }
}

export const MultiplePieChart = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Multiple Pie Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple pie charts, one for each row category. Shows proportion breakdown within each region.'
      }
    }
  }
}

export const WithPlotlyOptions = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['quarter'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Line Chart',
    renderers: combinedRenderers,
    aggregators,
    plotlyOptions: {
      title: 'Custom Title: Quarterly Sales by Region',
      showlegend: true,
      legend: {
        orientation: 'h',
        y: -0.2
      },
      xaxis: {
        title: 'Quarter'
      },
      yaxis: {
        title: 'Sales Amount ($)'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Customize Plotly layout using \`plotlyOptions\` prop. You can set:
- Chart title
- Legend position and orientation
- Axis titles and formatting
- Any valid Plotly layout option`
      }
    }
  }
}

export const AverageAggregation = {
  args: {
    data: sampleData,
    rows: ['product'],
    cols: ['region'],
    vals: ['quantity'],
    aggregatorName: 'Average',
    rendererName: 'Grouped Column Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Using Average aggregation to show average quantity per product across regions.'
      }
    }
  }
}

export const CountAggregation = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Count',
    rendererName: 'Stacked Column Chart',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Count aggregation showing the number of records for each region/product combination.'
      }
    }
  }
}
