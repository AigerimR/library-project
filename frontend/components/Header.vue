<template>
  <div class="header">
    <v-container class="d-flex justify-space-between">
      <div class="d-flex align-center">
        <PlainBtn
            :text="'Home'"
            class="ma-2"
            @click="navigateTo('/')" />
      </div>
      <div class="d-flex justify-end">
        <PlainBtn
            v-if="!userLoggedIn"
            :text="'Log In'"
            class="ma-2"
            @click="openLoginModal" />
        <PlainBtn
            v-if="!userLoggedIn"
            :text="'Sign Up'"
            class="ma-2"
            @click="openSignupModal" />
        <PlainBtn
            v-if="userLoggedIn"
            :text="'Log Out'"
            class="ma-2"
            @click="openLogoutModal" />
        <PlainBtn
            v-if="userLoggedIn"
            :text="'Account'"
            class="ma-2"
            @click="navigateTo('/account')" />
      </div>
    </v-container>
  </div>

</template>

<script setup lang="ts">
import {useModalsStore} from "~/stores/modals";

const token = useCookie('token');
const userLoggedIn = computed(()=> { return token.value !== '' });

const modalsStore = useModalsStore();
const openLoginModal = () => {
  modalsStore.openModal('login');
}
const openLogoutModal = () => {
  modalsStore.openModal('logout');
}
const openSignupModal = () => {
  modalsStore.openModal('signup');
}

</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    z-index: 100;
    background: rgba(255, 255, 255, 0.3);
  }
</style>