import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./navbar.module.css";
import { useTranslation } from "react-i18next";
import CVComponent from "./cvComponent/CVComponent.tsx";
import Logout from "./logoutComponent/Logout.tsx";
import Modal from "./Modal.tsx";
import languageStyles from "./languageSwitcher.module.css";

const Navbar: React.FC = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const username = localStorage.getItem("username");
    const userRole = localStorage.getItem("userRole");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuIconClick = () => {
        setIsModalOpen(true);  // Open modal when menu icon is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Close modal
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (
        <div className={navbarStyles.navbarContainer}>

            <div className={navbarStyles.screenLess500}>

                <div className={navbarStyles.firstRowL500}>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className={navbarStyles.menuIcon}
                            viewBox="0 0 16 16"
                            onClick={handleMenuIconClick}
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    </div>
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

                <div className={navbarStyles.secondRowL500}>
                    sadsadasdadsad

                </div>


            </div>


            <div className={navbarStyles.homeTextContainer}>
                <div>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={navbarStyles.menuIcon}
                        viewBox="0 0 16 16"
                        onClick={handleMenuIconClick}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </div>
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

            <div className={navbarStyles.middleLine}/>

            <div className={navbarStyles.portfolioTextContainer}>
                <Link to="/portfolio" className={navbarStyles.portfolioTextLink}>
                    {t("Portfolio")}
                </Link>
                <Link to="/Journey" className={navbarStyles.portfolioTextLink}>
                    {t("Journey")}
                </Link>
                {isAuthenticated === "true" ? (
                    <div className={navbarStyles.usernameDisplay} onClick={toggleDropdown}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                        </svg>
                        <p className={navbarStyles.profileTextStyles}>{username}</p>
                    </div>


                ) : (
                    <Link to="/login" className={navbarStyles.portfolioTextLink}>
                        {t("Login")}
                    </Link>
                )}
                <div>
                    <button className={languageStyles.languageButton}
                            onClick={() => changeLanguage("en")}>{t("Eng")}</button>
                    <button className={languageStyles.languageButton}
                            onClick={() => changeLanguage("fr")}>{t("Fr")}</button>
                </div>
            </div>

            {isDropdownOpen && (
                <div className={navbarStyles.dropdown}>
                    <Logout onLogout={() => setIsDropdownOpen(false)} />
                </div>
            )}

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <CVComponent/>
                </Modal>
            )}
        </div>
    );
};

export default Navbar;
