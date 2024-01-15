<template>
  <div class="matting-size-item">
        <InputText v-model="internalValue" :id="id"/>
        <label :for="id">{{ title }}</label>
    </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import { mattingInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    value: {
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
      SetValue(newValue, props.type)
    });

    return {
      internalValue,
      mattingInfo,
      SetValue
    };
  },
})
</script>
