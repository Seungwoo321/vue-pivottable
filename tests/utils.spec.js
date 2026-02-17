import { describe, it, expect } from 'vitest'
import {
  naturalSort,
  numberFormat,
  sortAs,
  getSort,
  aggregatorTemplates,
  aggregators,
  PivotData
} from '../src/helper/utils'

describe('naturalSort', () => {
  it('should sort nulls first', () => {
    expect(naturalSort(null, 'a')).toBe(-1)
    expect(naturalSort('a', null)).toBe(1)
    expect(naturalSort(null, null)).toBe(0)
  })

  it('should sort numbers correctly', () => {
    expect(naturalSort(1, 2)).toBe(-1)
    expect(naturalSort(2, 1)).toBe(1)
    expect(naturalSort(1, 1)).toBe(0)
  })

  it('should sort numeric strings correctly', () => {
    expect(naturalSort('10', '2')).toBe(1)
    expect(naturalSort('2', '10')).toBe(-1)
  })

  it('should sort strings alphabetically', () => {
    expect(naturalSort('apple', 'banana')).toBe(-1)
    expect(naturalSort('banana', 'apple')).toBe(1)
    expect(naturalSort('apple', 'apple')).toBe(0)
  })

  it('should handle mixed alphanumeric strings', () => {
    expect(naturalSort('item1', 'item2')).toBeLessThan(0)
    expect(naturalSort('item10', 'item2')).toBeGreaterThan(0)
    expect(naturalSort('item2', 'item10')).toBeLessThan(0)
  })

  it('should handle NaN values', () => {
    expect(naturalSort(NaN, 1)).toBe(-1)
    expect(naturalSort(1, NaN)).toBe(1)
  })
})

describe('numberFormat', () => {
  it('should format numbers with default options', () => {
    const formatter = numberFormat()
    expect(formatter(1234.567)).toBe('1,234.57')
  })

  it('should format numbers with custom decimal places', () => {
    const formatter = numberFormat({ digitsAfterDecimal: 0 })
    expect(formatter(1234.567)).toBe('1,235')
  })

  it('should format numbers with prefix and suffix', () => {
    const formatter = numberFormat({ prefix: '$', suffix: ' USD' })
    expect(formatter(1234.56)).toBe('$1,234.56 USD')
  })

  it('should format percentages', () => {
    const formatter = numberFormat({
      digitsAfterDecimal: 1,
      scaler: 100,
      suffix: '%'
    })
    expect(formatter(0.1234)).toBe('12.3%')
  })

  it('should handle NaN and Infinity', () => {
    const formatter = numberFormat()
    expect(formatter(NaN)).toBe('')
    expect(formatter(Infinity)).toBe('')
  })

  it('should use custom separators', () => {
    const formatter = numberFormat({
      thousandsSep: '.',
      decimalSep: ','
    })
    expect(formatter(1234.56)).toBe('1.234,56')
  })
})

describe('sortAs', () => {
  it('should sort according to provided order', () => {
    const sorter = sortAs(['low', 'medium', 'high'])
    expect(sorter('low', 'high')).toBeLessThan(0)
    expect(sorter('high', 'low')).toBeGreaterThan(0)
    expect(sorter('medium', 'medium')).toBe(0)
  })

  it('should handle case insensitive matching', () => {
    const sorter = sortAs(['Apple', 'Banana'])
    expect(sorter('apple', 'banana')).toBeLessThan(0)
  })

  it('should fall back to natural sort for unknown values', () => {
    const sorter = sortAs(['known'])
    expect(sorter('known', 'unknown')).toBeLessThan(0)
    expect(sorter('unknown', 'known')).toBeGreaterThan(0)
  })
})

describe('getSort', () => {
  it('should return naturalSort when no sorters provided', () => {
    expect(getSort(null, 'attr')).toBe(naturalSort)
    expect(getSort(undefined, 'attr')).toBe(naturalSort)
  })

  it('should return sorter from object', () => {
    const customSorter = (a, b) => a - b
    const sorters = { myAttr: customSorter }
    expect(getSort(sorters, 'myAttr')).toBe(customSorter)
  })

  it('should call sorter function with attribute', () => {
    const customSorter = (a, b) => a - b
    const sorterFn = (attr) => attr === 'myAttr' ? customSorter : null
    expect(getSort(sorterFn, 'myAttr')).toBe(customSorter)
  })
})

describe('aggregatorTemplates', () => {
  describe('count', () => {
    it('should count records', () => {
      const agg = aggregatorTemplates.count()()()
      agg.push({})
      agg.push({})
      agg.push({})
      expect(agg.value()).toBe(3)
    })
  })

  describe('sum', () => {
    it('should sum values', () => {
      const agg = aggregatorTemplates.sum()(['amount'])()
      agg.push({ amount: 10 })
      agg.push({ amount: 20 })
      agg.push({ amount: 30 })
      expect(agg.value()).toBe(60)
    })

    it('should ignore non-numeric values', () => {
      const agg = aggregatorTemplates.sum()(['amount'])()
      agg.push({ amount: 10 })
      agg.push({ amount: 'invalid' })
      agg.push({ amount: 20 })
      expect(agg.value()).toBe(30)
    })
  })

  describe('average', () => {
    it('should calculate average', () => {
      const agg = aggregatorTemplates.average()(['value'])()
      agg.push({ value: 10 })
      agg.push({ value: 20 })
      agg.push({ value: 30 })
      expect(agg.value()).toBe(20)
    })
  })

  describe('min/max', () => {
    it('should find minimum value', () => {
      const agg = aggregatorTemplates.min()(['value'])()
      agg.push({ value: 30 })
      agg.push({ value: 10 })
      agg.push({ value: 20 })
      expect(agg.value()).toBe(10)
    })

    it('should find maximum value', () => {
      const agg = aggregatorTemplates.max()(['value'])()
      agg.push({ value: 10 })
      agg.push({ value: 30 })
      agg.push({ value: 20 })
      expect(agg.value()).toBe(30)
    })
  })
})

describe('aggregators', () => {
  it('should have standard aggregators', () => {
    expect(aggregators).toHaveProperty('Count')
    expect(aggregators).toHaveProperty('Sum')
    expect(aggregators).toHaveProperty('Average')
    expect(aggregators).toHaveProperty('Minimum')
    expect(aggregators).toHaveProperty('Maximum')
  })
})

describe('PivotData', () => {
  const sampleData = [
    { region: 'East', product: 'A', sales: 100 },
    { region: 'East', product: 'B', sales: 200 },
    { region: 'West', product: 'A', sales: 150 },
    { region: 'West', product: 'B', sales: 250 }
  ]

  it('should create instance with data', () => {
    const pivotData = new PivotData({ data: sampleData })
    expect(pivotData).toBeDefined()
  })

  it('should process row keys', () => {
    const pivotData = new PivotData({
      data: sampleData,
      rows: ['region']
    })
    const rowKeys = pivotData.getRowKeys()
    expect(rowKeys).toHaveLength(2)
    expect(rowKeys).toContainEqual(['East'])
    expect(rowKeys).toContainEqual(['West'])
  })

  it('should process col keys', () => {
    const pivotData = new PivotData({
      data: sampleData,
      cols: ['product']
    })
    const colKeys = pivotData.getColKeys()
    expect(colKeys).toHaveLength(2)
    expect(colKeys).toContainEqual(['A'])
    expect(colKeys).toContainEqual(['B'])
  })

  it('should calculate aggregations', () => {
    const pivotData = new PivotData({
      data: sampleData,
      rows: ['region'],
      cols: ['product'],
      aggregatorName: 'Sum',
      vals: ['sales']
    })

    const eastA = pivotData.getAggregator(['East'], ['A'])
    expect(eastA.value()).toBe(100)

    const westB = pivotData.getAggregator(['West'], ['B'])
    expect(westB.value()).toBe(250)
  })

  it('should calculate row totals', () => {
    const pivotData = new PivotData({
      data: sampleData,
      rows: ['region'],
      cols: ['product'],
      aggregatorName: 'Sum',
      vals: ['sales']
    })

    const eastTotal = pivotData.getAggregator(['East'], [])
    expect(eastTotal.value()).toBe(300)
  })

  it('should calculate grand total', () => {
    const pivotData = new PivotData({
      data: sampleData,
      aggregatorName: 'Sum',
      vals: ['sales']
    })

    const grandTotal = pivotData.getAggregator([], [])
    expect(grandTotal.value()).toBe(700)
  })

  it('should filter data with valueFilter', () => {
    const pivotData = new PivotData({
      data: sampleData,
      rows: ['region'],
      valueFilter: { region: { East: true } }
    })
    const rowKeys = pivotData.getRowKeys()
    expect(rowKeys).toHaveLength(1)
    expect(rowKeys).toContainEqual(['West'])
  })

  it('should get filtered data', () => {
    const pivotData = new PivotData({
      data: sampleData,
      valueFilter: { region: { East: true } }
    })
    const filteredData = pivotData.getFilteredData()
    expect(filteredData).toHaveLength(2)
    expect(filteredData.every(r => r.region === 'West')).toBe(true)
  })
})
