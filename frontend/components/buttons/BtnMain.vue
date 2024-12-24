<template>
  <v-btn
      rounded="lg"
      max-width="200"
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
  background: #fb8500;
  color: white;
  &:hover {
    background: transparent;
    color: black;
  }
  &.reverse {
    background: transparent;
    color: black;
    &:hover {
      background: #fb8500;
      color: white;
    }
  }

}
</style>