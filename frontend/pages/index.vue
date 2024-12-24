<template>
  <div class="d-lg-flex justify-end">
    <BtnMain :text="'Login'" class="ma-2"></BtnMain>
    <BtnMain :text="'Sign Up'" :type="'reverse'" class="ma-2"></BtnMain>
<!--    <p class="text-h2">{{ page.title}}</p>-->
<!--    <p class="text-h4">{{ page.subtitle}}</p>-->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

let page = ref({});

onMounted(async () => {
  const { data, error} = await useFetch('http://localhost:1337/api/main-page');
  // page.value = data?.value?.data;
  console.log(data);

  if (error.value) {
    console.error('Error fetching data:', error.value);
  } else {
    page.value = data.value;
    console.log(page.value);
  }
})

</script>