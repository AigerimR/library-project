<template>
  <MainBtn
      :text="'Detective'"
      class="ma-2"
      @click="openBook" />
  <MainBtn
      :text="'Romantic'"
      class="ma-2"
      @click="openBook" />
  <MainBtn
      :text="'Horror'"
      class="ma-2"
      @click="openBook" />
  <MainBtn
      :text="'Children'"
      class="ma-2"
      @click="openBook" />
  <MainBtn
      :text="'History'"
      class="ma-2"
      @click="openBook" />
  <MainBtn
      :text="'Health'"
      class="ma-2"
      @click="openBook" />
</template>

<script setup lang="ts">
  const openBook = () => {
    navigateTo('/book');
  }
</script>