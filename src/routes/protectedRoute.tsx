import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export const ProtectedRoute = () => {
  const { profileData } = useGlobalContext();

  if (!profileData) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
