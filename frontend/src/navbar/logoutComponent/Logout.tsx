import React from "react";
import { useNavigate } from "react-router-dom";
import logoutButtonStyles from "./Logout.module.css";
import {useTranslation} from "react-i18next";

type LogoutProps = {
    onLogout?: () => void;
};

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const { t } = useTranslation();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userRole");
        localStorage.removeItem("username");
        localStorage.removeItem("i18nextLng");
        localStorage.removeItem("userEmail");
        localStorage.removeItem(("userId"));

        if (onLogout) {
            onLogout();
        }

        navigate("/");
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div>
            <button className={logoutButtonStyles.logoutButton} onClick={handleLogout}>{t("Logout")}</button>
        </div>
    );
};

export default Logout;
