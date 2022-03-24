import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Pokemon } from "../models/pokemon";
import PokemonCard from "./PokemonCard";

type PokemonListProps = {
  pokemons: Pokemon[];
  loadMore: any;
  isNext: boolean | null;
};

export default function PokemonList({
  pokemons,
  loadMore,
  isNext,
}: PokemonListProps) {
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
      // @ts-expect-error
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
