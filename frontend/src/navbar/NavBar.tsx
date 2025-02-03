import React from "react";
import "./navbar.module.css";
import { Link } from "react-router-dom";
import navbarStyles from "./navbar.module.css";

const Navbar: React.FC = () => {
    return (
        <>

            <div className={navbarStyles.navbarContainer}>
                <div className={navbarStyles.homeTextContainer}>
                    <Link to="/" className={navbarStyles.homeTextLink}>
                        Home
                    </Link>
                </div>

                <div className={navbarStyles.middleLine}/>

                <div className={navbarStyles.portfolioTextContainer}>
                    <Link to="/portfolio" className={navbarStyles.portfolioTextLink}>
                        Portfolio
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Navbar;
