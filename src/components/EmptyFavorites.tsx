import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EmptyFavorite() {
  const { navigate } = useNavigation();
  const handlePress = () => navigate("Pokedex");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No tienes ningún favorito aún</Text>
      <Button title="Ir a la Pokédex" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
