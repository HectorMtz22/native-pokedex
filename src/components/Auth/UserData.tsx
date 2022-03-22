import { View, Text, StyleSheet, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function UserData() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <View>
      <Text>UserData</Text>
    </View>
  );
}
