<template>
  <div class="cart-amount">
      <p class="unit">{{ unit }}</p><p class="amount"> {{ amount }} </p> 
  </div>
</template>

<script lang="ts">
 import { defineComponent} from 'vue'; // Import the defineProps function from Vue

export default defineComponent({
  props: {
    unit: {
      type: String,
      default: '',
    },
    amount: {
      type: String,
      default: '',
    }
  }
})
</script>
