declare namespace _default {
    namespace props {
        namespace data {
            const type: (ObjectConstructor | FunctionConstructor | ArrayConstructor)[];
            const required: boolean;
        }
        namespace aggregators {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {
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
            export { _default as default };
        }
        namespace selectedAggregators {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default_1(): any[];
            export { _default_1 as default };
        }
        namespace aggregatorName {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        const heatmapMode: StringConstructor;
        namespace tableColorScaleGenerator {
            const type_4: FunctionConstructor;
            export { type_4 as type };
        }
        namespace tableOptions {
            const type_5: ObjectConstructor;
            export { type_5 as type };
            function _default_3(): {};
            export { _default_3 as default };
        }
        const renderers: ObjectConstructor;
        namespace rendererName {
            const type_6: StringConstructor;
            export { type_6 as type };
            const _default_4: string;
            export { _default_4 as default };
        }
        namespace locale {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_5: string;
            export { _default_5 as default };
        }
        namespace locales {
            const type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_6(): {
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
            export { _default_6 as default };
        }
        namespace labels {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace rowTotal {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        namespace colTotal {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
        namespace cols {
            const type_12: ArrayConstructor;
            export { type_12 as type };
            function _default_10(): any[];
            export { _default_10 as default };
        }
        namespace rows {
            const type_13: ArrayConstructor;
            export { type_13 as type };
            function _default_11(): any[];
            export { _default_11 as default };
        }
        namespace vals {
            const type_14: ArrayConstructor;
            export { type_14 as type };
            function _default_12(): any[];
            export { _default_12 as default };
        }
        namespace attributes {
            const type_15: ArrayConstructor;
            export { type_15 as type };
            function _default_13(): any[];
            export { _default_13 as default };
        }
        namespace valueFilter {
            const type_16: ObjectConstructor;
            export { type_16 as type };
            function _default_14(): {};
            export { _default_14 as default };
        }
        namespace sorters {
            const type_17: (ObjectConstructor | FunctionConstructor)[];
            export { type_17 as type };
            function _default_15(): {};
            export { _default_15 as default };
        }
        namespace derivedAttributes {
            const type_18: (ObjectConstructor | FunctionConstructor)[];
            export { type_18 as type };
            function _default_16(): {};
            export { _default_16 as default };
        }
        namespace rowOrder {
            const type_19: ObjectConstructor;
            export { type_19 as type };
            function _default_17(): {};
            export { _default_17 as default };
        }
        namespace colOrder {
            const type_20: ObjectConstructor;
            export { type_20 as type };
            function _default_18(): {};
            export { _default_18 as default };
        }
        namespace tableMaxWidth {
            const type_21: NumberConstructor;
            export { type_21 as type };
            const _default_19: number;
            export { _default_19 as default };
            export function validator(value: any): boolean;
        }
    }
    namespace methods {
        function renderError(h: any): any;
        function renderError(h: any): any;
        function computeError(h: any): any;
        function computeError(h: any): any;
        function uiRenderError(h: any): any;
        function uiRenderError(h: any): any;
    }
}
export default _default;
//# sourceMappingURL=common.d.ts.map