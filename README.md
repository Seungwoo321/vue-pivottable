
# Vue Pivottable

It is a Vue port of the jQuery-based [PivotTable.js](https://pivottable.js.org/)

[![npm](https://flat.badgen.net/npm/v/vue-pivottable)](https://npmjs.com/package/vue-pivottable)
[![npm](https://flat.badgen.net/npm/dt/vue-pivottable)](https://npmjs.com/package/vue-pivottable)
[![npm](https://flat.badgen.net/npm/license/vue-pivottable)](https://flat.badgen.net/npm/license/vue-pivottable)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-pivottable/badge)](https://www.jsdelivr.com/package/npm/vue-pivottable)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Documentation

You can view the documentation at <https://seungwoo321.github.io/vue-pivottable>. 
It's also lighter by removing `vue-plotly` from the dependencies.

## Live Demo

[link](https://jsfiddle.net/seungwoo321/repqmz3f/)

## Example Code

```bash
# Clone the project
git clone https://github.com/Seungwoo321/vue-pivottable.git

# Go into the cloned directory
cd vue-pivottable/example/

# npm install
npm install

# npm run serve
npm run serve
```

Open browser to <http://localhost:8080>

![vue-pivottable-demo.gif](https://seungwoo321.github.io/vue-pivottable-demo.gif)

## Installation

```shall
npm i vue-pivottable
```

## Usage

* Vue Pivottable

```html
<template>
  <vue-pivottable
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    :rows="['color']"
    :cols="['shape']"
  >
  </vue-pivottable>
</template>

<script>
import { VuePivottable } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
  components: {
    VuePivottable
  }
}
</script>
```

* Vue Pivottable Ui

```html
<template>
  <vue-pivottable-ui
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    :rows="['color']"
    :cols="['shape']"
  >
  </vue-pivottable-ui>
</template>

<script>
import { VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
export default {
  components: {
    VuePivottableUi
  }
}
</script>
```

* Plotly renderer

  [See docs](https://seungwoo321.github.io/vue-pivottable/guide/renderer.html#plotly-renderer-v0-4-6)

```html
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

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://seungwoo321.github.io/"><img src="https://avatars.githubusercontent.com/u/13829929?v=4?s=100" width="100px;" alt="Seungwoo321"/><br /><sub><b>Seungwoo321</b></sub></a><br /><a href="https://github.com/Seungwoo321/vue-pivottable/commits?author=Seungwoo321" title="Code">💻</a></td>
      <td align="center"><a href="https://kinshasadigital.com/"><img src="https://avatars.githubusercontent.com/u/48548004?v=4?s=100" width="100px;" alt="rkota"/><br /><sub><b>rkota</b></sub></a><br /><a href="#maintenance-rosairekota" title="Maintenance">🚧</a></td>
      <td align="center"><a href="https://github.com/jbrathwa"><img src="https://avatars.githubusercontent.com/u/24322038?v=4?s=100" width="100px;" alt="Jayraj Rathwa"/><br /><sub><b>Jayraj Rathwa</b></sub></a><br /><a href="https://github.com/Seungwoo321/vue-pivottable/issues?q=author%3Ajbrathwa" title="Bug reports">🐛</a></td>
      <td align="center"><a href="https://github.com/cbbdev"><img src="https://avatars.githubusercontent.com/u/55853311?v=4?s=100" width="100px;" alt="cbbdev"/><br /><sub><b>cbbdev</b></sub></a><br /><a href="#maintenance-cbbdev" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Inspired

* [plotly/react-pivottable](https://github.com/plotly/react-pivottable) - React-based pivot table library
* [David-Desmaisons/vue-plotly](https://github.com/David-Desmaisons/vue-plotly) - vue wrapper for plotly.js

## License

MIT
