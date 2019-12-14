# Vue Pivottable

[![npm](https://flat.badgen.net/npm/v/vue-pivottable)](https://npmjs.com/package/vue-pivottable)
[![npm](https://flat.badgen.net/npm/dt/vue-pivottable)](https://npmjs.com/package/vue-pivottable)

It is a Vue-based pivot table library. It is a Vue port of the jQuery-based [PivotTable.js(https://pivottable.js.org/)


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
...

## TODO
* plotly.js
* docs

## License
MIT
