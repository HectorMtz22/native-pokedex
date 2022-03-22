import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { LoginInputText } from "../models/Login";

export default function InputText({
  errors,
  control,
  name,
  placeholder,
  ...props
}: LoginInputText) {
  return (
    <View>
      {errors && <Text style={styles.error}>This is required</Text>}
      <Controller
        control={control}
        name={name}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
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
});
