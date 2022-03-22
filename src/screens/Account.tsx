import { useContext } from "react";
import { View } from "react-native";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";
import { AuthContext } from "../context/AuthContext";

export default function Account() {
  const { auth } = useContext(AuthContext);

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
