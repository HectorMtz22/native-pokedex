import { NavigationProp } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import { Pokemon } from "../models/pokemon";

export default function usePokemonDetail(props: Pokemon) {
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonDetailsByIdApi(props.id)
      .then((res) => setPokemon(res))
      .then(() => setLoading(false))
      .catch((e) => setError(e));
  }, [props]);

  return { pokemon, error, loading };
}
