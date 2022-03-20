import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";

import { Pokemon } from "../models/pokemon";

export default function PokemonCard(pokemon: Pokemon) {
  const navigation = useNavigation();
  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type),
    ...styles.bg,
  };

  const pokemonNumber = `${pokemon.order}`.padStart(3, "0");

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{pokemonNumber}</Text>
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
    flex: 1,
    padding: 10,
  },
  bg: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
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
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    width: 90,
    height: 90,
    right: 2,
    bottom: 2,
  },
});
