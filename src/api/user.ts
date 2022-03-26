import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "../utils/constants";
import { LoginFormFields, RegisterData } from "../models/Login";

const getUsersApi = async () => {
  return await AsyncStorage.getItem(USER_STORAGE)
    .then((res) => res ?? "[]")
    .then((res) => JSON.parse(res));
};

export const addUserApi = async ({ confirm, ...data }: RegisterData) => {
  let users = await getUsersApi();
  const result = users.filter(
    (user: RegisterData) => user.email === data.email
  );
  if (result.length > 0) {
    throw new Error("El usuario ya existe");
  }
  users.push(data);
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(users));
  return getUserApi(data);
};

export const getUserApi = async (data: LoginFormFields) => {
  let users = await getUsersApi();
  const result = users.filter(
    (user: LoginFormFields) =>
      user.username === data.username && user.password === data.password
  );
  if (result.length === 0) {
    throw new Error("El usuario no existe");
  }
  return result[0];
};
