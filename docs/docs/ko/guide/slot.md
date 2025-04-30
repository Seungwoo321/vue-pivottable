# 슬롯

vue-pivottable-ui를 사용자 정의하기 위한 옵션입니다.

:::warning
슬롯과 범위가 지정된 슬롯(scoped slots) 모두 지원되지만, v-slot 지시문 사용을 권장합니다.
:::

## rendererCell

렌더러를 선택하는 선택 UI를 교체하려면 `rendererCell` 슬롯을 사용하세요.

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

집계기를 선택하는 선택 UI를 교체하려면 이것을 사용할 수 있습니다.

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

`td.pvtAxisContainer`의 너비를 고정하거나, 드래그 필드가 `td.pvtAxisContainer`를 오버플로우하지 않도록 하려면 이 슬롯을 사용할 수 있습니다.

::: tip
`td.pvtAxisContainer`는 **overflow-x:auto;** 속성을 가지고 있습니다.
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

이것은 `td.pvtOutput` 영역을 대체하는 슬롯입니다.

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
        <div class="p-1">로딩 중...</div>
      </template>
    </vue-pivottable-ui>
    <button
      class="btn btn-sm btn-secondary mt-1"
      :disabled="!loaded"
      @click="reload"
    >
      <i class="fas fa-redo mr-25"></i>
      다시 로드
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
   