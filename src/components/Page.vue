<script lang="ts" setup>
import Header from './Header.vue';

defineProps<{
    headerClasses?: string,
    headerId?: string,
    contentClasses?: string,
    contentId?: string,
}>();
</script>
<template>
    <Header :class="headerClasses">
        <slot name="header" />
    </Header>
    <div :id="contentId" :class="contentClasses" class="my-5 lg:my-10 mx-10 lg:mx-20 flex flex-col gap-10">
        <slot />
    </div>
</template>