<script setup lang="ts">
import SpaceBackground from "@/components/SpaceBackground/SpaceBackground.vue";
import UIIconArrowLeft from "./ui/UIIconArrowLeft.vue";
import { useRoute } from "vue-router";
const routeName = useRoute().name;
</script>
<template>
    <header class="relative shadow-gray-900 shadow-md">
        <router-link v-if="routeName !== 'home'" :to="{ name: 'home' }" class="absolute text-white top-5 left-5 z-10">
            <UIIconArrowLeft />
        </router-link>
        <div class="absolute w-full h-full flex flex-wrap justify-center content-center">
            <slot />
        </div>
        <SpaceBackground />
    </header>
</template>