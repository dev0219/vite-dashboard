<template>
  <div class="matting-color-item" @click="SetmatColor(color)" :style="'background:'+color+';border: 1px solid gray;'">
  </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import { mattingInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '',
    }
  },
  setup(props, { emit }) {

    const SetmatColor = (color: string) => {
      SetValue(color, 'mat-color')
    }

    return {
      mattingInfo,
      SetValue,
      SetmatColor
    };
  },
})
</script>
