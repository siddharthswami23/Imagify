import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [User, setUser] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [Credit, setCredit] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    setUser("");
    toast.success("Logged out successfully");
  };

  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.creditBalance);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const value = {
    User,
    setUser,
    ShowLogin,
    setShowLogin,
    backendUrl,
    token,
    settoken,
    Credit,
    setCredit,
    loadCreditData,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
