<template>
  <div class="main-section">
    <v-container class="ma-2">
      <div v-if="title">
        <p class="text-h2">{{ title }}</p>
        <p class="text-h4">{{ subtitle }}</p>
      </div>
      <p v-else>Loading SSR content...</p>
      <Search />
    </v-container>
  </div>
  <v-container class="books-section mx-2 my-10">
    <v-row class="w-100">
      <v-col>
        <p class="text-h4">Popular Categories</p>
        <Categories />
      </v-col>
      <v-col>
        <BookCard />
      </v-col>
      <v-col>
        <BookCard />
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">
//taking page content from cashed data - if not fetch it
import BookCard from "~/components/cards/BookCard.vue";

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

<style scoped lang="scss">
  .main-section {
    height: 100vh;
    background: url('/images/library.jpg') center/cover;
    padding: 80px 0;
    font-weight: 600;
  }
</style>