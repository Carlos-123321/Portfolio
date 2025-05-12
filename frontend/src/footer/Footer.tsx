import React from "react";
import footerStyles from "./footer.module.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {

    const { t } = useTranslation();

    return (
        <footer className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContent}>
                <div className={footerStyles.contactInfoOne}>
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
                            {t("Click here to open email form")}
                        </p>
                        <Link to="/email" className={footerStyles.portfolioTextLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className={footerStyles.contactInfoTwo}>
                    <h3 className={footerStyles.titleTextFooter}>{t("Follow Me")} 🎯</h3>
                    <div className={footerStyles.followFirstRow}>
                        <p className={footerStyles.textFooter}>
                            LinkedIn:
                        </p>
                        <a className={footerStyles.followLink}
                           href="https://www.linkedin.com/in/carlos-alvarado-sanchez-87627b329/" target="_blank"
                           rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                    <div className={footerStyles.followFirstRow}>
                        <p className={footerStyles.textFooter}>
                            GitHub:
                        </p>
                        <a className={footerStyles.followLink}
                           href="https://github.com/Carlos-123321" target="_blank"
                           rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
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
