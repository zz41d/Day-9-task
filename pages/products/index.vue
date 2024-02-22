<template>
    <div>
      <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
        <ProductCard :product="p"/>
      </div>
     </div>
    </div>  
</template>

<script setup>
//  to apply layout to multiple pages
   definePageMeta({
    layout:'products'
   })
//  fetch the data
  const {data : products}= await useFetch('https://fakestoreapi.com/products')
  definePageMeta({
    middleware:["auth"]
})
</script>
