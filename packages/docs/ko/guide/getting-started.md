# Getting Started

## Installation

### Direct Download / CDN

* unpkg: <https://unpkg.com/vue-pivottable@latest/dist/vue-pivottable.umd.min.js>
* jsdelivr: <https://cdn.jsdelivr.net/npm/vue-pivottable@latest/dist/vue-pivottable.umd.min.js>

Include vue-pivottable after Vue:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-pivottable.umd.min.js"></script>
```

### NPM

```bash
# install in your project
npm install vue-pivottable
```

## Usage

Import and use a component.

### Vue Pivottable

```vue
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

<iframe width="100%" height="300" src="//jsfiddle.net/seungwoo321/2uvdanym/19/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### Vue Pivottable UI

```vue
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

<iframe width="100%" height="300" src="//jsfiddle.net/seungwoo321/thds7ynu/4/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
