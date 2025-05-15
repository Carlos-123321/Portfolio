import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.tsx";
import DashboardStyles from "./dashboard.module.css";
import { getUsers } from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";
import UserCard from "./UserCard";
import commentStyles from "../commentPage/comment.module.css";
import { updateUser } from "../apiCalls/user/userService.ts";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
    const username = localStorage.getItem("username");
    const [users, setUsers] = useState<User[]>([]);
    const { t } = useTranslation();

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const userRole = localStorage.getItem("userRole");

    useEffect(() => {
        const fetchUsers = async () => {
            if (isAuthenticated && userRole === "Admin") {
                const data = await getUsers();
                setUsers(data);
            }
        };
        fetchUsers();
    }, [isAuthenticated, userRole]);

    const deleteComment = async (userId: number, commentIndex: number) => {
        const updatedUsers = [...users];
        const user = updatedUsers.find((user) => user.id === userId);

        if (user && user.comments) {
            user.comments.splice(commentIndex, 1);
            const updatedUser = {
                ...user,
                comments: user.comments.length > 0 ? user.comments : [],
            };

            const response = await updateUser(userId, updatedUser);

            if (response) {
                setUsers(updatedUsers);
            } else {
                alert("Failed to update user.");
            }
        }
    };

    const approveComment = async (userId: number, commentIndex: number) => {
        const updatedUsers = users.map((user) =>
            user.id === userId
                ? {
                    ...user,
                    comments: user.comments.map((comment, idx) =>
                        idx === commentIndex ? { ...comment, approved: true } : comment
                    ),
                }
                : user
        );

        const userToUpdate = updatedUsers.find((user) => user.id === userId);

        if (userToUpdate) {
            const updatedUser = {
                id: userToUpdate.id,
                name: userToUpdate.name,
                email: userToUpdate.email,
                password: userToUpdate.password,
                role: userToUpdate.role,
                comments: userToUpdate.comments,
            };

            const response = await updateUser(userId, updatedUser);

            if (response) {
                setUsers(updatedUsers);
            } else {
                alert("Failed to approve comment.");
            }
        }
    };

    const disapproveComment = async (userId: number, commentIndex: number) => {
        const updatedUsers = users.map((user) =>
            user.id === userId
                ? {
                    ...user,
                    comments: user.comments.map((comment, idx) =>
                        idx === commentIndex ? { ...comment, approved: false } : comment
                    ),
                }
                : user
        );

        const userToUpdate = updatedUsers.find((user) => user.id === userId);

        if (userToUpdate) {
            const updatedUser = {
                id: userToUpdate.id,
                name: userToUpdate.name,
                email: userToUpdate.email,
                password: userToUpdate.password,
                role: userToUpdate.role,
                comments: userToUpdate.comments,
            };

            const response = await updateUser(userId, updatedUser);

            if (response) {
                setUsers(updatedUsers);
            } else {
                alert("Failed to disapprove comment.");
            }
        }
    };

    return (
        <>
            <NavBar />
            <div className={DashboardStyles.spaceDiv} />

            <div className={DashboardStyles.dashboardPageContainer}>
                {username && <p className={DashboardStyles.myTitleText}>{t("Welcome back")}, {username} 😁</p>}
                {!username && <p className={DashboardStyles.myTitleText}>{t("Username not found")}</p>}

                {isAuthenticated && userRole === "Admin" ? (
                    <div className={commentStyles.projectList}>
                        <p className={DashboardStyles.myTitleSubText}>{t("Review Comments")} 💬</p>
                        <div className={DashboardStyles.userCardsContainer}>
                            {users.map((user) => (
                                <UserCard
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    comments={user.comments}
                                    deleteComment={deleteComment}
                                    approveComment={approveComment}
                                    disapproveComment={disapproveComment}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className={DashboardStyles.myTitleText}>
                        {t("You are not authorized to view this content.")}
                    </p>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Dashboard;
