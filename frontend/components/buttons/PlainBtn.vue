<template>
  <v-btn
      variant="text"
      :text="text"
      :class="type"/>
</template>
<script setup lang="ts">
defineProps({
  text: String,
  type: String
})
</script>

<style scoped>
 .v-btn {
   font-weight: 600;
   color: white;
   padding: 0;
   margin: 0!important;
   &:hover {
     background: transparent;
     color: #fb8500;
   }
 }
</style>