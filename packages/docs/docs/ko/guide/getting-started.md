---
sidebarDepth: 1
---

# 시작하기

## 설치

> ⚠️ **최신 버전**의 vue-pivottable은 **Vue 3**만 지원합니다. Vue 3을 사용 중이라면 [vue3-pivottable](https://github.com/vue-pivottable/vue3-pivottable) 저장소를 참고하세요.

### 직접 다운로드 / CDN

* unpkg: <https://unpkg.com/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js>
* jsdelivr: <https://cdn.jsdelivr.net/npm/vue-pivottable@0.4.68/dist/vue-pivottable.umd.min.js>

Vue 다음에 vue-pivottable을 포함하세요:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-pivottable.umd.min.js"></script>
```

### NPM 설치

```bash
# install in your project
npm install vue-pivottable@0.4.68
```

## 사용 방법

컴포넌트를 import 하고 사용하세요.

### Vue Pivottable 사용 예시

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

### Vue Pivottable UI 사용 예시

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
