import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../components/services";

export const UserContext = createContext({} as iUserContext);

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iRegister {
  data: Object;
}

interface iLogin {
  data: Object;
}

interface iUserContext {
  userState: Object;
  createAccount: (data: iRegister) => void;
  login: (data: iRegister) => void;
  loading: boolean;
  autoLogin: boolean;
  logout: () => void;
}

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [userState, setUserstate] = useState({});
  const [loading, setLoading] = useState(true);
  const [autoLogin, setAutoLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        setAutoLogin(false);
        return;
      }

      try {
        const { data } = await api.get("/products", {
          headers: { authorization: `Bearer ${token}` },
        });
        setUserstate(data);
        setAutoLogin(true);
        navigate("/home");
      } catch (error) {
        setAutoLogin(false);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [loading]);

  async function createAccount(data: iRegister) {
    try {
      await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function login(data: iLogin) {
    try {
      console.log("trying to login");
      const response = await api.post("/login", data);
      console.log(response);
      const { accessToken, user } = await response.data;
      setUserstate(user);
      localStorage.setItem("token", accessToken);
      navigate("/home");
      setAutoLogin(true);
    } catch (error) {
      console.log(error);
    }
  }

  /*   async function createCard(data2) {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      await api.post("/users/techs", data2, {
        headers: { authorization: `Bearer ${token}` },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletCard(id) {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await api.delete(`/users/techs/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  } */

  function logout() {
    localStorage.removeItem("token");
    setAutoLogin(false);
  }

  return (
    <UserContext.Provider
      value={{
        userState,
        createAccount,
        login,
        loading,
        autoLogin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
