import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import usePokemonDetail from "../hooks/usePokemonDetail";

export default function Pokemon(props: any) {
  const {
    navigation,
    route: { params },
  } = props;
  const { pokemon, loading, error } = usePokemonDetail(params);

  if (!pokemon || loading) return null;
  if (error) navigation.goBack();

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Header {...pokemon} />
      <Type types={pokemon.type} />
    </ScrollView>
  );
}
