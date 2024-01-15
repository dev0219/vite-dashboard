<template>
  <div class="paper-canvas-detail">
      <div class="paper-canvas-picture">
          <img  :src="`/src/images/${url}`"  />
      </div>
      <div class="paper-canvas-descripiton">
          {{ description }}
      </div>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'; // Import the defineProps function from Vue

export default defineComponent({
  props: {
    url: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
})
</script>
