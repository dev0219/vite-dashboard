<template>
  <div class="default-matting-opt" v-show="advancedOptionVisible">
      <p class="individual-matting-header-title">Matting Size</p>
      <input type="range" id="slider" v-model="internalValue" @input="updateTooltip" @mouseenter="showTooltip" @mouseleave="hideTooltip" max="100" min="0">
      <div id="tooltip" v-show="tooltipVisible" :style="{ left: tooltipLeft + 'px' }">{{ internalValue }}</div>
      <div class="triangle triangle-top" v-show="tooltipVisible" :style="{ 'margin-left': tooltipLeft + 'px' }"></div>
  </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import { mattingInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  props: {
    sliderValue: {
      type: Number,
      default: 0,
    },
    advancedOptionVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const internalValue = ref(props.sliderValue);
    const tooltipLeft = ref();
    const tooltipVisible = ref(false);

    const updateTooltip = () => {
      tooltipVisible.value = true;
      updateTooltipPosition();
    }

    const showTooltip = () => {
      tooltipVisible.value = true;
      updateTooltipPosition();
    }

    const hideTooltip = () => {
      tooltipVisible.value = false;
      updateTooltipPosition();
    }

    const updateTooltipPosition = () => {
      const slider = document.getElementById('slider') as HTMLInputElement;
      const tooltip = document.getElementById('tooltip');
      const thumbSize = 16; // Adjust this value based on your slider's thumb size
      
      if (slider && tooltip) {
        const denominator = parseInt(slider.max) - parseInt(slider.min);
        
        if (denominator !== 0) {
          const thumbPosition = (internalValue.value / denominator) * (slider.offsetWidth - thumbSize);
          tooltipLeft.value = thumbPosition + slider.offsetLeft - (slider.offsetWidth / 2) + thumbSize / 2;
        } else {
          console.error("Denominator is zero. Check the slider's min and max values.");
        }
      } else {
        console.error("Slider or tooltip element not found.");
      }
    }

    watch(internalValue, (newValue) => {
      SetValue(newValue, 'mat-slider')
    });

    return {
      internalValue,
      tooltipLeft,
      tooltipVisible,
      updateTooltip,
      showTooltip,
      hideTooltip,
      updateTooltipPosition,
      SetValue
    };
  },
})
</script>
