<script setup lang="ts">
import type { Vehicle } from '@/types';
import useScrapeDuckDuckGo from '@/composables/useScrapeDuckDuckGo';
import UITransition from './ui/UITransition.vue';
import { computed, ref } from 'vue';

const props = defineProps<{
    vehicle?: Vehicle,
}>();

const { ddgData, imageUrl } = useScrapeDuckDuckGo(() => props.vehicle);

</script>

<template>
    <article class="flex flex-col gap-3">
        <div class="flex flex-col lg:justify-between lg:flex-row gap-3">
            <ul>
                <li class="capitalize"><span class="font-bold">Name:</span> {{ vehicle?.name ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Model:</span> {{ vehicle?.model ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Vehicle Class:</span> {{ vehicle?.vehicleClass ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Manufacturers:</span> {{ vehicle?.manufacturers?.join(', ') ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Cost in Credits:</span> {{ vehicle?.costInCredits ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Length:</span> {{ vehicle?.length ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Max Atmosphering Speed:</span> {{ vehicle?.maxAtmospheringSpeed ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Crew:</span> {{ vehicle?.crew ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Passengers:</span> {{ vehicle?.passengers ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Cargo Capacity:</span> {{ vehicle?.cargoCapacity ?? '' }}</li>
                <li class="capitalize"><span class="font-bold">Consumables:</span> {{ vehicle?.consumables ?? '' }}</li>
            </ul>
            <UITransition>
                <img v-if="imageUrl" class="rounded h-[325px] w-[325px] object-scale-down" height="325" width="325" :src="imageUrl" :alt="ddgData?.Heading">
            </UITransition>
        </div>
        <p v-if="ddgData?.Abstract">
            {{ ddgData.Abstract }} <a class="link" :href="ddgData.AbstractURL" target="_blank">Read More...</a>
        </p>
    </article>
</template>