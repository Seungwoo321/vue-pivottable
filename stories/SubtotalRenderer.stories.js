import VuePivottable from '../src/Pivottable'
import { createSubtotalRenderers } from '@vue-pivottable/subtotal-renderer/vue2'
import TableRenderers from '../src/TableRenderer'
import { PivotData } from '../src/helper/utils'

// Initialize SubtotalRenderers with PivotData
const SubtotalRenderers = createSubtotalRenderers(PivotData)

const sampleData = [
  { region: 'East', product: 'Apple', category: 'Fruit', year: '2023', sales: 100, quantity: 10 },
  { region: 'East', product: 'Apple', category: 'Fruit', year: '2024', sales: 120, quantity: 12 },
  { region: 'East', product: 'Banana', category: 'Fruit', year: '2023', sales: 80, quantity: 20 },
  { region: 'East', product: 'Banana', category: 'Fruit', year: '2024', sales: 90, quantity: 22 },
  { region: 'East', product: 'Carrot', category: 'Vegetable', year: '2023', sales: 50, quantity: 25 },
  { region: 'East', product: 'Carrot', category: 'Vegetable', year: '2024', sales: 55, quantity: 28 },
  { region: 'West', product: 'Apple', category: 'Fruit', year: '2023', sales: 150, quantity: 15 },
  { region: 'West', product: 'Apple', category: 'Fruit', year: '2024', sales: 180, quantity: 18 },
  { region: 'West', product: 'Banana', category: 'Fruit', year: '2023', sales: 70, quantity: 18 },
  { region: 'West', product: 'Banana', category: 'Fruit', year: '2024', sales: 85, quantity: 21 },
  { region: 'West', product: 'Carrot', category: 'Vegetable', year: '2023', sales: 45, quantity: 22 },
  { region: 'West', product: 'Carrot', category: 'Vegetable', year: '2024', sales: 52, quantity: 26 },
  { region: 'North', product: 'Apple', category: 'Fruit', year: '2023', sales: 130, quantity: 13 },
  { region: 'North', product: 'Apple', category: 'Fruit', year: '2024', sales: 140, quantity: 14 },
  { region: 'North', product: 'Banana', category: 'Fruit', year: '2023', sales: 60, quantity: 15 },
  { region: 'North', product: 'Banana', category: 'Fruit', year: '2024', sales: 75, quantity: 19 },
  { region: 'North', product: 'Carrot', category: 'Vegetable', year: '2023', sales: 40, quantity: 20 },
  { region: 'North', product: 'Carrot', category: 'Vegetable', year: '2024', sales: 48, quantity: 24 }
]

const combinedRenderers = {
  ...TableRenderers,
  ...SubtotalRenderers
}

export default {
  title: 'Renderers/SubtotalRenderer',
  component: VuePivottable,
  tags: ['autodocs'],
  argTypes: {
    rendererName: {
      control: 'select',
      options: Object.keys(combinedRenderers)
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
**@vue-pivottable/subtotal-renderer**

A specialized renderer for vue-pivottable that displays subtotals with expand/collapse functionality.
This renderer supports hierarchical data grouping with collapsible rows and columns.

### Installation
\`\`\`bash
pnpm add @vue-pivottable/subtotal-renderer
\`\`\`

### Usage with Vue 2
\`\`\`javascript
import { createSubtotalRenderers } from '@vue-pivottable/subtotal-renderer/vue2'
import TableRenderers from 'vue-pivottable/TableRenderer'
import { PivotData } from 'vue-pivottable'

const SubtotalRenderers = createSubtotalRenderers(PivotData)
const renderers = { ...TableRenderers, ...SubtotalRenderers }
\`\`\`
        `
      }
    }
  }
}

export const Default = {
  args: {
    data: sampleData,
    rows: ['region', 'category'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Subtotal Table',
    renderers: combinedRenderers
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic subtotal table with hierarchical rows (region > category). Click on the arrows to expand/collapse groups.'
      }
    }
  }
}

export const MultiLevelRows = {
  args: {
    data: sampleData,
    rows: ['region', 'category', 'product'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Subtotal Table',
    renderers: combinedRenderers
  },
  parameters: {
    docs: {
      description: {
        story: 'Three-level row hierarchy (region > category > product) with subtotals at each level.'
      }
    }
  }
}

export const MultiLevelColumns = {
  args: {
    data: sampleData,
    rows: ['product'],
    cols: ['region', 'year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Subtotal Table',
    renderers: combinedRenderers
  },
  parameters: {
    docs: {
      description: {
        story: 'Two-level column hierarchy (region > year) with column subtotals.'
      }
    }
  }
}

export const WithSubtotalOptions = {
  args: {
    data: sampleData,
    rows: ['region', 'category'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Subtotal Table',
    renderers: combinedRenderers,
    subtotalOptions: {
      rowSubtotalDisplay: {
        displayOnTop: true,
        enabled: true,
        hideOnExpand: false
      },
      colSubtotalDisplay: {
        displayOnTop: false,
        enabled: true
      },
      arrowCollapsed: '▶',
      arrowExpanded: '▼'
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Configure subtotal display with \`subtotalOptions\`:
- \`displayOnTop\`: Show subtotals at the top of the group
- \`enabled\`: Enable/disable subtotals
- \`hideOnExpand\`: Hide subtotals when group is expanded
- \`arrowCollapsed/arrowExpanded\`: Customize collapse/expand arrows`
      }
    }
  }
}

export const SubtotalsOnTop = {
  args: {
    data: sampleData,
    rows: ['region', 'category'],
    cols: ['year'],
    vals: ['quantity'],
    aggregatorName: 'Average',
    rendererName: 'Subtotal Table',
    renderers: combinedRenderers,
    subtotalOptions: {
      rowSubtotalDisplay: {
        displayOnTop: true,
        enabled: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtotals displayed at the top of each group instead of the bottom.'
      }
    }
  }
}

export const DisabledSubtotals = {
  args: {
    data: sampleData,
    rows: ['region', 'category'],
    cols: ['year'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    rendererName: 'Subtotal Table',
    renderers: combinedRenderers,
    subtotalOptions: {
      rowSubtotalDisplay: {
        enabled: false
      },
      colSubtotalDisplay: {
        enabled: false
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtotals can be disabled while keeping the expand/collapse functionality.'
      }
    }
  }
}
