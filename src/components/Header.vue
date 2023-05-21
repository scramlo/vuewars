<script setup lang="ts">
import SpaceBackground from "@/components/SpaceBackground/SpaceBackground.vue";
</script>
<template>
    <header class="relative shadow-gray-900 shadow-md">
        <div class="absolute w-full h-full flex flex-wrap justify-center content-center">
            <slot />
        </div>
        <SpaceBackground />
    </header>
</template>