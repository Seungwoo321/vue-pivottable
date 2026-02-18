import { describe, it, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Dropdown from '../src/Dropdown'
import DraggableAttribute from '../src/DraggableAttribute'
import TableRenderer from '../src/TableRenderer'
import VuePivottable from '../src/Pivottable'
import VuePivottableUi from '../src/PivottableUi'
import { aggregators } from '../src/helper/utils'

describe('Dropdown', () => {
  it('should render select element', () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        values: ['Option 1', 'Option 2', 'Option 3'],
        value: 'Option 1'
      }
    })
    expect(wrapper.find('select').exists()).toBe(true)
  })

  it('should render all options', () => {
    const values = ['A', 'B', 'C']
    const wrapper = mount(Dropdown, {
      propsData: {
        values,
        value: 'A'
      }
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(3)
  })

  it('should emit input event on change', async () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        values: ['A', 'B', 'C'],
        value: 'A'
      }
    })
    await wrapper.find('select').setValue('B')
    expect(wrapper.emitted('input')).toBeTruthy()
    // First emit is from created hook, second is from change
    const emitted = wrapper.emitted('input')
    expect(emitted[emitted.length - 1]).toEqual(['B'])
  })

  it('should have pvtDropdown class', () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        values: ['A'],
        value: 'A'
      }
    })
    expect(wrapper.find('select').classes()).toContain('pvtDropdown')
  })

  it('should select first value if no value provided', () => {
    const wrapper = mount(Dropdown, {
      propsData: {
        values: ['First', 'Second']
      }
    })
    expect(wrapper.emitted('input')).toBeTruthy()
  })
})

describe('DraggableAttribute', () => {
  const defaultProps = {
    name: 'testAttr',
    sorter: (a, b) => a.localeCompare(b)
  }

  it('should render attribute name', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: defaultProps
    })
    expect(wrapper.text()).toContain('testAttr')
  })

  it('should have pvtAttr class', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: defaultProps
    })
    expect(wrapper.find('.pvtAttr').exists()).toBe(true)
  })

  it('should show filter triangle when not disabled', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: {
        ...defaultProps,
        attrValues: { a: 1, b: 2 }
      }
    })
    expect(wrapper.find('.pvtTriangle').exists()).toBe(true)
  })

  it('should be disabled when sortable and draggable are false', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: {
        ...defaultProps,
        sortable: false,
        draggable: false
      }
    })
    expect(wrapper.find('.disabled').exists()).toBe(true)
  })

  it('should have sortonly class when only sortable', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: {
        ...defaultProps,
        sortable: true,
        draggable: false
      }
    })
    expect(wrapper.find('.sortonly').exists()).toBe(true)
  })

  it('should show filter box when open is true', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: {
        ...defaultProps,
        open: true,
        attrValues: { a: 1, b: 2 }
      }
    })
    expect(wrapper.find('.pvtFilterBox').exists()).toBe(true)
  })

  it('should emit update:filter when toggling value', async () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: {
        ...defaultProps,
        open: true,
        attrValues: { a: 1, b: 2 },
        valueFilter: {},
        menuLimit: 100
      }
    })
    wrapper.vm.toggleValue('a')
    expect(wrapper.emitted('update:filter')).toBeTruthy()
  })

  it('should filter values based on filterText', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: defaultProps
    })
    wrapper.setData({ filterText: 'test' })
    expect(wrapper.vm.matchesFilter('Testing')).toBe(true)
    expect(wrapper.vm.matchesFilter('Other')).toBe(false)
  })

  it('should have pvtFilteredAttribute class when valueFilter is not empty', () => {
    const wrapper = shallowMount(DraggableAttribute, {
      propsData: {
        ...defaultProps,
        valueFilter: { a: true }
      }
    })
    expect(wrapper.find('.pvtFilteredAttribute').exists()).toBe(true)
  })
})

describe('TableRenderer', () => {
  const sampleData = [
    { region: 'East', product: 'A', sales: 100 },
    { region: 'East', product: 'B', sales: 200 },
    { region: 'West', product: 'A', sales: 150 },
    { region: 'West', product: 'B', sales: 250 }
  ]

  const TableComponent = TableRenderer.Table

  it('should render a table', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: [],
        cols: [],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('should have pvtTable class', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: [],
        cols: [],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('table').classes()).toContain('pvtTable')
  })

  it('should render row headers', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: [],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('.pvtAxisLabel').exists()).toBe(true)
  })

  it('should render column headers', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: [],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('.pvtColLabel').exists()).toBe(true)
  })

  it('should render totals when rowTotal is true', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators,
        rowTotal: true
      }
    })
    expect(wrapper.find('.pvtTotalLabel').exists()).toBe(true)
  })

  it('should render data cells', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('.pvVal').exists()).toBe(true)
  })

  it('should call click callback when cell is clicked', async () => {
    const clickCallback = vi.fn()
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators,
        tableOptions: { clickCallback }
      }
    })
    await wrapper.find('.pvVal').trigger('click')
    expect(clickCallback).toHaveBeenCalled()
  })

  it('should apply labels to row values', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators,
        labels: {
          region: (val) => val === 'East' ? 'Eastern' : val
        }
      }
    })
    const rowLabels = wrapper.findAll('.pvtRowLabel')
    const texts = rowLabels.wrappers.map(w => w.text())
    expect(texts).toContain('Eastern')
  })

  it('should apply labels to column values', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators,
        labels: {
          product: (val) => `Product: ${val}`
        }
      }
    })
    const colLabels = wrapper.findAll('.pvtColLabel')
    const texts = colLabels.wrappers.map(w => w.text())
    expect(texts.some(t => t.startsWith('Product:'))).toBe(true)
  })

  it('should not modify values when labels not provided', () => {
    const wrapper = shallowMount(TableComponent, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    const rowLabels = wrapper.findAll('.pvtRowLabel')
    const texts = rowLabels.wrappers.map(w => w.text())
    expect(texts).toContain('East')
    expect(texts).toContain('West')
  })
})

describe('TableRenderer variants', () => {
  const sampleData = [
    { x: 'A', y: 1, value: 10 },
    { x: 'B', y: 2, value: 20 }
  ]

  it('should have Table renderer', () => {
    expect(TableRenderer.Table).toBeDefined()
    expect(TableRenderer.Table.name).toBe('vue-table')
  })

  it('should have Table Heatmap renderer', () => {
    expect(TableRenderer['Table Heatmap']).toBeDefined()
    expect(TableRenderer['Table Heatmap'].name).toBe('vue-table-heatmap')
  })

  it('should have Table Col Heatmap renderer', () => {
    expect(TableRenderer['Table Col Heatmap']).toBeDefined()
  })

  it('should have Table Row Heatmap renderer', () => {
    expect(TableRenderer['Table Row Heatmap']).toBeDefined()
  })

  it('should have Export Table TSV renderer', () => {
    expect(TableRenderer['Export Table TSV']).toBeDefined()
    expect(TableRenderer['Export Table TSV'].name).toBe('tsv-export-renderers')
  })
})

describe('VuePivottable', () => {
  const sampleData = [
    { region: 'East', product: 'A', sales: 100 },
    { region: 'West', product: 'B', sales: 200 }
  ]

  it('should render wrapper container', () => {
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData
      }
    })
    expect(wrapper.find('div').exists()).toBe(true)
  })

  it('should have correct component name', () => {
    expect(VuePivottable.name).toBe('vue-pivottable')
  })

  it('should use default renderer', () => {
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData
      }
    })
    expect(wrapper.vm.rendererItems).toHaveProperty('Table')
  })

  it('should accept custom renderers', () => {
    const customRenderer = { Custom: { name: 'custom', render: () => {} } }
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData,
        renderers: customRenderer
      }
    })
    expect(wrapper.vm.rendererItems).toEqual(customRenderer)
  })

  it('should apply tableMaxWidth style', () => {
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData,
        tableMaxWidth: 500
      }
    })
    expect(wrapper.find('div').attributes('style')).toContain('max-width: 500px')
  })

  it('should have overflow-x auto', () => {
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData
      }
    })
    expect(wrapper.find('div').attributes('style')).toContain('overflow-x: auto')
  })

  it('should have aggregatorMap prop defined via mixin', () => {
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData
      }
    })
    // Props from mixin are accessible on $options.props
    expect(wrapper.vm.$options.props.aggregatorMap).toBeDefined()
    expect(wrapper.vm.$options.props.aggregatorMap.type).toBe(Object)
  })

  it('should accept aggregatorMap prop', () => {
    const aggregatorMap = { sales: 'Sum', quantity: 'Average' }
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData,
        aggregatorMap
      }
    })
    expect(wrapper.vm.aggregatorMap).toEqual(aggregatorMap)
  })

  it('should default aggregatorMap to empty object', () => {
    const wrapper = shallowMount(VuePivottable, {
      propsData: {
        data: sampleData
      }
    })
    expect(wrapper.vm.aggregatorMap).toEqual({})
  })
})

describe('TSVExportRenderer', () => {
  const TSVRenderer = TableRenderer['Export Table TSV']
  const sampleData = [
    { region: 'East', product: 'A', sales: 100 },
    { region: 'West', product: 'B', sales: 200 }
  ]

  it('should render a textarea', () => {
    const wrapper = shallowMount(TSVRenderer, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: [],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('should be readonly', () => {
    const wrapper = shallowMount(TSVRenderer, {
      propsData: {
        data: sampleData,
        rows: [],
        cols: [],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined()
  })

  it('should contain tab-separated values', () => {
    const wrapper = shallowMount(TSVRenderer, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        vals: [],
        aggregatorName: 'Count',
        aggregators: aggregators
      }
    })
    const content = wrapper.find('textarea').element.value
    expect(content).toContain('\t')
  })
})

describe('VuePivottableUi', () => {
  const sampleData = [
    { region: 'East', product: 'A', sales: 100 },
    { region: 'East', product: 'B', sales: 200 },
    { region: 'West', product: 'A', sales: 150 },
    { region: 'West', product: 'B', sales: 250 }
  ]

  it('should have correct component name', () => {
    expect(VuePivottableUi.name).toBe('vue-pivottable-ui')
  })

  it('should have v-model configuration', () => {
    expect(VuePivottableUi.model).toEqual({
      prop: 'config',
      event: 'onRefresh'
    })
  })

  it('should have config prop defined', () => {
    expect(VuePivottableUi.props.config).toBeDefined()
    expect(VuePivottableUi.props.config.type).toBe(Object)
  })

  it('should render pivot table UI', () => {
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData
      }
    })
    expect(wrapper.find('.pvtUi').exists()).toBe(true)
  })

  it('should initialize with individual props', () => {
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        aggregatorName: 'Sum',
        vals: ['sales']
      }
    })
    expect(wrapper.vm.propsData.rows).toEqual(['region'])
    expect(wrapper.vm.propsData.cols).toEqual(['product'])
    expect(wrapper.vm.propsData.aggregatorName).toBe('Sum')
    expect(wrapper.vm.propsData.vals).toEqual(['sales'])
  })

  it('should initialize with config prop (v-model support)', () => {
    const config = {
      rows: ['region'],
      cols: ['product'],
      aggregatorName: 'Sum',
      vals: ['sales'],
      rowOrder: 'value_a_to_z',
      colOrder: 'value_z_to_a'
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        config
      }
    })
    expect(wrapper.vm.propsData.rows).toEqual(['region'])
    expect(wrapper.vm.propsData.cols).toEqual(['product'])
    expect(wrapper.vm.propsData.aggregatorName).toBe('Sum')
    expect(wrapper.vm.propsData.vals).toEqual(['sales'])
    expect(wrapper.vm.propsData.rowOrder).toBe('value_a_to_z')
    expect(wrapper.vm.propsData.colOrder).toBe('value_z_to_a')
  })

  it('should prioritize config prop over individual props', () => {
    const config = {
      rows: ['product'],
      aggregatorName: 'Count'
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        aggregatorName: 'Sum',
        config
      }
    })
    // config values should take precedence
    expect(wrapper.vm.propsData.rows).toEqual(['product'])
    expect(wrapper.vm.propsData.aggregatorName).toBe('Count')
  })

  it('should use individual props when config does not have the property', () => {
    const config = {
      rows: ['product']
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        aggregatorName: 'Sum',
        config
      }
    })
    // config.rows takes precedence
    expect(wrapper.vm.propsData.rows).toEqual(['product'])
    // individual props used when not in config
    expect(wrapper.vm.propsData.cols).toEqual(['product'])
    expect(wrapper.vm.propsData.aggregatorName).toBe('Sum')
  })

  it('should emit onRefresh event when propsData changes', async () => {
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        rows: ['region']
      }
    })
    // Manually trigger propsData change
    wrapper.vm.propsData.cols = ['product']
    await wrapper.vm.$nextTick()

    const emitted = wrapper.emitted('onRefresh')
    expect(emitted).toBeTruthy()
  })

  it('should update propsData when config prop changes', async () => {
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        config: {
          rows: ['region']
        }
      }
    })
    expect(wrapper.vm.propsData.rows).toEqual(['region'])

    // Update config prop
    await wrapper.setProps({
      config: {
        rows: ['product'],
        cols: ['region']
      }
    })

    expect(wrapper.vm.propsData.rows).toEqual(['product'])
    expect(wrapper.vm.propsData.cols).toEqual(['region'])
  })

  it('should support empty arrays in config', () => {
    const config = {
      rows: [],
      cols: [],
      vals: []
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        rows: ['region'],
        cols: ['product'],
        config
      }
    })
    // Empty arrays from config should be used (not fall back to individual props)
    expect(wrapper.vm.propsData.rows).toEqual([])
    expect(wrapper.vm.propsData.cols).toEqual([])
    expect(wrapper.vm.propsData.vals).toEqual([])
  })

  it('should support valueFilter in config', () => {
    const config = {
      rows: ['region'],
      valueFilter: {
        region: { East: true }
      }
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        config
      }
    })
    expect(wrapper.vm.propsData.valueFilter.region).toBeDefined()
  })

  it('should have config watcher', () => {
    expect(VuePivottableUi.watch.config).toBeDefined()
    expect(VuePivottableUi.watch.config.deep).toBe(true)
  })

  it('should have aggregatorMap prop defined via mixin', () => {
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData
      }
    })
    // Props from mixin are accessible on $options.props
    expect(wrapper.vm.$options.props.aggregatorMap).toBeDefined()
    expect(wrapper.vm.$options.props.aggregatorMap.type).toBe(Object)
  })

  it('should accept aggregatorMap prop', () => {
    const aggregatorMap = { sales: 'Sum', quantity: 'Average' }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        aggregatorMap
      }
    })
    expect(wrapper.vm.aggregatorMap).toEqual(aggregatorMap)
  })

  it('should pass aggregatorMap to propsData', () => {
    const aggregatorMap = { sales: 'Sum', quantity: 'Count' }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        aggregatorMap
      }
    })
    expect(wrapper.vm.propsData.aggregatorMap).toEqual(aggregatorMap)
  })

  it('should support aggregatorMap in config', () => {
    const config = {
      rows: ['region'],
      aggregatorMap: { sales: 'Average', quantity: 'Sum' }
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        config
      }
    })
    expect(wrapper.vm.propsData.aggregatorMap).toEqual({ sales: 'Average', quantity: 'Sum' })
  })

  it('should prioritize config aggregatorMap over prop', () => {
    const config = {
      aggregatorMap: { sales: 'Count' }
    }
    const wrapper = shallowMount(VuePivottableUi, {
      propsData: {
        data: sampleData,
        aggregatorMap: { sales: 'Sum' },
        config
      }
    })
    expect(wrapper.vm.propsData.aggregatorMap).toEqual({ sales: 'Count' })
  })
})
