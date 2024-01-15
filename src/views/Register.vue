<template>
  <div class="login-home">
    <div>
      <HeaderTitle title="Account Registration" />
      <InputTextComponent :value="registerInfo.firstName" type="firstName" title="First Name *" id="firstname"/>
      <InputTextComponent :value="registerInfo.lastName" type="lastName" title="Last Name *" id="lastname"/>
      <InputTextComponent :value="registerInfo.email" type="register-email" title="Email Address *" id="email"/>
      <InputPasswordComponent :value="registerInfo.password" type="register-password" title="Password *" id="password"/>
      <InputPasswordComponent :value="registerInfo.verifyPassword" type="register-verify-pass" title="Verify Password *" id="verifypassword"/>
      <ButtonComponent label="register" @click="Register" class="button-2" severity="success"/>
      <ContactToEmail email="test.email.com" />
    </div>    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderTitle from "../components/HeaderTitle.vue";
import InputTextComponent from "../components/InputTextComponent.vue";
import InputPasswordComponent from "../components/InputPasswordComponent.vue";
import HrLineComponent from "../components/HrLineComponent.vue";
import ContactToEmail from "../components/ContactToEmail.vue";
import { registerInfo, SetValue } from '../store/todoStore'

export default defineComponent({
  components: { HeaderTitle,InputTextComponent,InputPasswordComponent ,ContactToEmail,HrLineComponent},
  setup () {
    
    const Register = () => {
      console.log("--- Register Information ---")
      console.log(registerInfo)
    }

    return { registerInfo, SetValue ,Register}
  }
})
</script>