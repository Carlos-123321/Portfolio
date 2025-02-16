import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.tsx";
import commentStyles from "./comment.module.css";
import {getUserById, updateComment} from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";

const Comment: React.FC = () => {
    const [comment, setComment] = useState("");
    const [userDetails, setUserDetails] = useState<User | null>(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            const fetchUserDetails = async () => {
                const data = await getUserById(Number(userId));
                setUserDetails(data);
            };

            fetchUserDetails();
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!comment.trim()) {
            alert("Comment cannot be empty!");
            return;
        }

        if (!userDetails) {
            alert("User details not found!");
            return;
        }

        // Add new comment without an ID (backend will generate it)
        const newComment = {
            comment: comment, // No 'id' field here
            approved: false
        };

        const updatedComments = [
            ...userDetails.comments,
            newComment // Add the new comment to the array
        ];

        const updatedUser = {
            ...userDetails,
            comments: updatedComments,
        };

        // Send the updated user object without the new comment's ID
        const response = await updateComment(userDetails.id, updatedUser);

        if (response) {
            setUserDetails(updatedUser);
            setComment(""); // Clear input field after successful submission
        } else {
            alert("Failed to submit comment.");
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

                {userDetails && (
                    <div className={commentStyles.userDetails}>
                        <h3>User Details</h3>
                        <p><strong>Name:</strong> {userDetails.name}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                        <p><strong>Role:</strong> {userDetails.role}</p>
                        <p><strong>Comments:</strong></p>
                        <ul>
                            {userDetails.comments?.map((com, index) => (
                                <li key={index}>{com.comment}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Comment;

//
// import React, { useEffect, useState } from "react";
// import NavBar from "../navbar/NavBar.tsx";
// import commentStyles from "./comment.module.css";
// import { getUserById, updateUser } from "../apiCalls/user/userService.ts";
// import User from "../apiCalls/user/User.ts";
//
// const Comment: React.FC = () => {
//     const [comment, setComment] = useState("");
//     const [userDetails, setUserDetails] = useState<User | null>(null);
//
//     useEffect(() => {
//         const userId = localStorage.getItem("userId");
//         if (userId) {
//             const fetchUserDetails = async () => {
//                 const data = await getUserById(Number(userId));
//                 setUserDetails(data);
//             };
//
//             fetchUserDetails();
//         }
//     }, []);
//
//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//
//         if (!comment.trim()) {
//             alert("Comment cannot be empty!");
//             return;
//         }
//
//         if (!userDetails) {
//             alert("User details not found!");
//             return;
//         }
//
//         // Add new comment with a placeholder id
//         const updatedComments = [
//             ...userDetails.comments,
//             { comment: comment, approved: false, id: 0 } // Placeholder id added
//         ];
//
//         const updatedUser = {
//             ...userDetails,
//             comments: updatedComments,
//         };
//
//         const response = await updateUser(userDetails.id, updatedUser);
//
//         if (response) {
//             setUserDetails(updatedUser);
//             setComment(""); // Clear input field after successful submission
//         } else {
//             alert("Failed to submit comment.");
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
//                             {userDetails.comments?.map((com, index) => (
//                                 <li key={index}>{com.comment}</li>
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
