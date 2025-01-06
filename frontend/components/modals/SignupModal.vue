<template>
  <v-dialog
      v-model="modalSignup"
      max-width="480"
  >
    <v-card title="Sign Up" class="text-center modal-card">
      <div class="w-100 d-flex flex-column justify-center align-center">
        <EmailInput
            class="w-100"
            @valid="validateFormEmail"
            @emailUpdate="updateEmail" />
        <PasswordInput
            class="w-100"
            :label="'Password'"
            @valid="validateFormPassword1"
            @passwordUpdate="updatePassword1" />
        <PasswordInput
            class="w-100"
            :label="'Confirm Password'"
            :confirmPassword="password1"
            @valid="validateFormPassword2"
            @passwordUpdate="updatePassword2" />
        <p v-if="loginError" style="color: red;">
          Something went wrong. Couldn't sign you up.
        </p>
        <v-card-actions>
          <MainBtn
              :text="'Sign Up'"
              class="ma-2"
              :disabled="!formValid"
              @click="signup" />
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
import PasswordInput from "~/components/forms/PasswordInput.vue";
import {mdiClose} from "@mdi/js";

const modalsStore = useModalsStore();
const modalSignup = computed(() => modalsStore.signup);

const email = ref('');
const password1 = ref('');
const password2= ref('');
const emailValid = ref(false);
const passwordValid1 = ref(false);
const passwordValid2 = ref(false);
const loginError = ref(false);

const formValid = computed(() => emailValid.value &&
    passwordValid1.value && passwordValid2.value &&
    password1.value === password2.value);

const updateEmail =(val) => {
  email.value = val;
  loginError.value = false;
}
const updatePassword1 =(val) => {
  password1.value = val;
  loginError.value = false;
}
const updatePassword2 =(val) => {
  password2.value = val;
  loginError.value = false;
}
const closeModal = () => {
  modalsStore.closeModal('signup');
}
const validateFormEmail = (value) => {
  emailValid.value = value;
}
const validateFormPassword1 =(value) => {
  passwordValid1.value = value;
}
const validateFormPassword2 =(value) => {
  passwordValid2.value = value;
}
const signup = async() => {
  try {
    const response = await $fetch(
        `http://localhost:1337/api/auth/local/register`,
        {
          method: 'POST',
          body: {
            "username": email.value,
            "email": email.value,
            "password": password1.value
          }
        }
    );
    if(response) {
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