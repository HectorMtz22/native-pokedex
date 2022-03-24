import { useState, useEffect, useContext } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import { AuthContext } from "../context/AuthContext";
import { Pokemon } from "../models/pokemon";

export default function useFavorite() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { isAuthenticated, auth } = useContext(AuthContext);

  useEffect(() => {
    getFav().then((res: Pokemon[]) => setPokemons(res));
  }, [auth]);

  const getFav = async () => {
    const pokemonsArray = await getPokemonsFavoriteApi();
    const res = await pokemonsArray.map(
      async (id: number) => await getPokemonDetailsByIdApi(id)
    );
    return await Promise.all(res);
  };
  console.log(pokemons);

  return { pokemons, getFav, isAuthenticated };
}
