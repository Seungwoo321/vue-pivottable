import VuePivottable from '../src/Pivottable'
import { MultiValueRenderers } from '@vue-pivottable/multi-value-renderer/vue2'
import TableRenderers from '../src/TableRenderer'
import { aggregators } from '../src/helper/utils'

const sampleData = [
  { region: 'East', product: 'Apple', year: '2023', sales: 100, quantity: 10, profit: 25 },
  { region: 'East', product: 'Apple', year: '2024', sales: 120, quantity: 12, profit: 30 },
  { region: 'East', product: 'Banana', year: '2023', sales: 80, quantity: 20, profit: 16 },
  { region: 'East', product: 'Banana', year: '2024', sales: 90, quantity: 22, profit: 18 },
  { region: 'West', product: 'Apple', year: '2023', sales: 150, quantity: 15, profit: 38 },
  { region: 'West', product: 'Apple', year: '2024', sales: 180, quantity: 18, profit: 45 },
  { region: 'West', product: 'Banana', year: '2023', sales: 70, quantity: 18, profit: 14 },
  { region: 'West', product: 'Banana', year: '2024', sales: 85, quantity: 21, profit: 17 },
  { region: 'North', product: 'Apple', year: '2023', sales: 130, quantity: 13, profit: 32 },
  { region: 'North', product: 'Apple', year: '2024', sales: 140, quantity: 14, profit: 35 },
  { region: 'North', product: 'Banana', year: '2023', sales: 60, quantity: 15, profit: 12 },
  { region: 'North', product: 'Banana', year: '2024', sales: 75, quantity: 19, profit: 15 },
  { region: 'South', product: 'Apple', year: '2023', sales: 110, quantity: 11, profit: 28 },
  { region: 'South', product: 'Apple', year: '2024', sales: 125, quantity: 13, profit: 31 },
  { region: 'South', product: 'Banana', year: '2023', sales: 95, quantity: 24, profit: 19 },
  { region: 'South', product: 'Banana', year: '2024', sales: 105, quantity: 26, profit: 21 }
]

const combinedRenderers = {
  ...TableRenderers,
  ...MultiValueRenderers
}

export default {
  title: 'Renderers/MultiValueRenderer',
  component: VuePivottable,
  tags: ['autodocs'],
  argTypes: {
    rendererName: {
      control: 'select',
      options: Object.keys(combinedRenderers)
    },
    cellLayout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'compact']
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
**@vue-pivottable/multi-value-renderer**

A specialized renderer for vue-pivottable that displays multiple aggregated values per cell.
Each value can use a different aggregator function.

### Installation
\`\`\`bash
pnpm add @vue-pivottable/multi-value-renderer
\`\`\`

### Usage with Vue 2
\`\`\`javascript
import { MultiValueRenderers } from '@vue-pivottable/multi-value-renderer/vue2'
import TableRenderers from 'vue-pivottable/TableRenderer'

const renderers = { ...TableRenderers, ...MultiValueRenderers }
\`\`\`

### Key Features
- Display multiple values per cell (e.g., sales and quantity)
- Each value can use a different aggregator (Sum, Average, Count, etc.)
- Flexible cell layouts: vertical, horizontal, compact
- Custom value labels
        `
      }
    }
  }
}

export const Default = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic multi-value table showing both sales and quantity in each cell using Sum aggregation.'
      }
    }
  }
}

export const WithAggregatorMap = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    aggregatorMap: {
      sales: 'Sum',
      quantity: 'Average'
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Use \`aggregatorMap\` to apply different aggregators to each value column:
- sales: Sum (total sales)
- quantity: Average (average quantity per record)`
      }
    }
  }
}

export const ThreeValues = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['year'],
    vals: ['sales', 'quantity', 'profit'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    aggregatorMap: {
      sales: 'Sum',
      quantity: 'Sum',
      profit: 'Sum'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Display three values (sales, quantity, profit) in each cell.'
      }
    }
  }
}

export const HorizontalLayout = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    cellLayout: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal cell layout arranges multiple values side by side within each cell.'
      }
    }
  }
}

export const CompactLayout = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    cellLayout: 'compact'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact layout minimizes space usage for cells with multiple values.'
      }
    }
  }
}

export const WithValueLabels = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity', 'profit'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    showValueLabels: true,
    valueLabels: {
      sales: 'Sales ($)',
      quantity: 'Qty',
      profit: 'Profit ($)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Show custom labels for each value column using `valueLabels` prop.'
      }
    }
  }
}

export const MixedAggregations = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['year'],
    vals: ['sales', 'quantity', 'profit'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    aggregatorMap: {
      sales: 'Sum',
      quantity: 'Average',
      profit: 'Maximum'
    },
    showValueLabels: true,
    valueLabels: {
      sales: 'Total Sales',
      quantity: 'Avg Qty',
      profit: 'Max Profit'
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Complex example with mixed aggregations:
- sales: Sum (total)
- quantity: Average
- profit: Maximum value`
      }
    }
  }
}

export const WithClickCallback = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
    tableOptions: {
      clickCallback: (e, value, filters, pivotData) => {
        alert(`Clicked cell\nValues: ${JSON.stringify(value)}\nFilters: ${JSON.stringify(filters)}`)
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Cells are clickable with `tableOptions.clickCallback`. The callback receives all values in the cell.'
      }
    }
  }
}

export const WithCustomLabels = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales', 'quantity'],
    aggregatorName: 'Sum',
    rendererName: 'Multi-Value Table',
    renderers: combinedRenderers,
    aggregators,
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `labels` prop to transform row/column header values for internationalization.'
      }
    }
  }
}
