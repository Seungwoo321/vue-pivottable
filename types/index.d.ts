import { VueConstructor, ComponentOptions } from 'vue'

// ============================================================================
// Utility Types
// ============================================================================

export type SortOrder = 'key_a_to_z' | 'value_a_to_z' | 'value_z_to_a'

export type HeatmapMode = 'full' | 'row' | 'col'

export type Sorter = (a: any, b: any) => number

export type SorterFunction = (attr: string) => Sorter | null

export type Sorters = Record<string, Sorter> | SorterFunction

export type DerivedAttributeFunction = (record: Record<string, any>) => any

export type DerivedAttributes = Record<string, DerivedAttributeFunction>

export type ValueFilter = Record<string, Record<string, boolean>>

// ============================================================================
// Aggregator Types
// ============================================================================

export interface AggregatorResult {
  push(record: Record<string, any>): void
  value(): number | string | null
  format(value: any): string
  numInputs?: number
}

export type AggregatorFactory = (
  data?: PivotData,
  rowKey?: string[],
  colKey?: string[]
) => AggregatorResult

export type Aggregator = (attributes: string[]) => AggregatorFactory

export type Aggregators = Record<string, Aggregator>

export interface AggregatorTemplates {
  count(formatter?: (x: number) => string): () => AggregatorFactory
  uniques(
    fn: (values: any[]) => any,
    formatter?: (x: any) => string
  ): Aggregator
  sum(formatter?: (x: number) => string): Aggregator
  extremes(mode: 'min' | 'max' | 'first' | 'last', formatter?: (x: number) => string): Aggregator
  quantile(q: number, formatter?: (x: number) => string): Aggregator
  runningStat(
    mode?: 'mean' | 'var' | 'stdev',
    ddof?: number,
    formatter?: (x: number) => string
  ): Aggregator
  sumOverSum(formatter?: (x: number) => string): Aggregator
  fractionOf(
    wrapped: Aggregator,
    type?: 'total' | 'row' | 'col',
    formatter?: (x: number) => string
  ): Aggregator
  countUnique(formatter?: (x: number) => string): Aggregator
  listUnique(separator: string): Aggregator
  max(formatter?: (x: number) => string): Aggregator
  min(formatter?: (x: number) => string): Aggregator
  first(formatter?: (x: number) => string): Aggregator
  last(formatter?: (x: number) => string): Aggregator
  median(formatter?: (x: number) => string): Aggregator
  average(formatter?: (x: number) => string): Aggregator
  var(ddof: number, formatter?: (x: number) => string): Aggregator
  stdev(ddof: number, formatter?: (x: number) => string): Aggregator
}

// ============================================================================
// Number Format Types
// ============================================================================

export interface NumberFormatOptions {
  digitsAfterDecimal?: number
  scaler?: number
  thousandsSep?: string
  decimalSep?: string
  prefix?: string
  suffix?: string
}

export type NumberFormatter = (x: number) => string

// ============================================================================
// Locale Types
// ============================================================================

export interface LocaleStrings {
  renderError?: string
  computeError?: string
  uiRenderError?: string
  selectAll?: string
  selectNone?: string
  tooMany?: string
  filterResults?: string
  totals?: string
  vs?: string
  by?: string
  apply?: string
  cancel?: string
  only?: string
}

export interface Locale {
  aggregators?: Aggregators
  localeStrings: LocaleStrings
}

export type Locales = Record<string, Locale>

// ============================================================================
// Derivers Types
// ============================================================================

export interface Derivers {
  bin(col: string, binWidth: number): DerivedAttributeFunction
  dateFormat(
    col: string,
    formatString: string,
    utcOutput?: boolean,
    mthNames?: string[],
    dayNames?: string[]
  ): DerivedAttributeFunction
}

// ============================================================================
// PivotData Class
// ============================================================================

export interface PivotDataProps {
  data: any[] | Record<string, any>[] | ((callback: (record: Record<string, any>) => void) => void)
  aggregators?: Aggregators
  aggregatorName?: string
  cols?: string[]
  rows?: string[]
  vals?: string[]
  sorters?: Sorters
  valueFilter?: ValueFilter
  rowOrder?: SortOrder
  colOrder?: SortOrder
  derivedAttributes?: DerivedAttributes
}

export class PivotData {
  constructor(props?: PivotDataProps)

  props: PivotDataProps
  aggregator: AggregatorFactory
  tree: Record<string, Record<string, AggregatorResult>>
  rowKeys: string[][]
  colKeys: string[][]
  rowTotals: Record<string, AggregatorResult>
  colTotals: Record<string, AggregatorResult>
  allTotal: AggregatorResult
  sorted: boolean
  filteredData: Record<string, any>[]

  filter(record: Record<string, any>): boolean
  forEachMatchingRecord(
    criteria: Record<string, any>,
    callback: (record: Record<string, any>) => void
  ): void
  arrSort(attrs: string[]): Sorter
  sortKeys(): void
  getFilteredData(): Record<string, any>[]
  getColKeys(): string[][]
  getRowKeys(): string[][]
  processRecord(record: Record<string, any>): void
  getAggregator(rowKey: string[], colKey: string[]): AggregatorResult

  static forEachRecord(
    input: any,
    derivedAttributes: DerivedAttributes,
    callback: (record: Record<string, any>) => void
  ): void
  static defaultProps: PivotDataProps
}

// ============================================================================
// Table Options
// ============================================================================

export interface TableOptions {
  clickCallback?: (
    event: MouseEvent,
    value: any,
    filters: Record<string, any>,
    pivotData: PivotData
  ) => void
}

export type TableColorScaleGenerator = (values: number[]) => (value: number) => { backgroundColor: string }

// ============================================================================
// Component Props
// ============================================================================

export interface CommonProps {
  data: any[] | Record<string, any>[] | ((callback: (record: Record<string, any>) => void) => void)
  aggregators?: Aggregators
  aggregatorName?: string
  cols?: string[]
  rows?: string[]
  vals?: string[]
  valueFilter?: ValueFilter
  sorters?: Sorters
  derivedAttributes?: DerivedAttributes
  rowOrder?: SortOrder
  colOrder?: SortOrder
  locale?: string
  locales?: Locales
  rowTotal?: boolean
  colTotal?: boolean
  tableMaxWidth?: number
  colLimit?: number
  rowLimit?: number
  plotlyOptions?: Record<string, any>
  labels?: Record<string, (value: any) => any>
}

export interface VuePivottableProps extends CommonProps {
  renderers?: Record<string, ComponentOptions<Vue>>
  rendererName?: string
  heatmapMode?: HeatmapMode
  tableColorScaleGenerator?: TableColorScaleGenerator
  tableOptions?: TableOptions
}

/**
 * Configuration object for v-model support.
 * When provided via config prop, these values take precedence over individual props.
 */
export interface VuePivottableUiConfig {
  rows?: string[]
  cols?: string[]
  vals?: string[]
  aggregatorName?: string
  rendererName?: string
  rowOrder?: SortOrder
  colOrder?: SortOrder
  valueFilter?: ValueFilter
}

export interface VuePivottableUiProps extends CommonProps {
  renderers?: Record<string, ComponentOptions<Vue>>
  rendererName?: string
  hiddenAttributes?: string[]
  hiddenFromAggregators?: string[]
  hiddenFromDragDrop?: string[]
  sortonlyFromDragDrop?: string[]
  disabledFromDragDrop?: string[]
  menuLimit?: number
  async?: boolean
  /**
   * Configuration object for v-model support.
   * Use with v-model to save and restore pivot table state.
   * Config values take precedence over individual props when both are provided.
   */
  config?: VuePivottableUiConfig
}

export interface DropdownProps {
  values: string[]
  value?: string
}

export interface DraggableAttributeProps {
  name: string
  sorter: Sorter
  open?: boolean
  sortable?: boolean
  draggable?: boolean
  attrValues?: Record<string, number>
  valueFilter?: Record<string, boolean>
  localeStrings?: LocaleStrings
  menuLimit?: number
  zIndex?: number
  async?: boolean
  unused?: boolean
}

// ============================================================================
// Vue Components
// ============================================================================

export const VuePivottable: ComponentOptions<Vue>
export const VuePivottableUi: ComponentOptions<Vue>

// ============================================================================
// Renderer
// ============================================================================

export interface TableRendererOptions {
  name: string
  heatmapMode?: HeatmapMode
}

export const Renderer: {
  TableRenderer: {
    Table: ComponentOptions<Vue>
    'Table Heatmap': ComponentOptions<Vue>
    'Table Col Heatmap': ComponentOptions<Vue>
    'Table Row Heatmap': ComponentOptions<Vue>
    'Export Table TSV': ComponentOptions<Vue>
  }
}

// ============================================================================
// PivotUtilities
// ============================================================================

export const PivotUtilities: {
  aggregatorTemplates: AggregatorTemplates
  aggregators: Aggregators
  derivers: Derivers
  locales: Locales
  naturalSort: Sorter
  numberFormat: (options?: NumberFormatOptions) => NumberFormatter
  getSort: (sorters: Sorters | null | undefined, attr: string) => Sorter
  sortAs: (order: any[]) => Sorter
  PivotData: typeof PivotData
}

// ============================================================================
// Plugin Install
// ============================================================================

declare const VuePivottablePlugin: {
  install: (Vue: VueConstructor) => void
}

export default VuePivottablePlugin
