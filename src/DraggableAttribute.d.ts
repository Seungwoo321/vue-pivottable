declare namespace _default {
    const name: string;
    namespace props {
        export namespace open {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        export namespace sortable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace draggable {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace name_1 {
            const type_3: StringConstructor;
            export { type_3 as type };
            export const required: boolean;
        }
        export { name_1 as name };
        export namespace attrValues {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        export namespace valueFilter {
            const type_5: ObjectConstructor;
            export { type_5 as type };
            function _default_3(): {};
            export { _default_3 as default };
        }
        export namespace sorter {
            const type_6: FunctionConstructor;
            export { type_6 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        export namespace localeStrings {
            const type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_4(): {
                selectAll: string;
                selectNone: string;
                tooMany: string;
                filterResults: string;
                only: string;
            };
            export { _default_4 as default };
        }
        export const menuLimit: NumberConstructor;
        export const zIndex: NumberConstructor;
        export const async: BooleanConstructor;
        export const unused: BooleanConstructor;
    }
    function data(): {
        filterText: string;
        attribute: string;
        values: any[];
        filter: {};
    };
    function data(): {
        filterText: string;
        attribute: string;
        values: any[];
        filter: {};
    };
    namespace computed {
        function disabled(): boolean;
        function disabled(): boolean;
        function sortonly(): boolean;
        function sortonly(): boolean;
    }
    namespace methods {
        function setValuesInFilter(attribute: any, values: any): void;
        function setValuesInFilter(attribute: any, values: any): void;
        function addValuesToFilter(attribute: any, values: any): void;
        function addValuesToFilter(attribute: any, values: any): void;
        function removeValuesFromFilter(attribute: any, values: any): void;
        function removeValuesFromFilter(attribute: any, values: any): void;
        function moveFilterBoxToTop(attribute: any): void;
        function moveFilterBoxToTop(attribute: any): void;
        function toggleValue(value: any): void;
        function toggleValue(value: any): void;
        function matchesFilter(x: any): any;
        function matchesFilter(x: any): any;
        function selectOnly(e: any, value: any): void;
        function selectOnly(e: any, value: any): void;
        function getFilterBox(h: any): any;
        function getFilterBox(h: any): any;
        function toggleFilterBox(event: any): void;
        function toggleFilterBox(event: any): void;
        function openFilterBox(attribute: any, open: any): void;
        function openFilterBox(attribute: any, open: any): void;
    }
    function render(h: any): any;
    function render(h: any): any;
}
export default _default;
//# sourceMappingURL=DraggableAttribute.d.ts.map