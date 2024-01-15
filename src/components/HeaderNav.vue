<template>
  <div class="header-navbar">
    <div class="custom-header-container">
      <div class="logo-container">
        <img src="../images/icons/logo.png" class="desktop-v" />
        <img src="../images/icons/mobile-logo.png" class="mobile-v" />
      </div>
      <div class="configuration-container desktop-v" v-if="showHeaderActions">
        <InputText v-model="configuration"/>
        <img src="../images/icons/doc.png" />
        <img src="../images/icons/file.png" />
        <img src="../images/icons/txt.png" />
      </div>
      <div class="nav-actions"  v-if="showHeaderActions">
        <img src="../images/icons/user.png" class="desktop-v" @click="ViewSettingDesktop()"/>
        <img src="../images/icons/cart.png" class="desktop-v" />
        <img src="../images/icons/close.png" v-if="issetting && !isuser" @click="ViewSetting('close')" class="mobile-v" />
        <img src="../images/icons/setting.png" v-if="!issetting" @click="ViewSetting('setting')" class="mobile-v" />
        <img src="../images/icons/close.png" v-if="!issetting && isuser" @click="ViewSetting('close')" class="mobile-v" />
        <img src="../images/icons/user.png" v-if="!isuser" @click="ViewSetting('user')" class="mobile-v" />
        <img src="../images/icons/cart.png" class="mobile-v" />
      </div>
    </div>
    <div class="setting-data" v-if="issetting && showHeaderActions">
        <div class="mobile-configration">
          <InputText v-model="configuration"/>
        </div>
        <div class="mobile-nav-actions">
          <img src="../images/icons/doc.png" />
          <img src="../images/icons/file.png" />
          <img src="../images/icons/txt.png" />
        </div>       
    </div>
    <div class="user-data"  v-if="(isuser || isuser_desktop) && showHeaderActions">
      <p class="user-name">Olá, Nome Sobrenome</p>
      <hr />
      <p class="user-actions">Track delivery</p>
      <p class="user-actions">Delivery addresses</p>
      <p class="user-actions">Update profile</p>
      <hr />
      <p class="sign-out">Sair</p>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent ,ref, watchEffect} from 'vue'
import { useRoute ,useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const router = useRouter();
    const showHeaderActions = ref();
    const configuration = ref("unamed configuration")
    const issetting = ref()
    const isuser = ref()
    const isuser_desktop = ref()

    const ViewSetting = (key: string) => {
      if (key == 'setting') {
        console.log("-- key", key)
        issetting.value = true
        isuser.value = false
      } else if (key == 'user') {
        issetting.value = false;
        isuser.value = true
      } else {
        issetting.value = false;
        isuser.value = false
      }
    }

    const ViewSettingDesktop = () => {
      isuser_desktop.value = !isuser_desktop.value
    }

    watchEffect(() => {
      const currentRoute = router.currentRoute.value;
      showHeaderActions.value = currentRoute.meta.showHeaderActions;
    });

    return {showHeaderActions,configuration, ViewSetting,issetting, isuser,ViewSettingDesktop,isuser_desktop}
  }
})
</script>
