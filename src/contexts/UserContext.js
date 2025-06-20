import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => localStorage.getItem("userId") || null );
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("userId") );
  const [UserRole , setUserRole] = useState(() => localStorage.getItem("UserRole") || null );
  

  const login = (id , role) => {
    setUserId(id);
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem("userId", id);
    localStorage.setItem("UserRole", role)
  };

  const logout = () => {
    setUserId(null);
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("UserRole");
  };

  return (
    <UserContext.Provider value={{ userId, isLoggedIn ,UserRole , login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);