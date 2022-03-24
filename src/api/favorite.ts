import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi() {
  return await AsyncStorage.getItem(FAVORITE_STORAGE)
    // @ts-expect-error
    .then((res) => JSON.parse(res))
    .then((res) => res ?? [])
    .catch((e) => {
      throw e;
    });
}

export async function isPokemonFavoriteApi(id: number): Promise<boolean> {
  if (typeof id === "undefined") return false;
  const result = await getPokemonsFavoriteApi();
  return result.includes(id);
}

export async function addPokemonFavoriteApi(id: number) {
  let pokemons = await getPokemonsFavoriteApi();
  const favorites = [...pokemons, id];
  return await AsyncStorage.setItem(
    FAVORITE_STORAGE,
    JSON.stringify(favorites)
  ).catch((e) => {
    throw e;
  });
}

export async function deletePokemonFavoriteApi(id: number) {
  let pokemons = await getPokemonsFavoriteApi();
  const newPokemons = pokemons.filter((num: number) => num !== id);
  return await AsyncStorage.setItem(
    FAVORITE_STORAGE,
    JSON.stringify(newPokemons)
  ).catch((e) => {
    throw e;
  });
}

export async function deleteStorageApi() {
  return await AsyncStorage.removeItem(FAVORITE_STORAGE).catch((e) => {
    throw e;
  });
}
