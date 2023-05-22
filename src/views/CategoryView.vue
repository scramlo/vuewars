<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from "@/components/Header.vue";
import useGetCharacters from "@/composables/useGetCharacters";
import MainSpacer from '@/components/MainSpacer.vue';
import useArraysByLetter from '@/composables/useArraysByLetter';
import { watch, watchEffect } from 'vue';

const route = useRoute()
const { characters } = useGetCharacters();
const { arraysByLetter } = useArraysByLetter(characters);

watchEffect(() => {
    console.log('characters', characters.value);
    console.log('arraysByLetter', arraysByLetter.value);
});

</script>
<template>
    <Header class="h-72">
        <h1
            class="capitalize text-center text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-sky-500 to-purple-500">
            {{ route.params.category }}</h1>
    </Header>
    <MainSpacer>
        <ul>
            <li v-for="charGroup in arraysByLetter">
                <h2>{{ charGroup[0].name[0] }}</h2>
                <ul>
                    <li v-for="char in charGroup" :key="char.name">
                        {{ char.name }}
                    </li>
                </ul>
            </li>
        </ul>
    </MainSpacer>
</template>