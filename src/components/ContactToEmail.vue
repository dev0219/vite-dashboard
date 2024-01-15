<template>
  <div class="contact-to-email">
    <p>Do you have any question? Contact us at</p>
    <span>{{ email }}</span>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'; // Import the defineProps function from Vue

export default defineComponent({
  props: {
    email: {
      type: String,
      default: ''
    },
  },
})
</script>
