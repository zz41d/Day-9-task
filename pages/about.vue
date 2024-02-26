<template>
  <div>
    <h2>About us</h2>
    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div
          class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
        >
          <div class="md:5/12 lg:w-5/12">
            <img :src="imageSrc" :alt="imageAlt" loading="lazy" />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              {{ title }}
            </h2>
            <p class="mt-6 text-gray-600">{{ paragraph1 }}</p>
            <p class="mt-4 text-gray-600">{{ paragraph2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imageSrc =
  "https://www.shutterstock.com/image-photo/blurred-showcases-fashion-boutique-sportswear-260nw-524159932.jpg  ";
const imageAlt = "image";
const title = "Baazar provides a exclusive range of Clothings and Accessories";
const paragraph1 =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!";
const paragraph2 =
  "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.";
definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 35px;
}
p {
  margin: 20px 0;
}
</style>