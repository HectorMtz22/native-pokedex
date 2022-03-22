import { useState, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useForm } from "react-hook-form";
import InputText from "../InputText";
import { LoginFormFields } from "../../models/Login";
import { AuthContext } from "../../context/AuthContext";
import getUser from "../../api/getUser";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState<string | null>(null);
  const { login } = useContext(AuthContext);

  const onSubmit = async (formValues: LoginFormFields) => {
    getUser(formValues)
      .then((res) => {
        setError(null);
        login(res);
      })
      .catch(() => setError("El usuario o contraseña no son correctos"));
  };

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <InputText
        control={control}
        name="username"
        errors={errors["username"]}
        placeholder="Ingresa tu nombre de usuario"
        autoCapitalize="none"
        autoFocus
      />
      <InputText
        control={control}
        name="password"
        errors={errors["password"]}
        placeholder="Ingresa tu contraseña"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const defaultValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  error: {
    marginBottom: 10,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "#f00",
  },
  button: {
    marginHorizontal: 12,
  },
});
