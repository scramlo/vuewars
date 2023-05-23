import { getCharacters } from "@/composables/actions";
import { computed, ref } from 'vue';

export default function useGetCharacters() {
    const result = ref(getCharacters());
    const characters = computed(() => {
        if (!result.value) return [];

        const people = result.value.allPeople?.people || [];
        const sortedPeople = [...people].sort((a, b) => a.name.localeCompare(b.name));
        return sortedPeople;
    });
    return {
        characters,
    }
};