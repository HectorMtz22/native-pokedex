import { View, Text, StyleSheet, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ItemMenu from "../ItemMenu";
import useFavoriteCounter from "../../hooks/useFavoriteCounter";

export default function UserData() {
  const { auth, logout } = useContext(AuthContext);
  const { counter } = useFavoriteCounter();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>
          {auth.firstname} {auth.lastName}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstname} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${counter} Pokemon`} />
      </View>
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
});
