<template>
  <div class="login-home">
    <div>
      <HeaderTitle title="Login to your Kilford Studios Account " />
      <InputTextComponent :value="loginInfo.email" type="email"  title="Email Address" id="email"/>
      <InputPasswordComponent :value="loginInfo.password" type="login-password" title="Password" id="password"/>
      
      <ButtonComponent @click="SignIn" label="sign in" class="button-2" severity="success"/>
      <p class="forgot-password">Forgot your password?</p>
      <HrLineComponent title="Don’t have a account?" />
      <ButtonComponent label="Create account" class="button-3" severity="secondary" outlined/>
      <ContactToEmail email="test.email.com" />
    </div>    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderTitle from "../components/HeaderTitle.vue";
import InputTextComponent from "../components/InputTextComponent.vue";
import InputPasswordComponent from "../components/InputPasswordComponent.vue";
import HrLineComponent from "../components/HrLineComponent.vue";
import ContactToEmail from "../components/ContactToEmail.vue";
import { loginInfo } from '../store/todoStore'

export default defineComponent({
  components: { HeaderTitle,InputTextComponent,InputPasswordComponent ,ContactToEmail,HrLineComponent},
  setup() {

    const SignIn = () => {
      console.log("--- login Information ", loginInfo);
    };

    return {
      SignIn,
      loginInfo
    };
  },
})
</script>