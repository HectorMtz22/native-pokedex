import { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

import { Pokemon } from "../models/pokemon";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    const response: any = await getPokemonsApi(nextUrl);
    setNextUrl(response.next);

    let pokemonsArray: Pokemon[] = [];
    for await (const pokemon of response.results) {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      let resTypes = pokemonDetails.types.map((item: any) => item.type.name);
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: resTypes,
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.other["official-artwork"].front_default,
      });
    }

    setPokemons([...pokemons, ...pokemonsArray]);
  };

  const loadMore = () => {
    loadPokemons();
  };

  const isNext = nextUrl;

  return { pokemons, loadMore, isNext };
};
