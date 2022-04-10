import { createContext, useState, useContext } from "react";

import { useLocation, Navigate } from "react-router-dom";

import { setInStorage, login, signup, post } from "../services/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const userStored = localStorage.getItem("user");
  const [user, setUser] = useState(userStored ? JSON.parse(userStored) : null);

  const signin = async (data) => {
    try {
      const response = await login(data);
      const user = {
        accessToken: response.data.accessToken,
        ...response.data.user,
      };

      setInStorage("user", user);
      setUser(user);
    } catch (error) {
      console.log(error);
      alert("Email ou senha inválidos");
    }
  };

  const regisTer = async (data) => {
    try {
      const response = await signup(data);
      const user = {
        accessToken: response.data.accessToken,
        ...response.data.user,
      };

      setInStorage("user", user);
      setUser(user);
    } catch (error) {
      console.log(error);
      alert("Usuário já existe");
    }
  };

  const PostTwits = async (data) => {
    try {
      const response = await post(data);
      return response.data;
      alert("Post Realizado com sucesso");
    } catch (error) {
      console.log(error);
      alert("erro ao realizar o posttwits");
    }
  };

  const signout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signin, signout, regisTer, PostTwits }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();

  let location = useLocation();

  if (!auth.user?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
