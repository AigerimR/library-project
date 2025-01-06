<template>
  <v-text-field
      ref="textFieldRef"
      hide-details="auto"
      :label="label"
      :rules="computedRules"
      :type="showPassword ? 'text' : 'password'"
      :append-inner-icon="showPassword ? mdiEye : mdiEyeOff"
      @click:append-inner="togglePasswordVisibility"
      v-model="password"
      @input="onInput"
  ></v-text-field>

</template>

<script setup>
  import { mdiEye, mdiEyeOff } from "@mdi/js";

  const props = defineProps({
    label: String,
    confirmPassword: String
  })
  const password = ref("");
  const showPassword = ref(false);
  const textFieldRef = ref(null);

  const emit = defineEmits(['passwordUpdate', 'valid']);
  const rules = [
    value => !!value || 'Required.',
    value => (value || '').length >= 8 || 'Min 8 characters',
    value => {
      const pattern = /[A-Z]/;
      return pattern.test(value) || 'Include uppercase letter'
    },
    value => {
      const pattern = /[#$^+=!*()@%&_?.-]/;
      return pattern.test(value) || 'Include special symbol'
    },
    value => {
      const pattern = /[0-9]/;
      return pattern.test(value) || 'Include a number'
    },
    value => (value || '').length <= 20 || 'Max 20 characters',
  ];

  const confirmRules = [
    value => !!value || 'Required.',
    value => value === props.confirmPassword || 'Password does not match',
  ];

  const computedRules = computed(() => {
      return !props.confirmPassword &&  props.confirmPassword!=='' ?  rules : confirmRules
    }
  );
  const onInput = () => {
    emit('passwordUpdate', password.value);
    validatePassword();
  }
  const validatePassword = () => {
    if(!props.confirmPassword &&  props.confirmPassword!=='') {

    }
    const isValid = !props.confirmPassword &&  props.confirmPassword!=='' ?
        rules.every(rule => rule(password.value) === true) :
        confirmRules.every(rule => rule(password.value) === true);
        emit("valid", isValid);
  }
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  watch(
      () => props.confirmPassword,
      () => {
        textFieldRef.value?.validate();
      }
  );
</script>