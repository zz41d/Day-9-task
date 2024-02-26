<template>
  <!-- <div>
      <h2>Home</h2>
      <p>Routing in Nuxt.js with middleware and pluggins</p>
      <p>Components, Pages, and Layouts.</p>
    </div> -->
  <div class="relative overflow-hidden bg-white">
    <div :class="heroClass">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            {{ title }}
          </h1>
          <p class="mt-4 text-xl text-gray-500">{{ description }}</p>
        </div>
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div
              aria-hidden="true"
              class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div :class="imageStyle" class="overflow-hidden rounded-lg">
                      <img
                        :src="image.src"
                        :alt="image.alt"
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/products"
              class="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
              >Shop Collection >></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Summer styles are finally here";
const description =
  "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.";

const images = [
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    alt: "Image 1",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    alt: "Image 2",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    alt: "Image 3",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    alt: "Image 4",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    alt: "Image 5",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
    alt: "Image 6",
  },
  {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
    alt: "Image 7",
  },
];

const heroClass = "pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40";
const imageStyle = "h-64 w-44 overflow-hidden rounded-lg";
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