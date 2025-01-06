<template>
  <div class="main-section">
    <v-container>
      <div v-if="title">
        <p class="text-h2">{{ title }}</p>
        <p class="text-h4">{{ subtitle }}</p>
      </div>
      <p v-else>Loading SSR content...</p>
    </v-container>
  </div>
</template>

<script setup lang="ts">
//taking page content from cashed data - if not fetch it
const data = useState('pageStaticContent', () => null);

if(!data.value) {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const { data: fetchedData, error} = await useAsyncData('pageStaticContent', () =>
          $fetch(`${baseURL}/main-page`),
      {
        credentials: 'include',
        server: true,
        initialCache: true,
      }
  );
  if(error.value) {
    console.log(error);
  }
  data.value = fetchedData;
}

const title = computed(() => data.value?.data?.title);
const subtitle = computed(() => data.value?.data?.subtitle);
</script>

<style scoped>
  .main-section {
    height: 100vh;
    background: url('/images/main.jpg') center/cover;
    padding: 80px 0;
    color: white;
    font-weight: 600;
  }
</style>