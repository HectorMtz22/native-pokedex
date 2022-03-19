import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { Pokemon } from "../models/pokemon";

export default function PokemonCard(pokemon: Pokemon) {
  const goToPokemon = () => {};

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bg}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    padding: 10,
  },
  bg: {
    backgroundColor: "grey",
  },
  number: {
    color: "#fff",
    fontSize: 11,
    position: "absolute",
    top: 10,
    right: 10,
  },
  name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    width: 90,
    height: 90,
    right: 2,
    bottom: 2,
  },
});
