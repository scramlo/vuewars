<script setup lang="ts">
import type { Person } from '@/types';
import { ref, watchEffect } from 'vue';

const props = defineProps<{
    person?: Person,
}>();

const imageUrl = ref("");

watchEffect(() => {
    if (props.person) {
        // Make an API request to DuckDuckGo
        fetch(`https://api.duckduckgo.com/?q=${props.person.name}&format=json&iax=images&ia=images`)
        .then((response) => response.json())
        .then((data) => {
            if (data.Image) {
                imageUrl.value = `https://duckduckgo.com/` + data.Image;
            } else if (data.RelatedTopics[0]?.Icon?.URL) {
                // Handle the case when no image is found
                imageUrl.value = `https://duckduckgo.com/` + data.RelatedTopics[0].Icon.URL;
            } else {
                imageUrl.value = "";
            }
        })
        .catch((error) => {
            console.error("Error fetching data from DuckDuckGo:", error);
        });
    }
});
</script>

<template>
    <article class="flex flex-col lg:justify-between lg:flex-row gap-3">
        <ul>
        <li class="capitalize"><span class="font-bold">Birth Year:</span> {{ person?.birthYear ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Eye Color:</span> {{ person?.eyeColor ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Gender:</span> {{ person?.gender ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Hair Color:</span> {{ person?.hairColor ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Height:</span> {{ person?.height ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Mass:</span> {{ person?.mass ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Skin Color:</span> {{ person?.skinColor ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Home World:</span> {{ person?.homeworld?.name ?? '' }}</li>
    </ul>
    <img class="rounded" v-if="imageUrl" :src="imageUrl" alt="">
    </article>
</template>