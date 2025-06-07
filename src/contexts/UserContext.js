import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (id) => {
    setUserId(id);
    setLoggedIn(true);
  };

  const logout = () => {
    setUserId(null);
    setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ userId, loggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);