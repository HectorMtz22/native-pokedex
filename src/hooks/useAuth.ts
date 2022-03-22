import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginFormFields } from "../models/Login";
import { user, userDetails } from "../utils/userDB";

export default function useAuth(props: LoginFormFields) {
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);

  if (props.username !== user.username || props.password !== user.password) {
    setError(true);
  } else {
    login(userDetails);
  }

  return { error };
}
