import { useNavigation } from "@react-navigation/native";
import { Button, Text, View, StyleSheet } from "react-native";

export default function NotLogged() {
  const { navigate } = useNavigation();
  const handlePress = () => {
    // @ts-expect-error
    navigate("Account");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Para ver esto tienes que iniciar sesión</Text>
      <Button title="Inicia Sesión" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
