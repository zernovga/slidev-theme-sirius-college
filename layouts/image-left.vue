<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
  width: {
    type: String,
    default: '50%',
  }
})

const width_text = computed(() => {
  return 100 - Number(props.width.replace('%', '')) + '%'
})

</script>


<template>
  <div class="slidev-layout image-left w-full h-full grid" :class="props.layoutClass">
    <div class="col-image" :class="props.class" :style="{flex : props.width}">
      <slot name="image" />
    </div>
    <div class="col-text" :class="props.class" :style="{flex : width_text}">
      <slot />
    </div>
  </div>
</template>