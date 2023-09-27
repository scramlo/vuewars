<script lang="ts" setup>
import UITransition from '@/components/ui/UITransition.vue';
import { TransitionDistance, TransitionType } from '@/constants';
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';


const store = useModalStore();
const { toggleModal } = store;
const { open } = storeToRefs(store);

</script>
<template>
    <Teleport to="body">
        <UITransition :transitionType="TransitionType.FadeUp" :transitionDistance="TransitionDistance.Long"
            transitionDuration="0.5s">

            <aside v-if="open"
                class="fixed z-10 pb-4 shadow-xl top-24 h-full w-9/12 bg-white rounded-xl overflow-scroll">
                <div
                    class="flex justify-between sticky top-0 z-20 py-2 px-4 rounded-t-xl bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
                    <span>
                        <slot name="title" />
                    </span>
                    <!-- Close Button -->
                    <button @click="toggleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <slot />
                </div>

            </aside>
        </UITransition>
        <UITransition>
            <div v-if="open" @click="toggleModal" class="fixed w-screen h-screen bg-black bg-opacity-75 top-0" />
        </UITransition>
    </Teleport>
</template>