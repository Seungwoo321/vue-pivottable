
<div align="center">
    <h1>Vue Pivottable</h1>
    <small>`vue-pivottable` is a Vue-based pivot table library. It is a Vue port of the jQuery-based
[PivotTable.js](https://pivottable.js.org/)</small>
</div>

## Installation

```shall
npm i vue-pivottable
```

## Usage
```js
import Vue from 'vue'
import VuePivottable from 'vue-pivottable'

Vue.use(VuePivottable)
```

_vue template_

```html
<template>
  <div id="app">
    <h3>Pivottable Demo</h3>
    <vue-pivottable-ui
        :data="pivotData"
        :aggregatorName='Sum'
        :rendererName='Table Heatmap'
        :rows="['Payer Gender']"
        :cols="['Party Size']"
        :vals="['Total Bill']"
    >
    </vue-pivottable-ui>
  </div>
</template>
```

## Inspired
[plotly/react-pivottable](https://github.com/plotly/react-pivottable) - React-based pivot table librar


## Props
...

## TODO
* plotly.js
* docs

## License
MIT