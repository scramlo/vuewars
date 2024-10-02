<script setup lang="ts">
import useScrapeDuckDuckGo from '@/composables/useScrapeDuckDuckGo';
import type { Person } from '@/types';
import { ref, toRef } from 'vue';

const props = defineProps<{
    person?: Person,
}>();

const { ddgData, imageUrl } = useScrapeDuckDuckGo(() => props.person);
</script>

<template>
    <article class="flex flex-col gap-3">
        <div class="flex flex-col lg:justify-between lg:flex-row gap-3">
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
        </div>
        <p v-if="ddgData?.Abstract">
            {{ ddgData.Abstract }} <a :href="ddgData.AbstractURL">Read More...</a>
        </p>
    </article>
</template>