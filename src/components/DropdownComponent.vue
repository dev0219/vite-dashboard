<template>
  <div class="dropdown-container">
      <label>Subject</label>
      <Dropdown v-model="internalValue" :options="subjectSelections" optionLabel="name" placeholder="Select one..." class="custom-dropdown" />
  </div>
</template>

<script lang="ts">
 import { defineComponent, watch,ref } from 'vue'; // Import the defineProps function from Vue
  import { loginInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  props: {
    selectedSubject: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '',
    },
    subjectSelections: {
      type: Array,
      default: () => []
    },
  },
  setup(props, { emit }) {
    const internalValue = ref();
    watch(internalValue, (newValue) => {
      SetValue(newValue.code, props.type)
    });

    return {
      internalValue,
      loginInfo,
      SetValue
    };
  },
})
</script>
