import { useState, useCallback, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { AuthContext } from "../context/AuthContext";

export default function useFavoriteCounter() {
  const [counter, setCounter] = useState(0);
  const { auth } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      getPokemonsFavoriteApi(auth.email).then(({ length }) =>
        setCounter(length)
      );
    }, [])
  );

  return { counter };
}
