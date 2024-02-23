<template>
    <div class="grid grid-cols-2 gap-10" >
        <div class="p-7">
                <img :src="product.image" alt="product img" class="mx-auto my-7">
        </div>
        <div class="p-7">
          <h2 class="text-4x1 my-7">{{ product.title }}</h2>
          <p class="text-x1 my-7">Price -${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2 " >Product description:</h3>
          <p class="mb-7"> {{ product.description }}</p>
          <button class="btn flex hover:text-green-900" @click="addToCart()">
           <span v-if="inCart()"><i class="material-icons mr-2"> remove_shopping_cart</i>Remove from cart</span>
           <span v-else ><i class="material-icons mr-2"> add_shopping_cart</i>Add to Cart</span>
        </button>
        </div>
    </div>
</template>

<script setup>
  const {product}= defineProps(['product'])
  const cart =useCart();
  const found=ref(false)
  const {id} =useRoute().params
  
  function inCart(){
    return !!cart.value.find((product)=>product.id===id)
  }
  function addToCart(){
    if(!inCart()){
      cart.value.push({id:id, title:product.title, image:product.image})
    }else{
      cart.value=cart.value.filter((product)=>product.id!==id)
    }
  }

</script>

<style scoped>
  img{
    max-width: 400px;
  }
</style>