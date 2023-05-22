import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { computed, ref } from 'vue';

export default function useGetCharacters() {
    const { result } = useQuery(gql`
    query getAllPeople {
        allPeople {
            people {
            name
            }
        }
    }`);
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