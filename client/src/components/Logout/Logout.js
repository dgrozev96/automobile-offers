import { Navigate, useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    authService.logout(user.accessToken).then(() => {
      logout();
      navigate("/dashboard");
      NotificationManager.success(
        "You successfully logged out",
        "Success!",
        2000
      );
    });
  }, []);

  return null;
};

export default Logout;
