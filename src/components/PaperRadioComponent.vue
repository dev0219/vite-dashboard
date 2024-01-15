<template>
  <div class="paper-radio-action">
      <input type="radio" v-model="internalValue" :id="radioName" :name="val" :value="val" />
      <label :for="radioName">{{ radioName }}</label>
  </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import { paperCanvasInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  props: {
    radioName: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    val: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const internalValue = ref(props.value);
    watch(internalValue, (newValue) => {
      SetValue(newValue, 'paper-radio')
    });

    return {
      internalValue,
      paperCanvasInfo,
      SetValue
    };
  },
})
</script>
