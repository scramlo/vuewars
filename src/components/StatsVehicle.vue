<script setup lang="ts">
import type { Vehicle } from '@/types';

defineProps<{
    vehicle?: Vehicle,
}>();
</script>

<template>
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
</template>