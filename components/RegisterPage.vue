<!-- RegisterPage.vue -->
<template>
    <div>
      <h1>Register</h1>
      <form @submit="register">
        <input type="text" v-model="username" placeholder="Username" required>
        <!-- <input type="text" v-model="email" placeholder="Email" required> -->
        <input type="password" v-model="password" placeholder="Password" required>
        <button @click="register">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const username = ref('');
  // const email = ref('');
  const password = ref('');
  
  const register = () => {
    
  };
  </script>
  