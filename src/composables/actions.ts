import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";

export function getCharacters() {
    const { result } = useQuery(gql`
    query getAllPeople {
        allPeople {
            people {
            name
            }
        }
    }`);
    return result;
}