
<template>
    <div>
      <h1>Login</h1>
      <form @submit="login">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const email = ref('');
  const password = ref('');
  
  const login = () => {
    const  isLoggedIn=false
    if(!isLoggedIn && to.path!=='/login'){
        return navigateTo("/login")
    }
    else if(isLoggedIn && to.path==='/login')
        
    return navigateTo("/")

  };
  </script>
  