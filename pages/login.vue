<template>
  <LoginPage />
</template>
  
  <script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
  