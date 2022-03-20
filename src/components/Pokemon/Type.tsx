import { StyleSheet, View, Text } from "react-native";
import { Types } from "../../models/pokemonType";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type({ types }: Types) {
  let colors = types.map((item) => getColorByPokemonType(item));
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View key={index} style={bgStyles(colors[index]).pill}>
          <Text style={styles.name}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const bgStyles = (color: string) =>
  StyleSheet.create({
    pill: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 10,
      backgroundColor: color,
    },
  });

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    textTransform: "capitalize",
  },
});
