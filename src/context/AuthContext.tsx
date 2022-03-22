import { useState, createContext } from "react";
import { LoginData } from "../models/Login";

export const AuthContext = createContext({
  auth: { firstName: "", lastName: "", username: "", email: "" },
  login: (userData: LoginData) => {},
  logout: () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }: any) {
  const [auth, setAuth] = useState<LoginData | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData: LoginData) => {
    setAuth(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setAuth(undefined);
    setIsAuthenticated(false);
  };

  const valueContext = {
    auth,
    isAuthenticated,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
