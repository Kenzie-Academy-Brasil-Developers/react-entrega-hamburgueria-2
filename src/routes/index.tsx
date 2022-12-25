import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/index";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import Register from "../pages/Register";
import Home from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
