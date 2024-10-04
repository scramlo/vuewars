<script setup lang="ts">
import type { Planet } from '@/types';

defineProps<{
    planet?: Planet,
}>();
</script>

<template>
    <ul>
        <li class="capitalize"><span class="font-bold">Name:</span> {{ planet?.name ?? '' }}</li>
        <li class="capitalize"><span class="font-bold">Population:</span> {{ planet?.population ?? '' }}</li>
    </ul>
</template>