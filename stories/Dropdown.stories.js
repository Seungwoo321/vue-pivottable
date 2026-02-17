import Dropdown from '../src/Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select'
    }
  }
}

export const Default = {
  args: {
    values: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1'
  }
}

export const Aggregators = {
  args: {
    values: ['Count', 'Sum', 'Average', 'Minimum', 'Maximum', 'Median'],
    value: 'Count'
  }
}

export const Renderers = {
  args: {
    values: ['Table', 'Table Heatmap', 'Table Col Heatmap', 'Table Row Heatmap'],
    value: 'Table'
  }
}

export const ManyOptions = {
  args: {
    values: Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`),
    value: 'Option 1'
  }
}
