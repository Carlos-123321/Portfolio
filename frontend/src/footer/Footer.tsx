import React from "react";
import footerStyles from "./footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContent}>
                <div className={footerStyles.contactInfo}>
                    <h3 className={footerStyles.titleTextFooter}>Contact Me 📲</h3>

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
                            Phone:
                        </p>
                        <a href="tel:+15142953947" className={footerStyles.contactLink}>
                            +1 (514) 295-3947
                        </a>
                    </div>
                </div>

                <div className={footerStyles.contactInfo}>
                    <h3 className={footerStyles.titleTextFooter}>Follow Me 🎯</h3>
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
