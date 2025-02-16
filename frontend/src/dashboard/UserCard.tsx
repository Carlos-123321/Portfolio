// import React from "react";
// import DashboardStyles from "./Dashboard.module.css";
//
// interface UserCardProps {
//     id: number;
//     name: string;
//     email: string;
//     comment: string[];
//     deleteComment: (userId: number, commentIndex: number) => void;
// }
//
// const UserCard: React.FC<UserCardProps> = ({ id, name, email, comment, deleteComment }) => {
//     return (
//         <div className={DashboardStyles.userCard}>
//             <h4>{name}</h4>
//             <p>Email: {email}</p>
//             <p>Comment: {comment.join(", ")}</p>
//             <button>Approve Comment</button>
//             {comment.map((_, index) => (
//                 <button key={index} onClick={() => deleteComment(id, index)}>
//                     Delete Comment
//                 </button>
//             ))}
//         </div>
//     );
// };
//
// export default UserCard;

import React from "react";
import DashboardStyles from "./dashboard.module.css";

interface UserCardProps {
    id: number;
    name: string;
    email: string;
    comment: string;
    commentIndex: number; // Pass the index of the comment to delete it
    deleteComment: (userId: number, commentIndex: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, email, comment, commentIndex, deleteComment }) => {
    return (
        <>
            <h4>{name}</h4>
            <p>Email: {email}</p>
            <p>{comment}</p>
            <button onClick={() => deleteComment(id, commentIndex)}>Delete Comment</button>
        </>
    );
};

interface UserProps {
    id: number;
    name: string;
    email: string;
    comment: string[];
    deleteComment: (userId: number, commentIndex: number) => void;
}

const UserComments: React.FC<UserProps> = ({ id, name, email, comment, deleteComment }) => {
    return (
        <div className={DashboardStyles.userCard}>
            {comment.map((com, index) => (
                <UserCard
                    key={index}
                    id={id}
                    name={name}
                    email={email}
                    comment={com}
                    commentIndex={index}
                    deleteComment={deleteComment}
                />
            ))}
        </div>
    );
};

export default UserComments;
