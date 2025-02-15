import React from "react";
import footerStyles from "./footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContent}>
                <div className={footerStyles.contactInfo}>
                    <h3>Contact Me</h3>
                    <p>
                        Email:
                        <a href="mailto:carlos.alvarado1094@gmail.com" className={footerStyles.contactLink}>
                            carlos.alvarado1094@gmail.com
                        </a>
                    </p>
                    <p>
                        Phone:
                        <a href="tel:+15142953947" className={footerStyles.contactLink}>
                            +1 (514) 295-3947
                        </a>
                    </p>
                </div>

                <div className={footerStyles.socialMedia}>
                    <h3>Follow Me</h3>
                    <div className={footerStyles.socialIcons}>
                        <a href="https://www.linkedin.com/in/carlos-alvarado-sanchez-87627b329/" target="_blank" rel="noopener noreferrer">
                            {/*<FaLinkedin />*/}LinkedIn
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
