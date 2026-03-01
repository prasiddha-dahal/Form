import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load users and logged-in user from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    const savedCurrentUser = localStorage.getItem("currentUser");

    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedCurrentUser) setCurrentUser(JSON.parse(savedCurrentUser));
  }, []);

  // Save users and currentUser to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [users, currentUser]);

  // Register user and auto-login
  const register = (username, password) => {
    const newUser = {
      id: users.length + 1,
      username,
      password,
    };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser); 
  };

  // Login user
  const login = (username, password) => {
    const foundUser = users.find(
      user => user.username === username && user.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  // Logout user
  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};