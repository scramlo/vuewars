<script setup lang="ts">
import type { Planet } from '@/types';
import useScrapeDuckDuckGo from '@/composables/useScrapeDuckDuckGo';
import UITransition from './ui/UITransition.vue';

const props = defineProps<{
    planet?: Planet,
}>();

const { ddgData, imageUrl } = useScrapeDuckDuckGo(() => props.planet);

</script>

<template>
    <article class="flex flex-col gap-3">
        <div class="flex flex-col-reverse lg:justify-between lg:flex-row gap-8">
            <div>
                <ul>
                    <li class="capitalize"><span class="font-bold">Name:</span> {{ planet?.name ?? '' }}</li>
                    <li class="capitalize"><span class="font-bold">Population:</span> {{ planet?.population ?? '' }}</li>
                </ul>
                <hr class="my-5">
                <section v-if="ddgData?.Abstract">
                    <h2 class="font-bold">Info</h2>
                    <span v-html="ddgData.Abstract" /> <a class="link" :href="ddgData.AbstractURL" target="_blank">Read More...</a>
                </section>
            </div>
            <UITransition>
                <img v-if="imageUrl" class="m-auto lg:m-0 rounded h-full w-full object-scale-down" height="325" width="325" :src="imageUrl" :alt="ddgData?.Heading">
            </UITransition>
        </div>
    </article>
</template>