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

export function getVehicles() {
    const { result } = useQuery(gql`
    query getAllVehicles {
        allVehicles {
            vehicles {
               name
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
            }
        }
    }`);
    return result;
}