<template>
  <HeaderNav v-if="showHeader"/>
  <router-view />
  <FooterComponent v-if="showFooter"/>
</template>

<script lang="ts">
import { defineComponent ,ref, watchEffect} from 'vue'
import FooterComponent from "./components/FooterComponent.vue";
import HeaderNav from "./components/HeaderNav.vue";
import { useRoute ,useRouter } from 'vue-router'

export default defineComponent({
  components: { FooterComponent,HeaderNav },
  setup () {
    const route = useRoute()
    const router = useRouter();
    const showFooter = ref();
    const showHeader = ref();
    watchEffect(() => {
      const currentRoute = router.currentRoute.value;
      showFooter.value = currentRoute.meta?.showFooter || false;
      showHeader.value = currentRoute.meta?.showHeader || false;
    });

    return {showFooter,showHeader}
  }
})
</script>
