<script setup lang="ts">
defineProps<{
    category: string,
    description: string,
    cloudinaryUrl: string,
}>();

</script>
<template>
    <div class="transition-all duration-500 hover:scale-105">
        <router-link class="rounded" :to="{ name: 'category', params: { category: category.toLowerCase() } }">
            <img class="rounded shadow-black shadow-lg mb-2 w-full h-auto saturate-50 hover:saturate-150 transition-all duration-500 ease-in-out"
                :src="cloudinaryUrl" />
            <p class="-mb-2">{{ category }}</p>
            <small>{{ description }}</small>
        </router-link>
    </div>
</template>