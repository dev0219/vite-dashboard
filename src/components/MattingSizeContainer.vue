<template>
  <div class="individual-matting-size-container" >
      <p class="individual-matting-header-title">Individual Matting Size</p>
      <IndividualMattingSizeComponent />
  </div>
</template>

<script lang="ts">
 import { defineComponent,ref ,watch} from 'vue'; // Import the defineProps function from Vue
import IndividualMattingSizeComponent from "./IndividualMattingSizeComponent.vue";

export default defineComponent({
  components:{IndividualMattingSizeComponent},
  setup(props, { emit }) {
    
  },
})
</script>
