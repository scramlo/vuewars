import { getCharacters, getVehicles, getFilms, getSpecies, getPlanets, getStarships } from "@/composables/actions";
import { CategoryKey, CategoryQueryAllKey, CategoryAccessorKey } from "@/constants";
import type { Film } from "@/types";
import { computed, ref, type Ref } from 'vue';

export default function useGetItems(item: CategoryKey) {
    let result: Ref<any> | undefined;
    switch (item) {
        case CategoryKey.Person:
            result = getCharacters();
            break;
        case CategoryKey.Vehicle:
            result = getVehicles();
            break;
        case CategoryKey.Film:
            result = getFilms();
            break;
        case CategoryKey.Species:
            result = getSpecies();
            break;
        case CategoryKey.Planet:
            result = getPlanets();
            break;
        case CategoryKey.Starship:
            result = getStarships();
            break;
        default:
            break;
    }


    const items = computed(() => {
        const queryKey = CategoryQueryAllKey[item];
        const dtoAccessor = CategoryAccessorKey[item];
        // useQuery returns a ref, so don't do anything until we actually get the info back
        if (!result?.value) {
            return [];
        }

        // now, if it is films, we need to change the "title" key to "name"
        if (item === CategoryKey.Film) {
            const films = result.value[queryKey].films || [];
            const filmsWithName = films.map((film: Film) => {
                return {
                    ...film,
                    name: film.title,
                }
            });
            const sortedFilms = [...filmsWithName].sort((a, b) => a.name.localeCompare(b.name));
            return sortedFilms;
        }
        const results = result.value[queryKey][dtoAccessor] || [];
        const sortedItems = [...results].sort((a, b) => a.name.localeCompare(b.name));
        return sortedItems;
    });
    return {
        items,
    }
};