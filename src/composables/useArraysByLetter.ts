import { ref, computed } from "vue";

export default function useArraysByLetter(arrayToSeparate) {
    const separateArraysByFirstLetter = (arr) => {
        const separateArrays = [];

        for (const obj of arr) {
            const { name } = obj;
            const firstLetter = name.charAt(0).toUpperCase();

            // Find the index of the letter group in separateArrays
            const groupIndex = separateArrays.findIndex(group => group[0].name[0] === firstLetter);

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
