<template>
    <div>
      <h2>Home</h2>
      <p>Routing in Nuxt.js with middleware and pluggins</p>
      <p>Components, Pages, and Layouts.</p>
    </div>
</template>

<script setup>
    definePageMeta({
    middleware:["auth"]
})
</script>

<style scoped>
   h2{
    margin-bottom: 20px;
    font-size: 35px;
   }
   p{
    margin: 20px 0;
   }
</style>