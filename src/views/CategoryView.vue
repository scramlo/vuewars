<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from "@/components/Header.vue";

const route = useRoute()


</script>
<template>
    <Header class="h-72">
        <h1
            class="capitalize text-center text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
            {{ route.params.category }}</h1>
    </Header>
</template>