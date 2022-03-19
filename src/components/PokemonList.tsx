import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";
import { usePokemons } from "../hooks/usePokemons";

export default function PokemonList() {
  const { pokemons, loadMore, isNext } = usePokemons();

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <PokemonCard {...item} />}
      contentContainerStyle={styles.FlatList}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#aeaeae"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  FlatList: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
