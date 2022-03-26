import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

type MoveBetweenFormsProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MoveBetweenForms({
  isLogin,
  setIsLogin,
}: MoveBetweenFormsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {isLogin ? "¿Aún no tienes cuenta?" : "¿Ya tienes cuenta?"}
      </Text>
      <View style={styles.button}>
        <Button
          title={isLogin ? "Registrarse" : "Iniciar Sesión"}
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  titleText: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginHorizontal: 12,
  },
});
