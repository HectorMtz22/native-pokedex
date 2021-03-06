import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi(email: string) {
  return await AsyncStorage.getItem(FAVORITE_STORAGE + email)
    // @ts-expect-error
    .then((res) => JSON.parse(res))
    .then((res) => res ?? [])
    .catch((e) => {
      throw e;
    });
}

export async function isPokemonFavoriteApi(
  id: number,
  email: string
): Promise<boolean> {
  if (typeof id === "undefined") return false;
  const result = await getPokemonsFavoriteApi(email);
  return result.includes(id);
}

export async function addPokemonFavoriteApi(id: number, email: string) {
  let pokemons = await getPokemonsFavoriteApi(email);
  const favorites = [...pokemons, id];
  return await AsyncStorage.setItem(
    FAVORITE_STORAGE + email,
    JSON.stringify(favorites)
  ).catch((e) => {
    throw e;
  });
}

export async function deletePokemonFavoriteApi(id: number, email: string) {
  let pokemons = await getPokemonsFavoriteApi(email);
  const newPokemons = pokemons.filter((num: number) => num !== id);
  return await AsyncStorage.setItem(
    FAVORITE_STORAGE + email,
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
