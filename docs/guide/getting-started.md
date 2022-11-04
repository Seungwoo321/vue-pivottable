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

<iframe src="https://codesandbox.io/embed/vue-pivottable-base-qhqoz?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-base"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

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

<iframe src="https://codesandbox.io/embed/vue-pivottable-ui-base-3y36u?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui-base"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
