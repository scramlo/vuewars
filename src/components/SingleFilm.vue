<script setup lang="ts">
import useScrapeDuckDuckGo from '@/composables/useScrapeDuckDuckGo';
import type { Film } from '@/types';
import UITransition from './ui/UITransition.vue';

const props = defineProps<{
    film?: Film,
}>();

const { ddgData, imageUrl } = useScrapeDuckDuckGo(() => props.film);

</script>

<template>
    <article class="flex flex-col gap-3">
        <div class="flex flex-col lg:justify-between lg:flex-row gap-3">
            <ul>
                <li class="capitalize"><span class="font-bold">Title:</span> {{ film?.title ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Release Date:</span> {{ film?.releaseDate ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Director:</span> {{ film?.director ?? '' }}</li>
            </ul>
            <UITransition transition-duration="1s">
                <img v-if="imageUrl" class="rounded h-[325px] w-[325px] object-contain" height="325" width="325" :src="imageUrl" :alt="ddgData?.Heading">
            </UITransition>
        </div>
        <p v-if="ddgData?.Abstract">
            {{ ddgData.Abstract }} <a class="link" :href="ddgData.AbstractURL" target="_blank">Read More...</a>
        </p>
    </article>
</template>