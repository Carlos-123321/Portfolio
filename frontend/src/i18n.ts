import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation JSON files
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n
    .use(LanguageDetector) // Detects browser language
    .use(initReactI18next) // Enables i18next in React
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation },
        },
        lng: localStorage.getItem("i18nextLng") || "en", // Load saved language from localStorage
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already escapes content
        },
        detection: {
            order: ["localStorage", "navigator"], // First try to get from localStorage, then the browser language
            caches: ["localStorage"], // Store the language in localStorage
        },
    });

export default i18n;
