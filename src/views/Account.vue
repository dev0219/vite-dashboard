<template>
  <div class="account-home">
      <HeaderTitle title="Your Account" />
      <AccountCardComponent title="Your Order" src="order.png" :menus="menu1" />
      <AccountCardComponent title="Your Account" src="account.png" :menus="menu2" />  
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue'
import HeaderTitle from "../components/HeaderTitle.vue";
import AccountCardComponent from "../components/AccountCardComponent.vue";

export default defineComponent({
  components: { HeaderTitle, AccountCardComponent },
  setup () {
    const menu1 = ref(['track order']);
    const menu2 = ref(['chnage delivery addresses', 'chnage registration data']);
    return {
      menu1,
      menu2,
    };
  }
})
</script>
