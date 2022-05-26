declare namespace _default {
    const name: string;
    const mixins: {
        props: {
            data: {
                type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
                required: boolean;
            };
            aggregators: {
                type: ObjectConstructor;
                default: () => {
                    Count: () => () => {
                        count: number;
                        push(): void;
                        value(): number;
                        format: (x: any) => string;
                    };
                    'Count Unique Values': any;
                    'List Unique Values': any;
                    Sum: ([attr]: [any]) => () => {
                        sum: number;
                        push(record: any): void;
                        value(): number;
                        format: (x: any) => string;
                        numInputs: number;
                    };
                    'Integer Sum': ([attr]: [any]) => () => {
                        sum: number;
                        push(record: any): void;
                        value(): number;
                        format: (x: any) => string;
                        numInputs: number;
                    };
                    Average: any;
                    Median: any;
                    'Sample Variance': any;
                    'Sample Standard Deviation': any;
                    Minimum: any;
                    Maximum: any;
                    First: any;
                    Last: any;
                    'Sum over Sum': ([num, denom]: [any, any]) => () => {
                        sumNum: number;
                        sumDenom: number;
                        push(record: any): void;
                        value(): number;
                        format: (x: any) => string;
                        numInputs: number;
                    };
                    'Sum as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                        selector: any;
                        inner: any;
                        push(record: any): void;
                        format: (x: any) => string;
                        value(): number;
                        numInputs: any;
                    };
                    'Sum as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                        selector: any;
                        inner: any;
                        push(record: any): void;
                        format: (x: any) => string;
                        value(): number;
                        numInputs: any;
                    };
                    'Sum as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                        selector: any;
                        inner: any;
                        push(record: any): void;
                        format: (x: any) => string;
                        value(): number;
                        numInputs: any;
                    };
                    'Count as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                        selector: any;
                        inner: any;
                        push(record: any): void;
                        format: (x: any) => string;
                        value(): number;
                        numInputs: any;
                    };
                    'Count as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                        selector: any;
                        inner: any;
                        push(record: any): void;
                        format: (x: any) => string;
                        value(): number;
                        numInputs: any;
                    };
                    'Count as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                        selector: any;
                        inner: any;
                        push(record: any): void;
                        format: (x: any) => string;
                        value(): number;
                        numInputs: any;
                    };
                };
            };
            selectedAggregators: {
                type: ArrayConstructor;
                default: () => any[];
            };
            aggregatorName: {
                type: StringConstructor;
                default: string;
            };
            heatmapMode: StringConstructor;
            tableColorScaleGenerator: {
                type: FunctionConstructor;
            };
            tableOptions: {
                type: ObjectConstructor;
                default: () => {};
            };
            renderers: ObjectConstructor;
            rendererName: {
                type: StringConstructor;
                default: string;
            };
            locale: {
                type: StringConstructor;
                default: string;
            };
            locales: {
                type: ObjectConstructor;
                default: () => {
                    en: {
                        aggregators: {
                            Count: () => () => {
                                count: number;
                                push(): void;
                                value(): number;
                                format: (x: any) => string;
                            };
                            'Count Unique Values': any;
                            'List Unique Values': any;
                            Sum: ([attr]: [any]) => () => {
                                sum: number;
                                push(record: any): void;
                                value(): number;
                                format: (x: any) => string;
                                numInputs: number;
                            };
                            'Integer Sum': ([attr]: [any]) => () => {
                                sum: number;
                                push(record: any): void;
                                value(): number;
                                format: (x: any) => string;
                                numInputs: number;
                            };
                            Average: any;
                            Median: any;
                            'Sample Variance': any;
                            'Sample Standard Deviation': any;
                            Minimum: any;
                            Maximum: any;
                            First: any;
                            Last: any;
                            'Sum over Sum': ([num, denom]: [any, any]) => () => {
                                sumNum: number;
                                sumDenom: number;
                                push(record: any): void;
                                value(): number;
                                format: (x: any) => string;
                                numInputs: number;
                            };
                            'Sum as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                                selector: any;
                                inner: any;
                                push(record: any): void;
                                format: (x: any) => string;
                                value(): number;
                                numInputs: any;
                            };
                            'Sum as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                                selector: any;
                                inner: any;
                                push(record: any): void;
                                format: (x: any) => string;
                                value(): number;
                                numInputs: any;
                            };
                            'Sum as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                                selector: any;
                                inner: any;
                                push(record: any): void;
                                format: (x: any) => string;
                                value(): number;
                                numInputs: any;
                            };
                            'Count as Fraction of Total': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                                selector: any;
                                inner: any;
                                push(record: any): void;
                                format: (x: any) => string;
                                value(): number;
                                numInputs: any;
                            };
                            'Count as Fraction of Rows': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                                selector: any;
                                inner: any;
                                push(record: any): void;
                                format: (x: any) => string;
                                value(): number;
                                numInputs: any;
                            };
                            'Count as Fraction of Columns': (...x: any[]) => (data: any, rowKey: any, colKey: any, index: any) => {
                                selector: any;
                                inner: any;
                                push(record: any): void;
                                format: (x: any) => string;
                                value(): number;
                                numInputs: any;
                            };
                        };
                        localeStrings: {
                            renderError: string;
                            computeError: string;
                            uiRenderError: string;
                            selectAll: string;
                            selectNone: string;
                            tooMany: string;
                            filterResults: string;
                            totals: string;
                            vs: string;
                            by: string;
                            values: string;
                            unused: string;
                            rows: string;
                            columns: string;
                        };
                    };
                };
            };
            labels: {
                type: BooleanConstructor;
                default: boolean;
            };
            rowTotal: {
                type: BooleanConstructor;
                default: boolean;
            };
            colTotal: {
                type: BooleanConstructor;
                default: boolean;
            };
            cols: {
                type: ArrayConstructor;
                default: () => any[];
            };
            rows: {
                type: ArrayConstructor;
                default: () => any[];
            };
            vals: {
                type: ArrayConstructor;
                default: () => any[];
            };
            attributes: {
                type: ArrayConstructor;
                default: () => any[];
            };
            valueFilter: {
                type: ObjectConstructor;
                default: () => {};
            };
            sorters: {
                type: (ObjectConstructor | FunctionConstructor)[];
                default: () => {};
            };
            derivedAttributes: {
                type: (ObjectConstructor | FunctionConstructor)[];
                default: () => {};
            };
            rowOrder: {
                type: ObjectConstructor;
                default: () => {};
            };
            colOrder: {
                type: ObjectConstructor;
                default: () => {};
            };
            tableMaxWidth: {
                type: NumberConstructor;
                default: number;
                validator: (value: any) => boolean;
            };
        };
        methods: {
            renderError(h: any): any;
            computeError(h: any): any;
            uiRenderError(h: any): any;
        };
    }[];
    namespace model {
        const prop: string;
        const event: string;
    }
    namespace props {
        namespace async {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace hiddenAttributes {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default_1(): any[];
            export { _default_1 as default };
        }
        namespace hiddenFromAggregators {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default_2(): any[];
            export { _default_2 as default };
        }
        namespace hiddenFromDragDrop {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_3(): any[];
            export { _default_3 as default };
        }
        namespace sortonlyFromDragDrop {
            const type_4: ArrayConstructor;
            export { type_4 as type };
            function _default_4(): any[];
            export { _default_4 as default };
        }
        namespace disabledFromDragDrop {
            const type_5: ArrayConstructor;
            export { type_5 as type };
            function _default_5(): any[];
            export { _default_5 as default };
        }
        namespace menuLimit {
            const type_6: NumberConstructor;
            export { type_6 as type };
            const _default_6: number;
            export { _default_6 as default };
        }
        namespace config {
            const type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_7(): {};
            export { _default_7 as default };
        }
    }
    namespace computed {
        function appliedFilter(): any;
        function appliedFilter(): any;
        function rendererItems(): any;
        function rendererItems(): any;
        function aggregatorItems(): any;
        function aggregatorItems(): any;
        function rowAttrs(): any;
        function rowAttrs(): any;
        function colAttrs(): any;
        function colAttrs(): any;
        function unusedAttrs(): any;
        function unusedAttrs(): any;
    }
    function data(): {
        propsData: {
            selectedAggregators: any[];
            aggregatorName: string;
            rendererName: string;
            rowOrder: {};
            colOrder: {};
            vals: any[];
            cols: any[];
            rows: any[];
            attributes: any[];
            valueFilter: {};
            renderer: any;
        };
        pivotData: any[];
        openStatus: {};
        attrValues: {};
        unusedOrder: any[];
        zIndices: {};
        maxZIndex: number;
        openDropdown: boolean;
        materializedInput: any[];
        sortIcons: {
            key_a_to_z: {
                rowSymbol: string;
                colSymbol: string;
                next: string;
            };
            value_a_to_z: {
                rowSymbol: string;
                colSymbol: string;
                next: string;
            };
            value_z_to_a: {
                rowSymbol: string;
                colSymbol: string;
                next: string;
            };
        };
    };
    function data(): {
        propsData: {
            selectedAggregators: any[];
            aggregatorName: string;
            rendererName: string;
            rowOrder: {};
            colOrder: {};
            vals: any[];
            cols: any[];
            rows: any[];
            attributes: any[];
            valueFilter: {};
            renderer: any;
        };
        pivotData: any[];
        openStatus: {};
        attrValues: {};
        unusedOrder: any[];
        zIndices: {};
        maxZIndex: number;
        openDropdown: boolean;
        materializedInput: any[];
        sortIcons: {
            key_a_to_z: {
                rowSymbol: string;
                colSymbol: string;
                next: string;
            };
            value_a_to_z: {
                rowSymbol: string;
                colSymbol: string;
                next: string;
            };
            value_z_to_a: {
                rowSymbol: string;
                colSymbol: string;
                next: string;
            };
        };
    };
    function beforeUpdated(nextProps: any): void;
    function beforeUpdated(nextProps: any): void;
    namespace watch {
        namespace cols {
            function handler(value: any): void;
            function handler(value: any): void;
        }
        namespace rows {
            function handler(value: any): void;
            function handler(value: any): void;
        }
        namespace rendererName {
            function handler(value: any): void;
            function handler(value: any): void;
        }
        namespace appliedFilter {
            function handler(value: any, oldValue: any): void;
            function handler(value: any, oldValue: any): void;
            const immediate: boolean;
            const deep: boolean;
        }
        namespace valueFilter {
            export function handler(value: any): void;
            export function handler(value: any): void;
            const immediate_1: boolean;
            export { immediate_1 as immediate };
            const deep_1: boolean;
            export { deep_1 as deep };
        }
        namespace data {
            export function handler(value: any): void;
            export function handler(value: any): void;
            const immediate_2: boolean;
            export { immediate_2 as immediate };
            const deep_2: boolean;
            export { deep_2 as deep };
        }
        namespace attributes {
            export function handler(value: any): void;
            export function handler(value: any): void;
            const deep_3: boolean;
            export { deep_3 as deep };
        }
        namespace propsData {
            export function handler(value: any): void;
            export function handler(value: any): void;
            const immediate_3: boolean;
            export { immediate_3 as immediate };
            const deep_4: boolean;
            export { deep_4 as deep };
        }
    }
    namespace methods {
        function init(): void;
        function init(): void;
        function numValsAllowed(aggregatorName: any): any;
        function numValsAllowed(aggregatorName: any): any;
        function assignValue(field: any): void;
        function assignValue(field: any): void;
        function propUpdater(key: any): (value: any) => void;
        function propUpdater(key: any): (value: any) => void;
        function updateRowOrder(index: any, order: any): void;
        function updateRowOrder(index: any, order: any): void;
        function updateColOrder(index: any, order: any): void;
        function updateColOrder(index: any, order: any): void;
        function updateAggregator(index: any, name: any, vals: any): void;
        function updateAggregator(index: any, name: any, vals: any): void;
        function addAggregator(): void;
        function addAggregator(): void;
        function removeAggregator(index: any): void;
        function removeAggregator(index: any): void;
        function updateValueFilter({ attribute, valueFilter }: {
            attribute: any;
            valueFilter: any;
        }): void;
        function updateValueFilter({ attribute, valueFilter }: {
            attribute: any;
            valueFilter: any;
        }): void;
        function moveFilterBoxToTop({ attribute }: {
            attribute: any;
        }): void;
        function moveFilterBoxToTop({ attribute }: {
            attribute: any;
        }): void;
        function openFilterBox({ attribute, open }: {
            attribute: any;
            open: any;
        }): void;
        function openFilterBox({ attribute, open }: {
            attribute: any;
            open: any;
        }): void;
        function closeFilterBox(event: any): void;
        function closeFilterBox(event: any): void;
        function materializeInput(nextData: any): void;
        function materializeInput(nextData: any): void;
        function makeDnDCell(items: any, label: any, onChange: any, classes: any, h: any, maxWidth?: boolean, available?: boolean): any;
        function makeDnDCell(items: any, label: any, onChange: any, classes: any, h: any, maxWidth?: boolean, available?: boolean): any;
        function rendererCell(rendererName: any, h: any): any;
        function rendererCell(rendererName: any, h: any): any;
        function aggregatorCell(selectedAggregators: any, isPlot: any, h: any): any;
        function aggregatorCell(selectedAggregators: any, isPlot: any, h: any): any;
        function outputCell(props: any, isPlotlyRenderer: any, h: any): any;
        function outputCell(props: any, isPlotlyRenderer: any, h: any): any;
    }
    function render(h: any): any;
    function render(h: any): any;
    function renderError(h: any, error: any): any;
    function renderError(h: any, error: any): any;
}
export default _default;
//# sourceMappingURL=PivottableUi.d.ts.map