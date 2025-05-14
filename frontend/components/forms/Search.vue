<template>
  <v-text-field
      hide-details="auto"
      label="Search book"
      v-model="query"
      @input="onInput"
  ></v-text-field>
</template>

<script setup>
const query = ref('');

const onInput = () => {
  console.log('serach by ', query.value)
}
</script>

<style scoped lang="scss">
.v-input {
  max-width: 500px;
  margin: auto;
}
</style>