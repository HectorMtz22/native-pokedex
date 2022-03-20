import { Text, ScrollView } from "react-native";
import Header from "../components/Pokemon/Header";
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
      <Header {...pokemon} />
      <Text>{pokemon.name}</Text>
    </ScrollView>
  );
}
