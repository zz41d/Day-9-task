<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Baazar</NuxtLink>
        <input
          type="search"
          v-model="search"
          @input="search"
          placeholder="search for products"
        />
        <ul class="flex gap-4">
          <li><NuxtLink to="/" class="hover:text-green-700">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/products" class="btn hover:text-white-700"
              >Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cart" class="hover:text-green-700">Cart</NuxtLink>
          </li>
          <li v-if="!userStatus">
            <NuxtLink to="/login" class="hover:text-green-700">Login</NuxtLink>
          </li>
          <li v-if="!userStatus">
            <NuxtLink to="/register" class="hover:text-green-700"
              >Register
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-green-700">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>

  <!-- output content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template> 
<script setup>
//   import { useSSRContext } from 'vue';
//  const {login}=useNuxtApp()
const search = ref("");
const users = usersList();
const userStatus = isLoggedIn();

const cart = useCart();
console.log(cart.value.length);
//  definePageMeta({
//     middleware:["auth"]
// })
</script>
<style scoped>
.router-link-exact-active {
  color: #32803b;
}
</style>

