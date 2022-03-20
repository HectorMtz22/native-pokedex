import { View, Text } from "react-native";
import usePokemonDetail from "../hooks/usePokemonDetail";

export default function Pokemon(props: any) {
  const {
    navigation,
    route: { params },
  } = props;
  const { pokemon, loading, error } = usePokemonDetail(params);
  console.log(pokemon);

  if (!pokemon || loading) return null;
  if (error) navigation.goBack();

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
