import React, { useState } from "react";
import UpdateModalStyles from "./updateProjectModal.module.css";

interface UpdateProjectModalProps {
    onClose: () => void;
    projectName: string;
    projectDescription: string;
    projectImage: string;
    projectReviews: number;
    onSave: (name: string, description: string, image: string, reviews: number) => void;  // Save handler
}

const UpdateProjectModal: React.FC<UpdateProjectModalProps> = ({
                                                                   onClose,
                                                                   projectName,
                                                                   projectDescription,
                                                                   projectImage,
                                                                   projectReviews,
                                                                   onSave,
                                                               }) => {
    const [name, setName] = useState(projectName);
    const [description, setDescription] = useState(projectDescription);
    const [image, setImage] = useState(projectImage);
    const [reviews, setReviews] = useState(projectReviews);

    const handleSave = () => {
        // Trigger the save action with the updated values
        onSave(name, description, image, reviews);
        onClose();  // Close the modal after saving
    };

    return (
        <div className={UpdateModalStyles.modalOverlay}>
            <div className={UpdateModalStyles.modalContent}>
                <button className={UpdateModalStyles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Edit Project</h2>
                <div className={UpdateModalStyles.modalBody}>
                    <div>
                        <label>Project Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}  // Update state on change
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}  // Update state on change
                        />
                    </div>
                    <div>
                        <label>Reviews:</label>
                        <input
                            type="number"
                            value={reviews}
                            onChange={(e) => setReviews(Number(e.target.value))}  // Update state on change
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}  // Update state on change
                        />
                    </div>
                </div>

                <button onClick={handleSave} className={UpdateModalStyles.saveButton}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default UpdateProjectModal;
