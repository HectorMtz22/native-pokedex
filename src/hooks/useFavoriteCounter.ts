import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";

export default function useFavoriteCounter() {
  const [counter, setCounter] = useState(0);

  useFocusEffect(
    useCallback(() => {
      getPokemonsFavoriteApi().then(({ length }) => setCounter(length));
    }, [])
  );

  return { counter };
}
