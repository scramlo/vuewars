<script lang="ts" setup>
import { TransitionType, TransitionDistance } from '@/constants';
import { computed } from 'vue';

type Props = {
    transitionType?: TransitionType,
    transitionDistance?: TransitionDistance,
    transitionDelay?: string,
    transitionDuration?: string,
    appear?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    transitionType: TransitionType.Fade,
    transitionDistance: TransitionDistance.Medium,
    transitionDelay: '0s',
    transitionDuration: '0s',
    appear: false,
})

const transitionTransformArgument = computed(() => {
    switch (props.transitionType) {
        case TransitionType.Fade:
            return 'initial';
        case TransitionType.FadeDown:
            return `translateY(-${props.transitionDistance})`;
        case TransitionType.FadeUp:
            return `translateY(${props.transitionDistance})`;
        case TransitionType.FadeRight:
            return `translateX(${props.transitionDistance})`;
        case TransitionType.FadeLeft:
            return `translateX(-${props.transitionDistance})`;
    }
});

// needed to use in css
const transitionTransformArgumentValue = transitionTransformArgument.value;

</script>
<template>
    <transition :appear="appear" :name="transitionType">
        <slot />
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-down-enter-active,
.fade-up-enter-active,
.fade-right-enter-active,
.fade-left-enter-active {
    transition-timing-function: ease-in-out;
    transition-duration: v-bind(transitionDuration);
    transition-delay: v-bind(transitionDelay);
}

.fade-leave-active,
.fade-down-leave-active,
.fade-up-leave-active,
.fade-right-leave-active,
.fade-left-leave-active {
    transition-timing-function: ease-in-out;
    transition-duration: v-bind(transitionDuration);
    transition-delay: v-bind(transitionDelay);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-down-enter-from,
.fade-down-leave-to {
    transform: v-bind(transitionTransformArgumentValue);
    transition-duration: v-bind(transitionDuration);
    transition-delay: v-bind(transitionDelay);
    opacity: 0;
}

.fade-up-enter-from,
.fade-up-leave-to {
    transform: v-bind(transitionTransformArgumentValue);
    transition-duration: v-bind(transitionDuration);
    transition-delay: v-bind(transitionDelay);
    opacity: 0;
}

.fade-right-enter-from,
.fade-right-leave-to {
    transform: v-bind(transitionTransformArgumentValue);
    transition-duration: v-bind(transitionDuration);
    transition-delay: v-bind(transitionDelay);
    opacity: 0;
}

.fade-left-enter-from,
.fade-left-leave-to {
    transform: v-bind(transitionTransformArgumentValue);
    transition-duration: v-bind(transitionDuration);
    transition-delay: v-bind(transitionDelay);
    opacity: 0;
}
</style>