import React, {useEffect, useState} from "react";
import NavBar from "../navbar/NavBar.tsx";
import commentStyles from "./comment.module.css";
import { useNavigate } from "react-router-dom";
import {getUsers} from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";

const Comment: React.FC = () => {
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const isAuthenticated = localStorage.getItem("isAuthenticated");

        if (!isAuthenticated) {
            alert("You must first create an account to submit a comment.");
            navigate("/login");
            return;
        }

        if (comment.trim()) {
            console.log("Comment submitted:", comment);
            setComment("");
        } else {
            alert("Please enter a comment.");
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <>
            <NavBar />
            <div className={commentStyles.spaceDiv} />

            <div className={commentStyles.commentPageContainer}>
                <h2>Leave a Comment</h2>

                <form onSubmit={handleSubmit} className={commentStyles.commentForm}>
                    <textarea
                        className={commentStyles.commentTextArea}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write your comment here..."
                        rows={4}
                    />
                    <button type="submit" className={commentStyles.submitButton}>
                        Submit Comment
                    </button>
                </form>

                <div className={commentStyles.projectList}>
                    <h3>Users</h3>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Comment;
