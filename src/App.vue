<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import UITransition from '@/components/ui/UITransition.vue';
import { TransitionDistance, TransitionType } from '@/constants';

const open = ref(false);
</script>

<template>
  <main class="relative">
    <button @click="open = !open">modal</button>
    <RouterView />
    <UITransition>
      <div v-if="open" class="fixed w-screen h-screen bg-black bg-opacity-50 top-56" />
    </UITransition>
    <UITransition :transitionType="TransitionType.FadeUp" :transitionDistance="TransitionDistance.Long">
      <aside v-if="open" class="fixed p-4 shadow-xl mx-10 lg:mx-20 top-48 h-full w-5/6 bg-white rounded-xl">
        <div class="flex flex-row-reverse">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <slot />

      </aside>
    </UITransition>
  </main>
</template>