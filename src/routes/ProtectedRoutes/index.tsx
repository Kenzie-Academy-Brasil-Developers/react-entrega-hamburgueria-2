import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoutes = () => {
  const { autoLogin, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }
  return autoLogin ? <Outlet /> : <Navigate to="/" />;
};
