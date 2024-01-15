<template>
  <div class="contact-container">
    <div>
      <HeaderTitle title="Get in touch" subtitle="with Killford Studios" />
      <div class="contact-description">
        Most of the information is available on our website, however if you can't find what you're looking for, have other
        inquiries or just want to send us some good vibes, don't be shy and reach out!
      </div>
      <InputTextComponent :value="contactInfo.firstName" type="contact-firstname" title="First Name *" id="firstname"/>
      <InputTextComponent :value="contactInfo.email" type="contact-email" title="Email *" id="email"/>
      <DropdownComponent :selectedSubject="contactInfo.subject"  type="contact-subject" :subjectSelections="subjectSelections" />
      <TextareaElement v-model="internalValue" rows="5" cols="30" class="contact-message"/>      
      <ButtonComponent @click="Send" label="SEND" class="button-2" severity="success"/>
    </div>    
  </div>
</template>

<script lang="ts">
import {ref,watch} from "vue";
import HeaderTitle from "./HeaderTitle.vue";
import InputTextComponent from "./InputTextComponent.vue";
import DropdownComponent from "./DropdownComponent.vue";
import { contactInfo, SetValue } from '../store/todoStore'

 import { defineComponent } from 'vue'; // Import the defineProps function from Vue

export default defineComponent({
   components: { HeaderTitle, DropdownComponent, InputTextComponent },
  setup() {
    const internalValue = ref(contactInfo.message);
    const subjectSelections = ref([
        { name: 'Info', code: '1' },
        { name: 'Framing/Mounting', code: '2' },
        { name: 'Digital Capture', code: '3' },
        { name: 'Printing', code: '4' }
    ]);

    watch(internalValue, (newValue) => {
      SetValue(newValue, 'contact-message')
    });

    const Send = () => {
      console.log("--- contact Info")
      console.log(contactInfo)
    }

    return {
      contactInfo,
      internalValue,
      Send,
      subjectSelections
    }
  }
})

</script>
