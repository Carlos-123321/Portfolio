import React from "react";
import modalStyles from "./projectModal.module.css";

interface ProjectModalProps {
    name: string;
    description: string;
    coverImage: string;
    reviews: number;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ name, description, coverImage, reviews, onClose }) => {
    return (
        <div className={modalStyles.modalOverlay} onClick={onClose}>
            <div className={modalStyles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={modalStyles.closeButton} onClick={onClose}>&times;</span>
                <h2>{name}</h2>
                <img src={`../../assets/${coverImage}`} alt={name} className={modalStyles.modalImage} />
                <p>{description}</p>
                <p>⭐ {reviews} Reviews</p>
            </div>
        </div>
    );
};

export default ProjectModal;
