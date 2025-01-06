<template>
  <v-text-field
      hide-details="auto"
      label="Email"
      :rules="rules"
      v-model="email"
      @input="onInput"
  ></v-text-field>
</template>

<script setup>
  const email = ref('');
  const emit = defineEmits(['emailUpdate', 'valid']);
  const rules = [
    value => !!value || 'Required.',
    value => (value || '').length <= 30 || 'Max 30 characters',
    value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Invalid e-mail.'
    },
  ];
  const onInput = () => {
    emit("emailUpdate", email.value);
    validateEmail();
  }
  const validateEmail = () => {
    const isValid = rules.every(rule => rule(email.value) === true);
    emit("valid", isValid);
  }
</script>