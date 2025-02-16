// import React, { useEffect, useState } from "react";
// import NavBar from "../navbar/NavBar.tsx";
// import commentStyles from "./comment.module.css";
// import { useNavigate } from "react-router-dom";
// import { getUserById, updateUser } from "../apiCalls/user/userService.ts"; // Import updateUser
// import User from "../apiCalls/user/User.ts";
//
// const Comment: React.FC = () => {
//     const [comment, setComment] = useState("");
//     const navigate = useNavigate();
//     const [userDetails, setUserDetails] = useState<User | null>(null); // Store detailed user info
//
//     // Fetch the user details based on the ID from localStorage
//     useEffect(() => {
//         const userId = localStorage.getItem("userId");
//         if (userId) {
//             const fetchUserDetails = async () => {
//                 const data = await getUserById(Number(userId)); // Convert to number for API
//                 setUserDetails(data);
//             };
//
//             fetchUserDetails();
//         } else {
//             alert("No user found in local storage.");
//             navigate("/login");
//         }
//     }, [navigate]);
//
//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//
//         const isAuthenticated = localStorage.getItem("isAuthenticated");
//
//         if (!isAuthenticated) {
//             alert("You must first create an account to submit a comment.");
//             navigate("/login");
//             return;
//         }
//
//         if (comment.trim() && userDetails) {
//             const updatedUser = {
//                 ...userDetails,
//                 comment: [...userDetails.comment, comment],
//             };
//
//             // Send the update request
//             const response = await updateUser(userDetails.id, {
//                 name: updatedUser.name,
//                 email: updatedUser.email,
//                 password: updatedUser.password,
//                 role: updatedUser.role,
//                 comment: updatedUser.comment,
//             });
//
//             if (response) {
//                 alert("User updated successfully!");
//                 setComment(""); // Clear the comment input
//             } else {
//                 alert("Failed to update user.");
//             }
//         } else {
//             alert("Please enter a comment.");
//         }
//     };
//
//     return (
//         <>
//             <NavBar />
//             <div className={commentStyles.spaceDiv} />
//
//             <div className={commentStyles.commentPageContainer}>
//                 <h2>Leave a Comment</h2>
//
//                 <form onSubmit={handleSubmit} className={commentStyles.commentForm}>
//                     <textarea
//                         className={commentStyles.commentTextArea}
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         placeholder="Write your comment here..."
//                         rows={4}
//                     />
//                     <button type="submit" className={commentStyles.submitButton}>
//                         Submit Comment
//                     </button>
//                 </form>
//
//                 {/* Display detailed user information if the user is fetched */}
//                 {userDetails && (
//                     <div className={commentStyles.userDetails}>
//                         <h3>User Details</h3>
//                         <p><strong>Name:</strong> {userDetails.name}</p>
//                         <p><strong>Email:</strong> {userDetails.email}</p>
//                         <p><strong>Role:</strong> {userDetails.role}</p>
//                         <p><strong>Comments:</strong></p>
//                         <ul>
//                             {userDetails.comment?.map((com, index) => (
//                                 <li key={index}>{com}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };
//
// export default Comment;


import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.tsx";
import commentStyles from "./comment.module.css";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../apiCalls/user/userService.ts"; // Import updateUser
import User from "../apiCalls/user/User.ts";

const Comment: React.FC = () => {
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState<User | null>(null); // Store detailed user info

    // Fetch the user details based on the ID from localStorage
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            const fetchUserDetails = async () => {
                const data = await getUserById(Number(userId)); // Convert to number for API
                setUserDetails(data);
            };

            fetchUserDetails();
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const isAuthenticated = localStorage.getItem("isAuthenticated");

        if (!isAuthenticated) {
            // If the user is not authenticated, redirect them to the login page
            alert("You must log in to submit a comment.");
            navigate("/login");
            return;
        }

        // If the user is authenticated, submit the comment
        if (comment.trim() && userDetails) {
            const updatedUser = {
                ...userDetails,
                comment: [...userDetails.comment, comment],
            };

            // Send the update request
            const response = await updateUser(userDetails.id, {
                name: updatedUser.name,
                email: updatedUser.email,
                password: updatedUser.password,
                role: updatedUser.role,
                comment: updatedUser.comment,
            });

            if (response) {
                alert("Comment submitted successfully!");
                setComment(""); // Clear the comment input
            } else {
                alert("Failed to submit comment.");
            }
        } else {
            alert("Please enter a comment.");
        }
    };

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

                {/* Display detailed user information if the user is fetched */}
                {userDetails && (
                    <div className={commentStyles.userDetails}>
                        <h3>User Details</h3>
                        <p><strong>Name:</strong> {userDetails.name}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                        <p><strong>Role:</strong> {userDetails.role}</p>
                        <p><strong>Comments:</strong></p>
                        <ul>
                            {userDetails.comment?.map((com, index) => (
                                <li key={index}>{com}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Comment;
