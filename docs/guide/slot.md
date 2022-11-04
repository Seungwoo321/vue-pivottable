# Slot

Options for customizing vue-pivottable-ui.

:::warning
Both slot and scoped slots are supported, but the use of the v-slot directive is recommended.
:::

## rendererCell

If you want to replace the selection UI that selects the renderer, use the `rendererCell` slot.

```vue{10-12}
<template>
  <vue-pivottable-ui
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  >
    <template v-slot:rendererCell>
      <i class="fas fa-table" style="margin-right: 0.25rem"></i>Table2
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

<iframe src="https://codesandbox.io/embed/vue-pivottable-ui-renderercellslot-1sf5v?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_RendererCellSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## aggregatorCell

If you want to replace the select UI that selects the aggregator you can use it.

```vue{10-12}
<template>
  <vue-pivottable-ui
    :data="[
      { color: 'blue', shape: 'circle' },
      { color: 'red', shape: 'triangle' },
    ]"
    :rows="['color']"
    :cols="['shape']"
  >
    <template v-slot:aggregatorCell>
      <i class="fas fa-calculator" style="margin-right: 0.25rem"></i>Count
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

<iframe src="https://codesandbox.io/embed/vue-pivottable-ui-aggregatorcellslot-bol0q?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_AggregatorCellSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## colGroup

You can use this slot if you want the width of `td.pvtAxisContainer` to be fixed, or if you want not the drag field to overflow `td.pvtAxisContainer` .

::: tip
`td.pvtAxisContainer` has **overflow-x:auto;** property.
:::

```vue{13-16}
<template>
  <div>
    <vue-pivottable-ui
      :data="[
        { color: 'blue', shapeeeeeeeeeeeeeeee: 'circle' },
        { color: 'red', shapeeeeeeeeeeeeeeee: 'triangle' },
      ]"
      :rows="['color', 'shapeeeeeeeeeeeeeeee']"
      :cols="[]"
    >
      <template v-slot:rendererCell>Table</template>
      <template v-slot:aggregatorCell>Count</template>
      <template v-slot:colGroup>
        <colGroup :width="colGroupFirstWidth"></colGroup>
        <colGroup></colGroup>
      </template>
    </vue-pivottable-ui>
    <div class="m-1">
      <label>colGroupFirstWidth: </label>
      <input v-model="colGroupFirstWidth" type="number" />
    </div>
  </div>
</template>

<script>
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
export default {
  components: {
    VuePivottableUi,
  },
  data() {
    return {
      colGroupFirstWidth: 250,
    };
  },
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-pivottable-ui-colgroupslot-9k8uv?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_ColGroupSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## output

This is a slot that replaces the area in `td.pvtOutput`.

```vue{11-13}
<template>
  <div>
    <vue-pivottable-ui
      :data="[
        { color: 'blue', shape: 'circle' },
        { color: 'red', shape: 'triangle' },
      ]"
      :rows="['color']"
      :cols="['shape']"
    >
      <template v-slot:output v-if="!loaded">
        <div class="p-1">loading...</div>
      </template>
    </vue-pivottable-ui>
    <button
      class="btn btn-sm btn-secondary mt-1"
      :disabled="!loaded"
      @click="reload"
    >
      <i class="fas fa-redo mr-25"></i>
      redo
    </button>
  </div>
</template>

<script>
import { VuePivottableUi } from "vue-pivottable";
import "vue-pivottable/dist/vue-pivottable.css";
export default {
  components: {
    VuePivottableUi,
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    reload() {
      this.loaded = false;
      setTimeout(() => {
        this.loaded = true;
      }, 1000);
    },
  },
  mounted() {
    this.reload();
  },
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-pivottable-ui-outputslot-nct9t?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-pivottable-ui_OutputSlot"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
