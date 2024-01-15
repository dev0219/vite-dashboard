<template>
  <div class="picture-item">
      <img :src="`src/images/${url}`" />
      <Badge v-show="iserror == 'true'" value="!" severity="danger"></Badge>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  components: { },
  props: {
    url: {
      type: String,
      default: ''
    },
    iserror: {
      type: String,
      default: ''
    }
  },
})
</script>
