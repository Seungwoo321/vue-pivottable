import VuePivottableUi from '../src/PivottableUi'
import { aggregators } from '../src/helper/utils'

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
  { region: 'North', product: 'Banana', category: 'Fruit', year: '2024', sales: 75, quantity: 19 }
]

export default {
  title: 'Components/VuePivottableUi',
  component: VuePivottableUi,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    aggregatorName: {
      control: 'select',
      options: Object.keys(aggregators)
    }
  }
}

export const Default = {
  args: {
    data: sampleData
  }
}

export const WithInitialConfig = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Sum',
    vals: ['sales']
  }
}

export const WithHiddenAttributes = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    hiddenAttributes: ['year'],
    aggregatorName: 'Count'
  }
}

export const WithHiddenFromDragDrop = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    hiddenFromDragDrop: ['category'],
    aggregatorName: 'Count'
  }
}

export const DisabledRenderers = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    disabledFromDragDrop: ['year', 'category'],
    aggregatorName: 'Count'
  }
}

export const ReadOnly = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    vals: ['sales'],
    aggregatorName: 'Sum',
    disabledFromDragDrop: ['region', 'product', 'category', 'year', 'sales', 'quantity']
  }
}

export const WithMenuLimit = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Count',
    menuLimit: 3
  }
}

export const AsyncMode = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Count',
    async: true
  }
}

export const WithValueFilter = {
  args: {
    data: sampleData,
    rows: ['region'],
    cols: ['product'],
    aggregatorName: 'Sum',
    vals: ['sales'],
    valueFilter: {
      region: { East: true }
    }
  }
}

/**
 * Using config prop for v-model support.
 * The config prop allows you to save and restore the entire pivot table state.
 * This is useful for persisting user configurations.
 */
export const WithConfigProp = {
  args: {
    data: sampleData,
    config: {
      rows: ['region'],
      cols: ['product'],
      vals: ['sales'],
      aggregatorName: 'Sum',
      rendererName: 'Table',
      rowOrder: 'key_a_to_z',
      colOrder: 'key_a_to_z'
    }
  }
}

/**
 * Config prop with valueFilter.
 * Demonstrates filtering out specific values using the config prop.
 */
export const ConfigWithValueFilter = {
  args: {
    data: sampleData,
    config: {
      rows: ['region'],
      cols: ['product'],
      vals: ['sales'],
      aggregatorName: 'Sum',
      valueFilter: {
        region: { North: true }
      }
    }
  }
}

/**
 * Config prop takes precedence over individual props.
 * When both config and individual props are provided, config values win.
 */
export const ConfigPrecedence = {
  args: {
    data: sampleData,
    // These individual props will be overridden by config
    rows: ['category'],
    cols: ['year'],
    aggregatorName: 'Count',
    // Config values take precedence
    config: {
      rows: ['region'],
      cols: ['product'],
      aggregatorName: 'Sum',
      vals: ['sales']
    }
  }
}
