<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between ">
            <NuxtLink to="/" class="font-bold">Nuxt Link</NuxtLink>
            <ul class="flex gap-4">
                <li class="hover:text-green-700" ><NuxtLink to="/">Home</NuxtLink></li>
                <li class="hover:text-green-700" ><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                <li class="hover:text-green-700" ><NuxtLink to="/cart">Cart</NuxtLink></li>
                <li class="hover:text-green-700" ><NuxtLink to="/login">Login</NuxtLink></li>
                <li class="hover:text-green-700" ><NuxtLink to="/register">Register </NuxtLink></li>
                <li class="hover:text-green-700" ><NuxtLink to="/about">About</NuxtLink></li>
            </ul>
        </nav>
      </header>
     </div>
      <!-- output content -->
      <div class="container mx-auto p-4">
        <slot/>
      </div>
</template>
<script setup>
//   import { useSSRContext } from 'vue';
//  const {login}=useNuxtApp()
 const users=usersList();
 const cart=useCart()
 console.log(cart.value.length)
 definePageMeta({
    middleware:["auth"]
})
</script>
<style scoped>      
  .router-link-exact-active {
    color: #32803b;
  }
</style>