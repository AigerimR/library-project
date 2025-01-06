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
        <MainBtn
            v-if="!userLoggedIn"
            :text="'Log In'"
            class="ma-2"
            @click="openLoginModal" />
        <MainBtn
            v-if="!userLoggedIn"
            :text="'Sign Up'"
            :type="'reverse'"
            class="ma-2"
            @click="openSignupModal" />
        <MainBtn
            v-if="userLoggedIn"
            :text="'Log Out'"
            class="ma-2"
            @click="openLogoutModal" />
        <MainBtn
            v-if="userLoggedIn"
            :text="'Account'"
            :type="'reverse'"
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0))
  }
</style>