<template>
  <div class="top-section">
    <p>this is an account page - it's open to you because you're authenticated</p>
  </div>
  <v-container class="my-10 mx-2">
    <v-row class="w-100">
      <v-col>
        <v-card
            subtitle="Rowling, J. K."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            title="Harry Potter and the Philosopher's Stone"
        ></v-card>
      </v-col>
      <v-col>
        <p> image here </p>
        <MainBtn
            :text="'Borrow'"
            class="ma-2"
            @click="borrowBook" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

  const borrowBook = () => {
    console.log('add to the list of borrowed books - in DB as well')
  }
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
