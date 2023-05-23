import { computed, type Ref } from "vue";
import type { Person, Planet, Species, Starship, Vehicle, Film } from "@/types/graphql";

type ArrayToSeparate = Person[] | Planet[] | Species[] | Starship[] | Vehicle[] | Film[];

export default function useArraysByLetter(arrayToSeparate: Ref<ArrayToSeparate>) {
    const separateArraysByFirstLetter = (arr: ArrayToSeparate) => {
        const separateArrays = [];

        for (const obj of arr) {
            //unfortunately, Film does not have a name property, but instead uses title
            let nameKey = 'name' in obj ? 'name' : 'title';
            // @ts-ignore --> this is safe because we know there is either a name or title property
            const firstLetter = obj[nameKey].charAt(0).toUpperCase();

            // Find the index of the letter group in separateArrays
            // @ts-ignore --> this is safe because we know there is either a name or title property
            const groupIndex = separateArrays.findIndex(group => group[0][nameKey][0] === firstLetter);

            if (groupIndex === -1) {
                // If the letter group doesn't exist, create it
                separateArrays.push([obj]);
            } else {
                // If the letter group already exists, push the object to it
                separateArrays[groupIndex].push(obj);
            }
        }

        return separateArrays;
    };

    const arraysByLetter = computed(() => {
        return separateArraysByFirstLetter(arrayToSeparate.value);
    });

    return {
        arraysByLetter
    };
}
