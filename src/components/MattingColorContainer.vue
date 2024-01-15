<template>
  <div class="individual-matting-color-container" >
      <p class="individual-matting-header-title">Matting Color</p>
      <div class="individual-matting-colors">
          <MattingColorItemComponent color="white" />
          <MattingColorItemComponent color="black" />
          <MattingColorItemComponent color="#808080" />
          <MattingColorItemComponent color="#E1CDAF" />
      </div>
  </div> 
</template>

<script lang="ts">
 import { defineComponent } from 'vue'; // Import the defineProps function from Vue
import MattingColorItemComponent from "./MattingColorItemComponent.vue";

export default defineComponent({
  components: {MattingColorItemComponent}
})
</script>
