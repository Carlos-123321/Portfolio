import React from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./navbar.module.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import CVComponent from "./cvComponent/CVComponent.tsx";
import Logout from "./logoutComponent/Logout.tsx";

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const username = localStorage.getItem("username");
    const userRole = localStorage.getItem("userRole");

    return (
        <div className={navbarStyles.navbarContainer}>
            <div className={navbarStyles.homeTextContainer}>
                <LanguageSwitcher />
                <CVComponent />
                <Link to="/" className={navbarStyles.homeTextLink}>
                    {t("Home")}
                </Link>
                <Link to="/comment" className={navbarStyles.homeTextLink}>
                    {t("Leave a comment")}
                </Link>

                {isAuthenticated === "true" && userRole === "Admin" && (
                    <Link to="/adminDashboard" className={navbarStyles.homeTextLink}>
                        {t("Dashboard")}
                    </Link>
                )}
            </div>

            <div className={navbarStyles.middleLine} />

            <div className={navbarStyles.portfolioTextContainer}>
                <Link to="/portfolio" className={navbarStyles.portfolioTextLink}>
                    {t("Portfolio")}
                </Link>
                <Link to="/academicJourney" className={navbarStyles.portfolioTextLink}>
                    {t("Academic Journey")}
                </Link>
                {isAuthenticated === "true" ? (
                    <div className={navbarStyles.usernameDisplay}>
                        {username}
                    </div>
                ) : (
                    <Link to="/login" className={navbarStyles.portfolioTextLink}>
                        {t("Login")}
                    </Link>
                )}
                <Logout />
            </div>
        </div>
    );
};

export default Navbar;
