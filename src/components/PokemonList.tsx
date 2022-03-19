import { usePokemons } from "../hooks/usePokemons";
import { Text, FlatList, StyleSheet } from "react-native";

export default function PokemonList() {
  const { pokemons } = usePokemons();
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.FlatList}
    />
  );
}

const styles = StyleSheet.create({
  FlatList: {
    paddingHorizontal: 5,
  },
});
