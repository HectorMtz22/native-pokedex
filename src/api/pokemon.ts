import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}

export async function getPokemonDetailsByUrlApi(url: string) {
  const response = fetch(url)
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
  return response;
}
