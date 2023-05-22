import { ref, reactive, toRefs, type Ref, computed } from "vue";

// takes a ref array and returns an object with arrays separated by first letter
export default function useArraysByLetter(arrayToSeparate: Ref<any[]>) {
    // create function that does the magic
    const separateArraysByFirstLetter = (arr: any[]) => {
        const separateArrays: any = {};

        for (const obj of arr) {
            // we will always have a name property
            const { name } = obj;
            const firstLetter = name.charAt(0).toUpperCase();

            // if the letter doesn't exist in the object, create it
            if (!separateArrays[firstLetter]) {
                separateArrays[firstLetter] = [];
            }

            // push the object to the array
            separateArrays[firstLetter].push(obj);
        }

        return separateArrays;
    };

    const arraysByLetter = computed(() => {
        return separateArraysByFirstLetter(arrayToSeparate.value);
    });

    return {
        arraysByLetter,
    };
}
