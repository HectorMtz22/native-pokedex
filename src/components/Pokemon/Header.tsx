import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pokemon } from "../../models/pokemon";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header({ name, order, image, type }: Pokemon) {
  const color = getColorByPokemonType(type[0]);
  const number = `${order}`.padStart(3, "0");
  return (
    <>
      <View style={bgStyles(color).bg} />

      <SafeAreaView style={styles.content}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{number}</Text>
        </View>
        <View style={styles.containerImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const bgStyles = (color: string) =>
  StyleSheet.create({
    bg: {
      width: "100%",
      height: 400,
      position: "absolute",
      borderBottomLeftRadius: 300,
      borderBottomEndRadius: 300,
      backgroundColor: color,
      transform: [{ scaleX: 2 }],
    },
  });

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },

  containerImage: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    top: 30,
    height: 300,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
