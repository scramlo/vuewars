<script setup lang="ts">
import type { Film } from '@/types';

const props = defineProps<{
    film?: Film,
}>();
</script>

<template>
    <ul>
        <li class="capitalize"><span class="font-bold">Title:</span> {{ film?.title ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Release Date:</span> {{ film?.releaseDate ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Director:</span> {{ film?.director ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Opening Crawl:</span> {{ film?.openingCrawl ?? '' }}</li>
    </ul>
</template>