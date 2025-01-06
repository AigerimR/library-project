<template>
  <p>this is account page - it's open to you because you're authenticated</p>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
</script>
