<template>
  <div class="container-home">
    <HeaderTitle title="Home Page" />
    <ButtonComponent @click="redirect('login')" label="login" class="button-1" severity="success"/>
    <ButtonComponent @click="redirect('register')" label="register" class="button-1" severity="success"/>
    <ButtonComponent @click="redirect('account')" label="my account" class="button-1" severity="success"/>
    <ButtonComponent @click="redirect('contructor')" label="order print" class="button-1" severity="success"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderTitle from "../components/HeaderTitle.vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { HeaderTitle },
  setup () {
     const route = useRouter();
     const redirect = (name: string) => {
        route.push({ path: name })
     }
     return {redirect}
  }
})
</script>