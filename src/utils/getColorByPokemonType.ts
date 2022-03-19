import { POKEMON_TYPE_COLORS } from "./constants";
import { PokemonTypeColors } from "../models/pokemonType";

const getColorByPokemonType = (type: PokemonTypeColors) =>
  // @ts-expect-error
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
