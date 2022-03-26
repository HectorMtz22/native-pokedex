import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./formStyles";
import InputText from "../InputText";
import { RegisterData } from "../../models/Login";

const defaultValues = {
  username: "",
  firstname: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
};

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (formValues: RegisterData) => {
    if (formValues.password !== formValues.confirm) {
      setError("Contraseñas no coinciden");
      return;
    }

    setError(null);
  };

  return (
    <View>
      <Text style={styles.title}>Regístrate</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <InputText
        control={control}
        errors={errors["username"]}
        name={"username"}
        placeholder="Ingresa tu nombre de usuario"
        autoCapitalize="none"
        autoFocus
      />
      <InputText
        control={control}
        errors={errors["firstname"]}
        name="firstname"
        placeholder="Ingresa tu nombre(s)"
      />
      <InputText
        control={control}
        errors={errors["lastName"]}
        name="lastName"
        placeholder="Ingresa tu apellido(s)"
      />
      <InputText
        control={control}
        errors={errors["email"]}
        name={"email"}
        placeholder="Ingresa tu email"
        autoCapitalize="none"
      />
      <InputText
        control={control}
        errors={errors["password"]}
        name={"password"}
        placeholder="Ingresa tu Contraseña"
        autoCapitalize="none"
        secureTextEntry
      />
      <InputText
        control={control}
        errors={errors["confirm"]}
        name={"confirm"}
        placeholder="Verifica tu Contraseña"
        autoCapitalize="none"
        secureTextEntry
      />
      <View style={styles.button}>
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
