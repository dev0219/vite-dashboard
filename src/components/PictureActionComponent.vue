<template>
  <div class="picture-action-item">
      <div>
          <img :src="`/src/images/icons/${src}`" />
          <p>{{ title }}</p>
      </div>                            
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  components: { },
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
})
</script>
