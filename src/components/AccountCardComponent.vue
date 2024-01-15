<template>
  <div class="account-card-container">
    <div class="card-body">
      <img alt="user" :src="`/src/images/${src}`"  />
     <div class="card-side" >
       <div class="card-header-title">
        {{ title }}
       </div>
       <div class="card-menu-title"  v-for="(menu, i) in menus" v-bind:key="i">
         {{ menu }}
       </div>
     </div>
     <div/>
    </div>     
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'; // Import the defineProps function from Vue

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    menus: {
      type: Array,
      default: () => []
    },
  },
})
</script>
