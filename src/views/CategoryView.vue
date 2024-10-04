<script setup lang="ts">
import { useRoute } from 'vue-router'
import useGetItems from "@/composables/useGetItems";
import Page from '@/components/Page.vue';
import { ref, type ComputedRef, computed, h, type Component } from 'vue';
import UITransition from '@/components/ui/UITransition.vue';
import type { Category } from "@/types";
import { CategoryFriendly, CategoryKey } from "@/constants";
import UIModal from '@/components/ui/UIModal.vue';
import { useModalStore } from '@/stores/modal';
import useGetItem from '@/composables/useGetItem';
import StatsPerson from '@/components/StatsPerson.vue';
import StatsVehicle from '@/components/StatsVehicle.vue';
import StatsFilm from '@/components/StatsFilm.vue';
import StatsPlanet from '@/components/StatsPlanet.vue';
import SingleItem from '@/components/SingleItem.vue';

const store = useModalStore();
const { toggleModal } = store;

const route = useRoute();
const category = route.params.category as CategoryKey;
const { items } = useGetItems(category);

function shouldShowItem(item: Category) {
    if ('name' in item && item.name) {
        return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    } else if ('title' in item && item.title) {
        return item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    }
}

const searchQuery = ref('');

let singleItem: ComputedRef<Category> | undefined;

function showItemDetails(category: Category) {
    singleItem = useGetItem(category);
    toggleModal();
}

const singleItemComponent = computed(() => {
    if (category === CategoryKey.Person) {
        return () => h(StatsPerson as Component, { person: singleItem?.value });
    } else if (category === CategoryKey.Vehicle) {
        return () => h(StatsVehicle as Component, { vehicle: singleItem?.value });
    } else if (category === CategoryKey.Planet) {
        return () => h(StatsPlanet as Component, { planet: singleItem?.value });
    } else if (category === CategoryKey.Film) {
        return () => h(StatsFilm as Component, { film: singleItem?.value });
    }
    return () => h('div', 'No component found');
});
</script>
<template>
    <Page headerClasses="h-56">
        <template #header>
            <UITransition :appear="true" transition-duration="2s" transition-delay="0.5s">

            <h1
                class="capitalize text-center text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
                {{ CategoryFriendly[category] }}</h1>
            </UITransition>
        </template>
        <input v-model="searchQuery" class="rounded p-2 border-2 border-black w-full text-center font-extrabold"
            type="text" placeholder="search">
        <ul class="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            <template v-for="(item, index) in items" :key="item.id">
            <UITransition :appear="true">
                <li class="h-[10rem] w-100" v-if="shouldShowItem(item)">
                    <button @click="showItemDetails(item)"
                        class="h-full w-full transition-all duration-200 text-white bg-black p-2 rounded hover:scale-105 hover:cursor-pointer">
                        {{ item.name }}
                    </button>
                </li>
            </UITransition>
            </template>
        </ul>
    </Page>
    <UIModal>
        <template #title>
            <h1 class="text-2xl font-extrabold">{{ singleItem?.name ?? 'Loading' }}</h1>
        </template>
        <SingleItem :category="singleItem">
            <component :is="singleItemComponent" />
        </SingleItem>
    </UIModal>
</template>