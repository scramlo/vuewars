<script setup lang="ts">
import type { Person } from '@/types';

defineProps<{
    person?: Person,
}>();
</script>

<template>
    <ul>
        <li><span class="font-bold">Birth Year:</span> {{ person?.birthYear ?? 'Unknown' }}</li>
        <li><span class="font-bold">Eye Color:</span> {{ person?.eyeColor ?? 'Unknown' }}</li>
        <li><span class="font-bold">Gender:</span> {{ person?.gender ?? 'Unknown' }}</li>
        <li><span class="font-bold">Hair Color:</span> {{ person?.hairColor ?? 'Unknown' }}</li>
        <li><span class="font-bold">Height:</span> {{ person?.height ?? 'Unknown' }}</li>
        <li><span class="font-bold">Mass:</span> {{ person?.mass ?? 'Unknown' }}</li>
        <li><span class="font-bold">Skin Color:</span> {{ person?.skinColor ?? 'Unknown' }}</li>
        <li><span class="font-bold">Home World:</span> {{ person?.homeworld?.name ?? 'Unknown' }}</li>
    </ul>
</template>