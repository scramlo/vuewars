import { CategoryKey } from "@/constants";
import { getCharacter } from "@/composables/actions";
import type { Ref } from "vue";

export default function useGetItem(category: CategoryKey, id: string) {
    let result: Ref<any> | undefined;
    result = getCharacter(id);
    return result;
};