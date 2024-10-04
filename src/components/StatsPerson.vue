<script setup lang="ts">
import type { Person } from '@/types';

defineProps<{
    person?: Person,
}>();
</script>
<template>
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
</template>
            