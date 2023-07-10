import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyUserDataService } from "../Service/apiServices";

export const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
 

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService({ token });
        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  const login = (token) => {
    setToken(token);
  };


  const logout = () => {
    setToken("");
    setUser(null);
    <Link to="/"></Link>;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};