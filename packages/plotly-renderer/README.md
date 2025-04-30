# @vue-pivottable/plotly-renderer

⚠️ **This package supports Vue 2 only.**  
👉 Looking for Vue 3? Use: [vue3-pivottable GitHub repo](https://github.com/vue-pivottable/vue3-pivottable)

[See docs](https://seungwoo321.github.io/vue-pivottable/guide/renderer.html#plotly-renderer-v0-4-6)

## Usage

```vue

<template>
  <vue-pivottable-ui
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    renderer-name="Area Chart"
    :rows="['color']"
    :cols="['shape']"
    :renderers="renderers"
  >
  </vue-pivottable-ui>
</template>

<script>
import { VuePivottableUi } from 'vue-pivottable'
import PlotlyRenderer from '@vue-pivottable/plotly-renderer'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
  components: {
    VuePivottableUi
  },
  computed: {
    renderers () {
      return (() => ({
        'Grouped Column Chart': PlotlyRenderer['Grouped Column Chart'],
        'Stacked Column Chart': PlotlyRenderer['Stacked Column Chart'],
        'Grouped Bar Chart': PlotlyRenderer['Grouped Bar Chart'],
        'Stacked Bar Chart': PlotlyRenderer['Stacked Bar Chart'],
        'Line Chart': PlotlyRenderer['Line Chart'],
        'Dot Chart': PlotlyRenderer['Dot Chart'],
        'Area Chart': PlotlyRenderer['Area Chart'],
        'Scatter Chart': PlotlyRenderer['Scatter Chart'],
        'Multiple Pie Chart': PlotlyRenderer['Multiple Pie Chart']
      }))()
    }
  }
}
</script>

```
