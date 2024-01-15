<template>
  <div class="contact-page">
    <div>
      <ContactUsComponent />
    </div>    
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import ContactUsComponent from "../components/ContactUsComponent.vue";

export default defineComponent({
  components: { ContactUsComponent},
  setup () {
  }
})
</script>
