import { PokemonTypeColors } from "./pokemonType";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  order: number;
  type: PokemonTypeColors[];
  color?: string;
}
