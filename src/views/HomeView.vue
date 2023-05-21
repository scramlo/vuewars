<script setup lang="ts">
import SpaceBackground from "@/components/SpaceBackground/SpaceBackground.vue";
</script>
<template>
  <section>
    <header class="relative h-screen shadow-gray-900 shadow-md">
      <div class="absolute w-full h-full flex flex-wrap justify-center content-center">
        <div class="flex flex-col gap-6 md:gap-10">
          <div>
            <h1
              class="text-center text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-purple-500">
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
      </div>
      <SpaceBackground />
    </header>
    <main id="main" class="my-10 mx-20 grid grid-cols-3">
      <div class="transition-all duration-500 hover:scale-105">
        <a href="" class="rounded">
          <img
            class="rounded shadow-black shadow-lg mb-2 w-full h-auto saturate-50 hover:saturate-150 transition-all duration-500 ease-in-out"
            src="https://res.cloudinary.com/dxfsfczia/image/upload/c_fill,dpr_auto,f_auto,g_center,h_225,q_auto,w_400/v1684635322/vue%20wars/the_mandalorian-9-1_zujdgn.jpg"
            alt="">
          <p class="-mb-2">Characters</p>
          <small>Learn more about the amazing characters of Star Wars.</small>
        </a>
      </div>
    </main>
  </section>
</template>