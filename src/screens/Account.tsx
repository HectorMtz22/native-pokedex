import { View, Text } from "react-native";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";

export default function Account() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
