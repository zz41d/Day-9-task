<template>
    <div class="min-h-screen flex justify-center bg-gray-100 from-gray-800 to-white-900">
      <div class="bg-transparent card">
        <h1 class="text-3xl text-center font-extrabold mb-6 text-gray-800 mt-5">Shopping Cart</h1>
  
        <div v-if="cart.length === 0" class="text-gray-600">
          Your cart is empty.
        </div>
  
        <div v-else>
          <div v-for="(product, index) in cart" :key="index" class="flex items-center mb-8">
            <img :src="product.image" alt="Product" class="w-auto h-52 object-cover rounded-md mr-6 ">
            <div>
              <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
              <button @click="removeItem(index)" class="text-red-500 hover:text-red-700 focus:outline-none">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
const cart=useCart()

function removeItem(index) {
  console.log(index)
  console.log(cart.index)
  cart.value=cart.value.filter((product,i)=>i!==index)
}

definePageMeta({
    layout:'products'
   })
definePageMeta({
    middleware:["auth"]
})
console.log(cart.value)
</script>