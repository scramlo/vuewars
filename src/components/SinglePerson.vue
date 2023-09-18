<script setup lang="ts">
import type { Person } from '@/types';

defineProps<{
    person?: Person,
}>();
</script>

<template>
    <ul>
        <li>Birth Year: {{ person?.birthYear ?? 'Loading' }}</li>
        <li>Eye Color: {{ person?.eyeColor ?? 'Loading' }}</li>
    </ul>
</template>