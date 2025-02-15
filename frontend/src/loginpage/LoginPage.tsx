import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginPage.module.css";
import {useTranslation} from "react-i18next";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "password123") {
            navigate("/");
        } else {
            console.log("Invalid credentials");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2 className={styles.fontFamily}>{t("Welcome Back!")}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">{t("Email")}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t("Enter your email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">{t("Password")}</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder={t("Enter your password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginBtn}>{t("Login")}</button>
                </form>
                <div className={styles.forgotPassword}>
                    <a href="#">{t("Forgot Password?")}</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
