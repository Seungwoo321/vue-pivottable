import { describe, it, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Dropdown from '../src/Dropdown'
import DraggableAttribute from '../src/DraggableAttribute'
import TableRenderer from '../src/TableRenderer'
import VuePivottable from '../src/Pivottable'

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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators,
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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators,
        tableOptions: { clickCallback }
      }
    })
    await wrapper.find('.pvVal').trigger('click')
    expect(clickCallback).toHaveBeenCalled()
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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators
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
        aggregators: require('../src/helper/utils').aggregators
      }
    })
    const content = wrapper.find('textarea').element.value
    expect(content).toContain('\t')
  })
})
