import { LoginCall } from "./ApiCalls";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("sseUser")) || null
  );

  const login = async (output) => {
    const res = await LoginCall(output);
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("sseUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
