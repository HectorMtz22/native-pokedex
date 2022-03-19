import { FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";
import { usePokemons } from "../hooks/usePokemons";

export default function PokemonList() {
  const { pokemons } = usePokemons();
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <PokemonCard {...item} />}
      contentContainerStyle={styles.FlatList}
    />
  );
}

const styles = StyleSheet.create({
  FlatList: {
    paddingHorizontal: 5,
  },
});
