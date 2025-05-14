<template>
  <v-btn
      variant="plain"
      :ripple="false"
      :text="text"
      :class="type"/>
</template>
<script setup lang="ts">
defineProps({
  text: String,
  type: String
})
</script>

<style scoped lang="scss">
 .v-btn {
   font-weight: 600;
   padding: 0;
   min-width: fit-content;
   &:hover {
     color: $orange;
   }
 }
</style>