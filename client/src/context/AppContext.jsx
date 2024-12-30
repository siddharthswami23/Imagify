import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [User, setUser] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const value = { User, setUser, ShowLogin, setShowLogin };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
