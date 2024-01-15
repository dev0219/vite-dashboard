<template>
  <div class="hr-line-container">
    <hr />
      <div>{{ title }}</div>
    <hr />
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'; // Import the defineProps function from Vue

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
  },
})
</script>
