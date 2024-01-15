<template>
  <div class="input-text-component">
      <label :for="id">{{ title }}</label>
      <InputText v-model="internalValue" :id="id" aria-describedby="username-help" />
  </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import { loginInfo, SetValue } from '../store/todoStore'

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
      loginInfo,
      SetValue
    };
  },
})
</script>
