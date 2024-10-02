import { CategoryKey } from "@/constants";
import { getCharacter, getPlanet, getVehicle } from "@/composables/actions";
import type { Category } from "@/types";

export default function useGetItem(category: Category) {
    if (category.__typename === CategoryKey.Person) {
        return getCharacter(category['id']);
    } else if (category.__typename === CategoryKey.Planet) {
        return getPlanet(category['id']);
    } else if (category.__typename === CategoryKey.Vehicle) {
        return getVehicle(category['id']);
    }
};