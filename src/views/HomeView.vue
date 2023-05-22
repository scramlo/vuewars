<script setup lang="ts">
import Header from "@/components/Header.vue";
import CategoryLink from "@/components/CategoryLink.vue";
import MainSpacer from "@/components/MainSpacer.vue";

const cloudinaryThumbnailParams = "c_fill,dpr_auto,f_auto,g_center,h_225,q_auto,w_400";
const categories = [
  {
    category: "Characters",
    description: "Characters from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684635322/vue%20wars/the_mandalorian-9-1_zujdgn.jpg`,
  },
  {
    category: "Films",
    description: "Films from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684698990/vue%20wars/IMG_2172-2_vfhyir.jpg`
  },
  {
    category: "Starships",
    description: "Starships from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699205/vue%20wars/394178_x8k3mk.jpg`,
  },
  {
    category: "Vehicles",
    description: "Vehicles from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699379/vue%20wars/maxresdefault_modhqf.jpg`,
  },
  {
    category: "Species",
    description: "Species from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699561/vue%20wars/wp3051824_lbq4kh.jpg`,
  },
  {
    category: "Planets",
    description: "Planets from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699674/vue%20wars/latest_urpuoe.png`,
  }
]
</script>
<template>
  <Header class="h-screen">
    <div class="flex flex-col gap-6 md:gap-10">
      <div>
        <h1
          class="text-center text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
          Vue Wars</h1>
        <p class="text-white text-center">A beautiful encyclopedia of your favorite <span class="text-sky-500">galaxy
            far, far
            away...</span></p>
      </div>
      <!-- <input class="rounded p-2 m-4 md:m-0" type="text" placeholder="Search"> -->
      <div class="flex justify-center">
        <a href="#main" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Explore</a>
      </div>
    </div>
  </Header>
  <MainSpacer id="main">
    <div class="grid lg:grid-cols-3 gap-10">
      <CategoryLink v-for="cat in categories" :category="cat.category" :description="cat.description"
        :cloudinary-url="cat.cloudinaryUrl" :key="cat.category" />
    </div>
  </MainSpacer>
</template>