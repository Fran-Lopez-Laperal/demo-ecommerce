import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyUserDataService } from "../Service/apiServices";

export const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [newsFilter, setNewsFilter] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService({ token });
        setUser(data);
        setIsLogged(true);
      } catch (error) {
        setToken("");
        setUser(null);
        setIsLogged(false);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  const login = (token) => {
    setToken(token);

  };

  const newsFilterFunction = (filterString) => {
    setNewsFilter(filterString);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    setIsLogged(false);
    <Link to="/"></Link>;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLogged,
        login,
        logout,
        setUser,
        newsFilterFunction,
        newsFilter,
        filter,
        setFilter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};