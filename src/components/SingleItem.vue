<script setup lang="ts">
import type { Category, Planet } from '@/types';
import useScrapeDuckDuckGo from '@/composables/useScrapeDuckDuckGo';
import UITransition from './ui/UITransition.vue';

const props = defineProps<{
    category: Category | undefined;
}>();

const { ddgData, imageUrl } = useScrapeDuckDuckGo(() => props.category);

</script>

<template>
    <article class="flex flex-col gap-3">
        <h2 class="font-bold text-xl my-2">Stats</h2>
        <div class="flex gap-3 justify-between">
            <slot />
            <UITransition>
                <img v-if="imageUrl" class="m-auto lg:m-0 rounded w-[375px] h-[375px] object-cover" height="375" width="375" :src="imageUrl" :alt="ddgData?.Heading">
            </UITransition>
        </div>
        <hr class="my-5" v-if="ddgData?.Abstract"/>
        <section v-if="ddgData?.Abstract">
            <h2 class="font-bold text-xl mb-2">Abstract</h2>
            <span v-html="ddgData.Abstract" /> <a class="link" :href="ddgData.AbstractURL" target="_blank">Read More...</a>
        </section>
    </article>
</template>