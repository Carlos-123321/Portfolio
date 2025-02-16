import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./sign.module.css";
import { useTranslation } from "react-i18next";

const Sign: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === confirmPassword) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("userRole", "user");
            localStorage.setItem("username", name);

            alert("Account created successfully!");

            navigate("/");
        } else {
            alert("Passwords do not match.");
        }
    };

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.signUpBox}>
                <h2 className={styles.fontFamily}>{t("Create Your Account")}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">{t("Name")}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t("Enter your name")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword">{t("Confirm Password")}</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder={t("Confirm your password")}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.signUpBtn}>{t("Sign Up")}</button>
                </form>
                <div className={styles.signInPrompt}>
                    <p>{t("Already have an account?")}</p>
                    <Link to="/login">
                        <p>{t("Login here")}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sign;