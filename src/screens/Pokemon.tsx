import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text } from "react-native";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Type from "../components/Pokemon/Type";
import { useNavigation } from "@react-navigation/native";
import usePokemonDetail from "../hooks/usePokemonDetail";

export default function Pokemon({ route: { params } }: any) {
  const { goBack, setOptions } = useNavigation();
  const { pokemon, loading, error } = usePokemonDetail(params);

  if (error) goBack();
  if (!pokemon || loading) return null;

  useEffect(() => {
    setOptions({
      headerRight: () => <Text>asldjkf</Text>,
    });
  }, [params]);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Header {...pokemon} />
      <Type types={pokemon.type} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
