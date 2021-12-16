<template>
    <vue-pivottable
        :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
        :rows="['color']"
        :cols="['shape']"
    >
    </vue-pivottable>
</template>

<script>
import { VuePivottable } from '../../../src'
import '../../../dist/vue-pivottable.css'
export default {
    components: {
        VuePivottable
    }
}
</script>