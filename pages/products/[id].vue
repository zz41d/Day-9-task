<template>
    <div>
        <!-- <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi iste do
            lore illum sint rerum laudantium provident impedit nisi quam?</p> -->

        <!-- <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p> -->
        <Head>
            <Title>Baazar| {{ product.title }}</Title>
            <Meta name="Description" :content="product.Description"/>  
        </Head>
        <ProductDetails :product="product"/>

    </div>
</template>

<script setup>
 const {id} =useRoute().params
 const uri= 'https://fakestoreapi.com/products/'+id                 
 //  fetch the data 
 const { data:product }=await useFetch(uri)
 
 definePageMeta({
    layout:'products'
   })
   definePageMeta({
    middleware:["auth"]
})   


</script>

<style scoped>

</style>