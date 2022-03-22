import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    validateOnChange: false,
    onSubmit: (formValue) => console.log("Enviado"),
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        autoFocus
      />
      <Text style={styles.error}>{formik.errors.password}</Text>
      <TextInput
        placeholder="Contraseña"
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <View style={styles.button}>
        <Button title="Entrar" onPress={() => formik.handleSubmit()} />
      </View>
    </View>
  );
}

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = {
  username: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
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
    // textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "#f00",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    marginHorizontal: 12,
  },
});
