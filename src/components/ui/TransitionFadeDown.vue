<template>
    <transition name="fade-down">
        <slot />
    </transition>
</template>
<style scoped>
.fade-down-enter-active {
    transition: all 0.5s ease-out;
}

.fade-down-leave-active {
    transition: all 0.5s;
}

.fade-down-enter-from,
.fade-down-leave-to {
    transform: translateY(1rem);
    opacity: 0;
}
</style>