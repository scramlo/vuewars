import type { Film, Maybe, Person, Planet, Scalars, Species, Starship, Vehicle } from "./graphql";
export type { DDGData } from "./ddg";

export * from "./graphql";

// we will make sure to map this in our useGetFilms composable
export type FilmWithName = Film & { name?: Maybe<Scalars['String']> };

export type Category = Person | Planet | Species | Starship | Vehicle | FilmWithName;
export type CategoryArray = Person[] | Planet[] | Species[] | Starship[] | Vehicle[] | FilmWithName[];