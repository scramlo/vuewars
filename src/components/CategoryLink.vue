<script setup lang="ts">
defineProps<{
    category: string,
    description: string,
    cloudinaryUrl: string,
}>();

</script>
<template>
    <div>
        <router-link class="rounded block relative w-full h-56 overflow-hidden"
            :to="{ name: 'category', params: { category: category.toLowerCase() } }">
            <img class="absolute hover:scale-105 rounded mb-2 w-full h-auto saturate-50 hover:saturate-100 transition-all duration-200 ease-in-out"
                :src="cloudinaryUrl" />
        </router-link>
        <h2 class="-mb-1 font-bold uppercase text-sm">{{ category }}</h2>
        <small>{{ description }}</small>
    </div>
</template>