import { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text } from "react-native";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Type from "../components/Pokemon/Type";
import { useNavigation } from "@react-navigation/native";
import usePokemonDetail from "../hooks/usePokemonDetail";
import IconFavorite from "../components/Pokemon/IconFavorite";

export default function Pokemon({ route: { params } }: any) {
  const { goBack, setOptions } = useNavigation();
  const { pokemon, loading, error } = usePokemonDetail(params);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <IconFavorite id={pokemon?.id} />,
    });
  }, [pokemon]);

  if (error) goBack();
  if (!pokemon || loading) return null;

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Header {...pokemon} />
      <Type types={pokemon.type} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
