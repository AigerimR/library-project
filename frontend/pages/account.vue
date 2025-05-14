<template>
  <div class="top-section">
    <p>this is an account page - it's open to you because you're authenticated</p>
  </div>
  <v-container class="my-10 mx-2">
    <v-row class="w-100">
      <v-col>
        <v-card
            subtitle="This is a card subtitle"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            title="Borrowed Books"
        ></v-card>
      </v-col>
      <v-col>
        <v-card
            subtitle="This is a card subtitle"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            title="Favorites"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  });
</script>

<style scoped lang="scss">
  .top-section {
    height: 200px;
    background: url('/images/library-2.jpg') center 30%/cover;
    padding: 80px 0;
    font-weight: 600;
    text-align: center;
    p {
      background: white;
      width: fit-content;
      margin: auto;
    }
  }
  .v-row {
    width: 100%;
  }
</style>
