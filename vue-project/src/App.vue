<script setup>
import { VuePivottable } from '../../src/index'
</script>

<template>
  <VuePivottable
    props=""
    :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
    :rows="['color']"
    :cols="['shape']"
  >
  </VuePivottable>
</template>
