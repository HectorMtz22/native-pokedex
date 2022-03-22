import { useContext } from "react";
import { View } from "react-native";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";
import { AuthContext } from "../context/AuthContext";

export default function Account() {
  const { isAuthenticated } = useContext(AuthContext);

  return <View>{isAuthenticated ? <UserData /> : <LoginForm />}</View>;
}
