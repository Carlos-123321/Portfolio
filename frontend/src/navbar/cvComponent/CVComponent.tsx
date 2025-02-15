import { useState } from "react";
import portfolioStyles from "../cvComponent/cvstyles.module.css";
import { useTranslation } from "react-i18next";

const CVComponent = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Button to open modal */}
            <button
                onClick={() => setIsOpen(true)}
                className={portfolioStyles.openCVButton}
            >
                {t("Open CV Form")}
            </button>

            {/* Modal */}
            <div className={`${portfolioStyles.modalOverlay} ${isOpen ? portfolioStyles.showModal : ""}`}>
                <div className={portfolioStyles.modalContent}>
                    <h2>{t("Download CV")}</h2>
                    <a
                        href="/assets/CVE.pdf"
                        download
                        className={portfolioStyles.downloadCVButton}
                    >
                        {t("Download English CV")}
                    </a>
                    <a
                        href="/assets/CVF.pdf"
                        download
                        className={portfolioStyles.downloadCVButton}
                    >
                        {t("Download French CV")}
                    </a>
                    <button
                        onClick={() => setIsOpen(false)}
                        className={portfolioStyles.closeModalButton}
                    >
                        {t("Close")}
                    </button>
                </div>
            </div>
        </>
    );
};

export default CVComponent;
