# Vue Pivottable

[![npm](https://flat.badgen.net/npm/v/vue-pivottable)](https://npmjs.com/package/vue-pivottable)
[![npm](https://flat.badgen.net/npm/dt/vue-pivottable)](https://npmjs.com/package/vue-pivottable)

It is a Vue-based pivot table library. It is a Vue port of the jQuery-based [PivotTable.js](https://pivottable.js.org/)


## Installation

```shall
npm i vue-pivottable
```

## Usage
### Global Compoents
main.js
```js
import Vue from 'vue'
import VuePivottable from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
Vue.use(VuePivottable)
```
_vue template_
* vue-pivottable
```html
<template>
  <div id="app">
    <h3>Pivottable Demo</h3>
    <vue-pivottable
        :data="pivotData"
        aggregatorName='Sum'
        rendererName='Table Heatmap'
        :rows="['Payer Gender']"
        :cols="['Party Size']"
        :vals="['Total Bill']"
    >
    </vue-pivottable>
  </div>
</template>
```
or 
* vue-pivottable-ui
```html
<template>
  <div id="app">
    <h3>Pivottable Demo</h3>
    <vue-pivottable-ui
        :data="pivotData"
        aggregatorName='Sum'
        rendererName='Table Heatmap'
        :rows="['Payer Gender']"
        :cols="['Party Size']"
        :vals="['Total Bill']"
    >
    </vue-pivottable-ui>
  </div>
</template>
```

### Component style
app.vue
```html
<template>
  <div id="app">
    <h3>Pivottable Demo</h3>
    <vue-pivottable
        :data="pivotData"
        aggregatorName='Sum'
        rendererName='Table Heatmap'
        :rows="['Payer Gender']"
        :cols="['Party Size']"
        :vals="['Total Bill']"
    >
    </vue-pivottable>
    <h3>Pivottable Ui Demo</h3>
    <vue-pivottable-ui
        :data="pivotData"
        aggregatorName='Sum'
        rendererName='Table Heatmap'
        :rows="['Payer Gender']"
        :cols="['Party Size']"
        :vals="['Total Bill']"
    >
    </vue-pivottable-ui>
  </div>
</template>

<script>
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
    components: {
        VuePivottable,
        VuePivottableUi
    }
}
</script>
```


[Live Demo](https://jsfiddle.net/front123/repqmz3f/)

## Inspired
[plotly/react-pivottable](https://github.com/plotly/react-pivottable) - React-based pivot table library


## Props
* See (`react-pivottable`)[https://github.com/plotly/react-pivottable/blob/master/README.md#properties-and-layered-architecture] for details.

|Key|Type & Default Value| Description
|----|-------------------|---------------

|data|(none, required)| data to be summarized

|vals|`Array`<br> []| attribute names used as arguments to aggregator (gets passed to aggregator generating function)

|cols|`Array`<br> []|	attribute names to prepopulate in cols area

|rows|`Array`<br> []| attribute names to prepopulate in row area

|rowTotal|`Boolean`<br> true| show total of rows

|colTotal|`Boolean`<br> true| show total of cols

|aggregatorName|`String` <br> first key in `aggregators` | key to `aggregators` object specifying the aggregator to use for computations

|rendererName|`String` <br> Table | key to renderers object specifying the renderer to use


|valueFilter|`Object` <br> {} | object whose keys are attribute names and values are objects of attribute value-boolean pairs which denote records to include or exclude from computation and rendering; used to prepopulate the filter menus that appear on double-click 

|sorters|`Function or Object` <br> {} | accessed or called with an attribute name and can return a function which can be used as an argument to array.sort for output purposes. See (`react-pivottable`)[https://github.com/plotly/react-pivottable/blob/master/README.md#properties-and-layered-architecture] for details.

|derivedAttributes|`Object` <br> {} | derivedAttributes | defines derived attributes

|rowOrder|`String` <br> key_a_to_z | 	the order in which row data is provided to the renderer, must be one of "key_a_to_z", "value_a_to_z", "value_z_to_a", ordering by value orders by row total 

|colOrder|`String` <br> key_a_to_z | the order in which column data is provided to the renderer, must be one of "key_a_to_z", "value_a_to_z", "value_z_to_a", ordering by value orders by column total

|tableMaxWidth|`Number` <br> 0 | value of max-width in table style 

|hiddenAttributes|`Array` <br> [] | contains attribute names to omit from the UI

hiddenFromAggregators|`Array` <br> [] |contains attribute names to omit from the aggregator arguments dropdowns

hiddenFromDragDrop|`Array` <br> [] | contains attribute names to omit from the aggregator arguments dropdowns

sortonlyFromDragDrop|`Array` <br> [] | contains attribute names to sort from the drag'n'drop of the UI (has not `react-pivottable`)

disabledFromDragDrop|`Array` <br> [] |contains attribute names to disable from the drag'n'drop portion of the UI (has not `react-pivottable`)

menuLimit|`Number` <br> 500| maximum number of values to list in the double-click menu

## License
MIT
