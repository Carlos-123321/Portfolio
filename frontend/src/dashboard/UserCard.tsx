import React from "react";
import DashboardStyles from "./dashboard.module.css";

interface UserCardProps {
    id: number;
    name: string;
    email: string;
    comments: {
        id: number;
        comment: string;
        approved: boolean;
    }[];
    deleteComment: (userId: number, commentIndex: number) => void;
    approveComment: (userId: number, commentIndex: number) => void;
    disapproveComment: (userId: number, commentIndex: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, comments, deleteComment, approveComment, disapproveComment }) => {
    const handleDeleteClick = (userId: number, commentIndex: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
        if (confirmDelete) {
            deleteComment(userId, commentIndex);
        }
    };

    const handleApproveClick = (userId: number, commentIndex: number) => {
        const confirmApprove = window.confirm("Do you want to approve this comment?");
        if (confirmApprove) {
            approveComment(userId, commentIndex);
        }
    };

    const handleDisapproveClick = (userId: number, commentIndex: number) => {
        const confirmDisapprove = window.confirm("Do you want to disapprove this comment?");
        if (confirmDisapprove) {
            disapproveComment(userId, commentIndex);
        }
    };

    return (
        <>
            {comments.map((com, index) => (
                <div key={com.id} className={DashboardStyles.userCard}>
                    <p className={DashboardStyles.userCardName}>{name}</p>
                    <p>{com.comment}</p>
                    <div className={com.approved ? DashboardStyles.approvedYes : DashboardStyles.approvedNo}>
                        <div className={DashboardStyles.approvedContainer}>
                            {com.approved ? "Yes" : "No"}
                        </div>
                    </div>


                    <div className={DashboardStyles.bottomCardRowContainer}>
                        <svg
                            className={DashboardStyles.editCardIcon}
                            onClick={() => handleApproveClick(id, index)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >

                            <path
                                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                        </svg>
                        <svg
                            className={DashboardStyles.editCardIcon}
                            onClick={() => handleDisapproveClick(id, index)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >

                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                        <svg
                            className={DashboardStyles.deleteCardIcon}
                            onClick={() => handleDeleteClick(id, index)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115
                            16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5
                            0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0
                             0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53
                             -.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.
                             5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserCard;
