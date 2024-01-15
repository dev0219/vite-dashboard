<template>
    <div class="qty-container">
      <p>Qty.</p>
      <InputNumber v-model="internalValue" showButtons buttonLayout="horizontal" :min="0">
          <template #incrementbuttonicon>
              <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
              <span class="pi pi-minus" />
          </template>
      </InputNumber> 
  </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import { qtyInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 0,
    }
  },
  setup(props, { emit }) {
    const internalValue = ref(props.value);
    watch(internalValue, (newValue) => {
      console.log( typeof newValue)
      SetValue(newValue, 'qty')
    });

    return {
      internalValue,
      qtyInfo,
      SetValue
    };
  },
})
</script>
