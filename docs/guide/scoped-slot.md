
# Scoped Slot

For more information on ScopedSlot, see the [official Vue documentation](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).

## pvtAttr

```vue{10-13}
<template>
  <vue-pivottable-ui
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  >
    <template v-slot:pvtAttr="{ name }">
      <i class="fas fa-filter"></i>
      {{ name[0].toUpperCase() + name.substring(1) }}
    </template>
  </vue-pivottable-ui>
</template>

<script>
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
export default {
  components: {
    VuePivottableUi,
  },
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-pivottable-ui-pvtattrscopedslot-ylpl4?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_PvtattrScopedSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## output

```vue

```
