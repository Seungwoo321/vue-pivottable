---
home: true
title: Home
heroImage: /images/logo.png
actions:
  - text: Get Started
    link: /guide/introduction.md
    type: primary

  - text: New version (Vue3)
    link: https://vue-pivottable.vercel.app/
    type: secondary

footer: MIT Licensed | Copyright © 2018-present Seungwoo Lee
---

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
