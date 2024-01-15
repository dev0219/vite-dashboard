<template>
  <div class="header-title">
   {{ title }}
    <div class="sub-title">
      {{ subtitle }}
    </div>
   
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
    subtitle: {
      type: String,
      default: ''
    },
  },
})
</script>
