import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("elora-user") || "null"));

  const login = (data) => {
    const next = { name: data.name || data.email.split("@")[0], email: data.email };
    setUser(next);
    localStorage.setItem("elora-user", JSON.stringify(next));
  };
  const register = (data) => login(data);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("elora-user");
  };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
