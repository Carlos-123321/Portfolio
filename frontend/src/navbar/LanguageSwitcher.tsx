import { useTranslation } from "react-i18next";
import languageStyles from "./languageSwitcher.module.css";

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    console.log(i18n.language);

    return (
        <div className={languageStyles.languageContainer}>
            <button className={languageStyles.languageButton} onClick={() => changeLanguage("en")}>{t("Eng")}</button>
            <button className={languageStyles.languageButton} onClick={() => changeLanguage("fr")}>{t("Fr")}</button>
        </div>
    );
};

export default LanguageSwitcher;
