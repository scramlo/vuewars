<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from "@/components/Header.vue";
import useGetItems from "@/composables/useGetItems";
import MainSpacer from '@/components/MainSpacer.vue';
import useArraysByLetter from '@/composables/useArraysByLetter';
import { ref } from 'vue';
import TransitionFadeDown from '@/components/ui/TransitionFadeDown.vue';
import type { CategoryArray, Category } from "@/types";
import { CategoryAccessorKey, CategoryFriendly, CategoryKey } from "@/constants";

const route = useRoute();
const category = route.params.category as CategoryKey;
const { items } = useGetItems(category);
const { arraysByLetter } = useArraysByLetter(items);

function shouldShowLetter(itemLetterGroup: CategoryArray) {
    return itemLetterGroup.some((item) => {
        if ('name' in item && item.name) {
            return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        } else if ('title' in item && item.title) {
            return item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        }
    })
}

function shouldShowItem(item: Category) {
    if ('name' in item && item.name) {
        return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    } else if ('title' in item && item.title) {
        return item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    }
}

function returnFirstLetter(item: Category) {
    if ('name' in item) {
        return item.name?.[0] ?? 'Unknown'
    } else if ('title' in item) {
        return item.title?.[0] ?? 'Unknown'
    }
}

const searchQuery = ref('');
</script>
<template>
    <Header class="h-56">
        <h1
            class="capitalize text-center text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
            {{ CategoryFriendly[category] }}</h1>
    </Header>
    <MainSpacer>
        <input v-model="searchQuery" class="rounded p-2 border-2 border-black w-full mb-4" type="text" placeholder="Search">
        <ul>
            <li v-for="itemLetterGroup in arraysByLetter">
                <TransitionFadeDown>
                    <h2 v-if="shouldShowLetter(itemLetterGroup)" class="font-extrabold text-xl">{{
                        returnFirstLetter(itemLetterGroup[0]) }}</h2>
                </TransitionFadeDown>

                <ul>

                    <li v-for="item in itemLetterGroup" :key="item.id">
                        <TransitionFadeDown>
                            <button v-if="shouldShowItem(item)"
                                class="w-full transition-all duration-200 text-white bg-black p-2 rounded mb-4 hover:scale-105 hover:cursor-pointer">
                                {{ item.name }}
                            </button>
                        </TransitionFadeDown>
                    </li>

                </ul>
            </li>
        </ul>
    </MainSpacer>
</template>