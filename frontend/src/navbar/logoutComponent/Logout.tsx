import React from "react";
import { useNavigate } from "react-router-dom";
import logoutButtonStyles from "./Logout.module.css";

const Logout: React.FC = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userRole");
        localStorage.removeItem("username");
        localStorage.removeItem("i18nextLng");
        localStorage.removeItem("userEmail");
        localStorage.removeItem(("userId"));

        navigate("/");
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div>
            <button className={logoutButtonStyles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
