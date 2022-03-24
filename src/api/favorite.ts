import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi() {
  return await AsyncStorage.getItem(FAVORITE_STORAGE)
    .then((res) => {
      if (res !== null) JSON.parse(res);
    })
    .catch((e) => {
      throw e;
    });
}

export async function addPokemonFavoriteApi(id: number) {
  let favorites = await getPokemonsFavoriteApi();
  return await AsyncStorage.setItem(
    FAVORITE_STORAGE,
    JSON.stringify(favorites)
  ).catch((e) => {
    throw e;
  });
}
