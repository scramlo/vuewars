<script setup lang="ts">
import Header from "@/components/Header.vue";
import CategoryLink from "@/components/CategoryLink.vue";
import Spacer from "@/components/Spacer.vue";
import { CategoryKey, TransitionDelay, TransitionDuration } from "@/constants";
import UITransition from "@/components/ui/UITransition.vue";

const cloudinaryThumbnailParams = "c_fill,dpr_auto,f_auto,g_center,h_225,q_auto,w_400";
const categories = [
  {
    category: CategoryKey.Person,
    description: "Characters from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684635322/vue%20wars/the_mandalorian-9-1_zujdgn.jpg`,
  },
  {
    category: CategoryKey.Film,
    description: "Films from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684698990/vue%20wars/IMG_2172-2_vfhyir.jpg`
  },
  {
    category: CategoryKey.Starship,
    description: "Starships from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699205/vue%20wars/394178_x8k3mk.jpg`,
  },
  {
    category: CategoryKey.Vehicle,
    description: "Vehicles from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699379/vue%20wars/maxresdefault_modhqf.jpg`,
  },
  {
    category: CategoryKey.Species,
    description: "Species from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699561/vue%20wars/wp3051824_lbq4kh.jpg`,
  },
  {
    category: CategoryKey.Planet,
    description: "Planets from the Star Wars universe",
    cloudinaryUrl: `https://res.cloudinary.com/dxfsfczia/image/upload/${cloudinaryThumbnailParams}/v1684699674/vue%20wars/latest_urpuoe.png`,
  }
]
</script>
<template>
  <Header class="h-screen">

    <div class="flex flex-col gap-6 md:gap-10">
      <div>
        <UITransition :appear="true" transition-duration="2s" transition-delay="0.5s">
          <h1
            class="text-center text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
            Vue Wars</h1>
        </UITransition>
        <UITransition :appear="true" transition-duration="2s" transition-delay="1s">
          <p class="text-white text-center">A beautiful encyclopedia of your favorite <span class="text-sky-500">galaxy
              far, far
              away...</span></p>
        </UITransition>
      </div>
      <UITransition :appear="true" transition-duration="2s" transition-delay="1.5s">
        <div class="flex justify-center">
          <a href="#main"
            class="bg-purple-500 hover:bg-purple-700 transition-property:colors duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">Explore</a>
        </div>
      </UITransition>
    </div>
  </Header>
  <Spacer id="main">
    <div class="grid lg:grid-cols-3 gap-10">
      <CategoryLink v-for="cat in categories" :category="cat.category" :description="cat.description"
        :cloudinary-url="cat.cloudinaryUrl" :key="cat.category" />
    </div>
  </Spacer>
</template>