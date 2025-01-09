import { computed, type Ref } from "vue";
import type { CategoryArray } from "@/types";

export default function useArraysByLetter(arrayToSeparate: Ref<CategoryArray>) {
    const separateArraysByFirstLetter = (arr: CategoryArray) => {
        const separateArrays = [];

        for (const obj of arr) {
            const firstLetter = obj.name?.charAt(0).toUpperCase() ?? 'Unknown';

            // Find the index of the letter group in separateArrays
            const groupIndex = separateArrays.findIndex(group => {
                if (group[0]?.name) {
                    const groupFirstLetter = group[0].name.charAt(0).toUpperCase();
                    return groupFirstLetter === firstLetter;
                }
                return false;
            });

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
    }) as unknown as Ref<CategoryArray[]>;

    return {
        arraysByLetter
    };
}
