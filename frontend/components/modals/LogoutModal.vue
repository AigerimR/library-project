<template>
  <v-dialog
      v-model="modalLogout"
      max-width="480"
  >
    <v-card title="Log Out">
      <v-card-actions>
        <v-btn
            text="Log Out"
            variant="text"
            @click="logout"
        ></v-btn>
        <v-btn
            text="Close"
            variant="text"
            @click="closeModal"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useModalsStore } from "~/stores/modals.js";

const modalsStore = useModalsStore();
const modalLogout = computed(() => modalsStore.logout);


const closeModal = () => {
  modalsStore.closeModal('logout');
}
const logout = async() => {
  const token = useCookie('token');
  token.value = '';
  closeModal();
  navigateTo('/');
}
</script>