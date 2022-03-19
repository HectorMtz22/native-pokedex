import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    const response: any = await getPokemonsApi();

    let pokemonsArray: any = [];
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

  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  );
}
