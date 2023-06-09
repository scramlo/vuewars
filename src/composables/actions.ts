import type { Person } from "@/types";
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { provideApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/main";


export function getCharacters() {
    const { result } = useQuery(gql`
    query getAllPeople {
        allPeople {
            people {
              name
              id
            }
        }
    }`);
    return result;
}

export function getVehicles() {
    const { result } = useQuery(gql`
    query getAllVehicles {
        allVehicles {
            vehicles {
               name
               id
            }
        }
    }`);
    return result;
}

export function getSpecies() {
    const { result } = useQuery(gql`
    query getAllSpecies {
        allSpecies {
            species {
               name
               id
            }
        }
    }`);
    return result;
}

export function getPlanets() {
    const { result } = useQuery(gql`
    query getAllPlanets {
        allPlanets {
            planets {
               name
               id
            }
        }
    }`);
    return result;
}

export function getStarships() {
    const { result } = useQuery(gql`
    query getAllStarships {
        allStarships {
            starships {
               name
               id
            }
        }
    }`);
    return result;
}

export function getFilms() {
    const { result } = useQuery(gql`
    query getAllFilms {
        allFilms {
            films {
               title
               id
            }
        }
    }`);
    return result;
}

export function getCharacter(id: string) {
    const { result } = provideApolloClient(apolloClient)(() => useQuery(gql`
    query getCharacter($id: ID!) {
        person(id: $id) {
            name
        }
    }
  `))
    return result;
}
