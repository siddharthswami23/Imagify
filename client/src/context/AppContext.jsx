import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [User, setUser] = useState(true);
  const value = { User, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
