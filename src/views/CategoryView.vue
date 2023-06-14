<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from "@/components/Header.vue";
import useGetItems from "@/composables/useGetItems";
import Spacer from '@/components/Spacer.vue';
import useArraysByLetter from '@/composables/useArraysByLetter';
import { ref } from 'vue';
import UITransition from '@/components/ui/UITransition.vue';
import { TransitionType } from '@/constants';
import type { CategoryArray, Category } from "@/types";
import { CategoryFriendly, CategoryKey } from "@/constants";

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
    <Spacer>
        <input v-model="searchQuery" class="rounded p-2 border-2 border-black w-full mb-4 text-center font-extrabold"
            type="text" placeholder="search">
        <ul>
            <li v-for="itemLetterGroup in arraysByLetter">
                <UITransition>
                    <h2 v-if="shouldShowLetter(itemLetterGroup)" class="font-extrabold text-xl">{{
                        returnFirstLetter(itemLetterGroup[0]) }}</h2>
                </UITransition>

                <ul class="md:flex md:flex-wrap">

                    <li v-for="item in itemLetterGroup" :key="item.id">
                        <UITransition>
                            <button v-if="shouldShowItem(item)"
                                class="mt-4 mr-4 mb-4 h-36 w-full md:w-48 transition-all duration-200 text-white bg-black p-2 rounded hover:scale-105 hover:cursor-pointer">
                                {{ item.name }}
                            </button>
                        </UITransition>
                    </li>

                </ul>
            </li>
        </ul>
    </Spacer>
</template>