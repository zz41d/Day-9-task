<template>
    <div>
      <h2>About</h2>
      <p>This page is all about Nuxt.js</p>
      <p>By using components, pages, and layouts this pages have been created. Also we're using definePageMeta() composable function and defineProps(). 
        With the help of middleware and plugins we're logging in to the web page and if there is new user then they've to register</p>
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
