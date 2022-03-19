import { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

import { Pokemon } from "../models/pokemon";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    const response: any = await getPokemonsApi();

    let pokemonsArray: Pokemon[] = [];
    for await (const pokemon of response.results) {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.other["official-artwork"].front_default,
      });
    }

    console.log(pokemonsArray);
    setPokemons([...pokemons, ...pokemonsArray]);
  };

  return { pokemons };
};
