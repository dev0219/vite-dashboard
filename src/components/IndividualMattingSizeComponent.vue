<template>
  <div class="individual-matting-size">
      <MattingSizeitemComponent :value="mattingInfo.sizeTop" id="top" type="mat-top" title="Top" />
      <MattingSizeitemComponent :value="mattingInfo.sizeBottom" id="bottom" type="mat-bottom" title="Bottom" />
      <MattingSizeitemComponent :value="mattingInfo.sizeLeft" id="left" type="mat-left" title="Left" />
      <MattingSizeitemComponent :value="mattingInfo.sizeRight" id="right" type="mat-right" title="Right"/>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'; // Import the defineProps function from Vue
 import MattingSizeitemComponent from "./MattingSizeitemComponent.vue";
import { mattingInfo} from '../store/todoStore'

export default defineComponent({
  components:{MattingSizeitemComponent},
  setup(props, { emit }) {
    return {
      mattingInfo
    };
  },
})
</script>
