import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./loginPage.module.css";
import { useTranslation } from "react-i18next";
import { getUsers } from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("username", user.name);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userRole", user.role);
            localStorage.setItem("userId", String(user.id));

            alert("Login successful");
            navigate("/");
        } else {
            alert("Invalid credentials");
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
                    <button type="submit" className={styles.loginBtn}>
                        {t("Login")}
                    </button>
                </form>
                <div className={styles.forgotPassword}>
                    <a href="#">{t("Forgot Password?")}</a>
                </div>

                <Link to="/sign-up">
                    <div>
                        <p>{t("Don't have an account? Sign up!")}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
