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

<style scoped lang="scss">
  .v-btn {
    background: $orange;
    color: white;
    &__overlay {
      background: transparent;
    }
    &:hover {
      background: white;
      color: black;
    }
    &.reverse {
      background: white;
      color: black;
      &:hover {
        background: $orange;
        color: white;
      }
    }
  }
</style>