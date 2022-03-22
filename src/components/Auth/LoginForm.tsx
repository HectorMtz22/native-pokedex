import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useForm } from "react-hook-form";
import { user, userDetails } from "../../utils/userDB";
import InputText from "../InputText";
import { LoginFormFields } from "../../models/Login";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (formValues: LoginFormFields) => {
    if (
      formValues.username !== user.username ||
      formValues.password !== user.password
    ) {
      setError("El usuario o contraseña no son correctos");
    } else {
      setError(null);
      console.log("Enviado");
    }
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
