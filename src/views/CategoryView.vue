<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from "@/components/Header.vue";
import useGetCharacters from "@/composables/useGetCharacters";
import MainSpacer from '@/components/MainSpacer.vue';
import useArraysByLetter from '@/composables/useArraysByLetter';
import { ref } from 'vue';
import TransitionFadeDown from '@/components/ui/TransitionFadeDown.vue';

const route = useRoute()
const { characters } = useGetCharacters();
const { arraysByLetter } = useArraysByLetter(characters);

const searchQuery = ref('');
</script>
<template>
    <Header class="h-72">
        <h1
            class="capitalize text-center text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
            {{ route.params.category }}</h1>
    </Header>
    <MainSpacer>
        <input v-model="searchQuery" class="rounded p-2 border-2 border-black w-full mb-4" type="text" placeholder="Search">
        <ul>
            <li v-for="charGroup in arraysByLetter">
                <TransitionFadeDown>
                    <h2 v-if="charGroup.some(char => char.name.toLowerCase().includes(searchQuery.toLowerCase()))"
                        class="font-extrabold text-xl">{{ charGroup[0].name[0] }}</h2>
                </TransitionFadeDown>

                <ul>

                    <li v-for="char in charGroup" :key="char.name">
                        <TransitionFadeDown>
                            <button v-if="char.name.toLowerCase().includes(searchQuery.toLowerCase())"
                                class="w-full transition-all duration-200 text-white bg-black p-2 rounded mb-4 hover:scale-105 hover:cursor-pointer">
                                {{ char.name }}
                            </button>
                        </TransitionFadeDown>
                    </li>

                </ul>
            </li>
        </ul>
    </MainSpacer>
</template>