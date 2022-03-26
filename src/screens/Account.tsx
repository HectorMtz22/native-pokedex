import { useState, useContext } from "react";
import { ScrollView } from "react-native";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";
import { AuthContext } from "../context/AuthContext";
import RegisterForm from "../components/Auth/RegisterForm";
import MoveBetweenForms from "../components/Auth/MoveBetweenForms";

export default function Account() {
  const { isAuthenticated } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  if (isAuthenticated) return <UserData />;

  return (
    <ScrollView>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <MoveBetweenForms isLogin={isLogin} setIsLogin={setIsLogin} />
    </ScrollView>
  );
}
