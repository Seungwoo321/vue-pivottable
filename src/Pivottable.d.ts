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
    namespace computed {
        function rendererItems(): any;
        function rendererItems(): any;
    }
    namespace methods {
        function createPivottable(h: any): any;
        function createPivottable(h: any): any;
        function createWrapperContainer(h: any): any;
        function createWrapperContainer(h: any): any;
    }
    function render(h: any): any;
    function render(h: any): any;
    function renderError(h: any, error: any): any;
    function renderError(h: any, error: any): any;
}
export default _default;
//# sourceMappingURL=Pivottable.d.ts.map