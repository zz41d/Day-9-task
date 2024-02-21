<!-- Custom layot for the product   page -->

<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav  class="container mx-auto p-4">
            <NuxtLink to="/products" class="font-bold">Nuxt Link Merch</NuxtLink>
            
        </nav>
      </header>
      </div>
      <!-- output content -->
      <div class="container mx-auto p-4">
        <slot/>
      </div>
      <footer class="container mx-auto p-4 flex justify-between border-t-2 ">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register </NuxtLink></li>

      </ul>
    </footer>
</template> 
<style scoped>      
  .router-link-exact-active {
    color: #32803b  ;
  }
</style>