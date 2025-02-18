import React from "react";
import footerStyles from "./footer.module.css";
import navbarStyles from "../navbar/navbar.module.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {

    const { t } = useTranslation();

    return (
        <footer className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContent}>
                <div className={footerStyles.contactInfo}>
                    <h3 className={footerStyles.titleTextFooter}>{t("Contact Me")} 📲</h3>

                    <div className={footerStyles.contactFirstRow}>

                        <p className={footerStyles.textFooter}>
                            Email:
                        </p>
                            <a href="mailto:carlos.alvarado1094@gmail.com" className={footerStyles.contactLink}>
                                carlos.alvarado1094@gmail.com
                            </a>

                    </div>

                    <div className={footerStyles.contactSecondRow}>
                        <p className={footerStyles.textFooter}>
                            {t("Send Email")}
                        </p>
                        <Link to="/email" className={navbarStyles.portfolioTextLink}>
                            Click here to open email form
                        </Link>
                    </div>
                </div>

                <div className={footerStyles.contactInfo}>
                    <h3 className={footerStyles.titleTextFooter}>{t("Follow Me")} 🎯</h3>
                    <div className={footerStyles.followFirstRow}>
                        <p className={footerStyles.textFooter}>
                            LinkedIn:
                        </p>
                        <a className={footerStyles.followLink}
                           href="https://www.linkedin.com/in/carlos-alvarado-sanchez-87627b329/" target="_blank"
                           rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className={footerStyles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} CarlosAlvarado. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
