import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.tsx";
import DashboardStyles from "./dashboard.module.css";
import { getUsers } from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";
import UserCard from "./UserCard"; // Import UserCard component
import commentStyles from "../commentPage/comment.module.css";
import { updateUser } from "../apiCalls/user/userService.ts";
import Footer from "../footer/Footer.tsx"; // Import the updateUser function

const Dashboard: React.FC = () => {
    const username = localStorage.getItem("username");
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    // Delete the comment from the user
    const deleteComment = async (userId: number, commentIndex: number) => {
        const updatedUsers = [...users];
        const user = updatedUsers.find((user) => user.id === userId);

        if (user && user.comment) {
            // Remove the comment from the array
            user.comment.splice(commentIndex, 1);

            // If there are no comments left, set comment to an empty array
            const updatedUser = {
                ...user,
                comment: user.comment.length > 0 ? user.comment : [],
            };

            // Send the updated user data to the backend
            const response = await updateUser(userId, updatedUser);

            if (response) {
                // Update the local state to reflect the change
                setUsers(updatedUsers);
            } else {
                alert("Failed to update user.");
            }
        }
    };

    return (
        <>
            <NavBar />
            <div className={DashboardStyles.spaceDiv} />

            <div className={DashboardStyles.dashboardPageContainer}>
                {username && <p className={DashboardStyles.myTitleText}>Welcome back, {username} 😁</p>}
                {!username && <p className={DashboardStyles.myTitleText}>Username not found!</p>}


            <div className={commentStyles.projectList}>
                <p className={DashboardStyles.myTitleSubText}>Review Comments 💬</p>
                <div className={DashboardStyles.userCardsContainer}>
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            comment={user.comment}
                            deleteComment={deleteComment}
                            id={user.id}                        />
                    ))}
                </div>
            </div>

            </div>

            <Footer/>
        </>
    );
};

export default Dashboard;
