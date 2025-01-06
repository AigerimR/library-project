<template>
  <v-dialog
      v-model="modalLogin"
      max-width="480"
  >
    <v-card title="Log In" class="modal-card">
      <div class="w-100 d-flex flex-column justify-center align-center">
        <EmailInput
            class="w-100"
            @valid="validateFormEmail"
            @emailUpdate="updateEmail" />
        <PasswordInput
            class="w-100"
            @valid="validateFormPassword"
            @passwordUpdate="updatePassword"
            :label="'Password'" />
        <p v-if="loginError" style="color: red;">
          Couldn't log you in. Incorrect password or email.
        </p>
        <v-card-actions>
          <MainBtn
              :text="'Log In'"
              class="ma-2"
              :disabled="!formValid"
              @click="login" />
          <v-btn
              class="modal-close-btn"
              density="compact"
              @click="closeModal"
              :icon="mdiClose"
              color="#fb8500" />
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {useModalsStore} from "~/stores/modals.js";
import { mdiClose } from "@mdi/js";
import PasswordInput from "~/components/forms/PasswordInput.vue";

const modalsStore = useModalsStore();
const modalLogin = computed(() => modalsStore.login);
const email = ref('');
const password = ref('');
const emailValid = ref(false);
const passwordValid = ref(false);
const loginError = ref(false);

const formValid = computed(() => emailValid.value && passwordValid.value);

const updateEmail =(val) => {
  email.value = val;
  loginError.value = false;
}
const updatePassword =(val) => {
  password.value = val;
  loginError.value = false;
}

const closeModal = () => {
  modalsStore.closeModal('login');
}
const validateFormEmail = (value) => {
  emailValid.value = value;
}
const validateFormPassword =(value) => {
  passwordValid.value = value;
}

const login = async() => {
  try {
    const response = await $fetch(
        `http://localhost:1337/api/auth/local`,
        {
          method: 'POST',
          body: {
            "identifier": email.value,
            "password": password.value
          }
        }
    );
    if(response) {
      loginError.value = false;
      //save token in cookies
      const token = useCookie('token');
      token.value = response.jwt;
      closeModal();
    }
  } catch (err) {
    console.log(err);
    loginError.value = true;
  }
}


</script>