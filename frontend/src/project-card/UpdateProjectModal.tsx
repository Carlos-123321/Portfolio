// import React, { useState } from "react";
// import UpdateModalStyles from "./updateProjectModal.module.css";
//
// interface UpdateProjectModalProps {
//     onClose: () => void;
//     projectName: string;
//     projectDescription: string;
//     projectImage: string;
//     projectReviews: number;
//     onSave: (name: string, description: string, image: string, reviews: number) => void;
// }
//
// const UpdateProjectModal: React.FC<UpdateProjectModalProps> = ({
//                                                                    onClose,
//                                                                    projectName,
//                                                                    projectDescription,
//                                                                    projectImage,
//                                                                    projectReviews,
//                                                                    onSave,
//                                                                }) => {
//     const [name, setName] = useState(projectName);
//     const [description, setDescription] = useState(projectDescription);
//     const [image, setImage] = useState(projectImage);
//     const [reviews, setReviews] = useState(projectReviews);
//
//     const handleSave = () => {
//         onSave(name, description, image, reviews);
//         onClose(); // Close the modal after saving
//     };
//
//     return (
//         <div className={UpdateModalStyles.modalOverlay}>
//             <div className={UpdateModalStyles.modalContent}>
//                 <button className={UpdateModalStyles.closeButton} onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>Edit Project</h2>
//                 <div className={UpdateModalStyles.modalBody}>
//                     <div>
//                         <label>Project Name:</label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)} // Update state on change
//                         />
//                     </div>
//                     <div>
//                         <label>Description:</label>
//                         <textarea
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)} // Update state on change
//                         />
//                     </div>
//                     <div>
//                         <label>Reviews:</label>
//                         <input
//                             type="number"
//                             value={reviews}
//                             onChange={(e) => setReviews(Number(e.target.value))} // Update state on change
//                         />
//                     </div>
//                     <div>
//                         <label>Image:</label>
//                         <input
//                             type="text"
//                             value={image}
//                             onChange={(e) => setImage(e.target.value)} // Update state on change
//                         />
//                     </div>
//                 </div>
//
//                 <button onClick={handleSave} className={UpdateModalStyles.saveButton}>
//                     Save
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default UpdateProjectModal;


import React, { useState } from "react";
import UpdateModalStyles from "./updateProjectModal.module.css";

interface UpdateProjectModalProps {
    onClose: () => void;
    projectName: string;
    projectDescription: string;
    projectImage: string;
    projectReviews: number;
    projectTechStack: string[] | null;
    projectFeatures: string[] | null;
    projectKnowledge: string[] | null;
    projectSummary: string[] | null;
    projectGithubLink: string;
    projectStartDate: string;
    projectEndDate: string;
    onSave: (updatedProject: {
        name: string;
        description: string;
        image: string;
        reviews: number;
        techStack: string[] | null;
        features: string[] | null;
        knowledge: string[] | null;
        summary: string[] | null;
        githubLink: string;
        startDate: string;
        endDate: string;
    }) => void;
}

const UpdateProjectModal: React.FC<UpdateProjectModalProps> = ({
                                                                   onClose,
                                                                   projectName,
                                                                   projectDescription,
                                                                   projectImage,
                                                                   projectReviews,
                                                                   projectTechStack,
                                                                   projectFeatures,
                                                                   projectKnowledge,
                                                                   projectSummary,
                                                                   projectGithubLink,
                                                                   projectStartDate,
                                                                   projectEndDate,
                                                                   onSave,
                                                               }) => {
    const [name, setName] = useState(projectName);
    const [description, setDescription] = useState(projectDescription);
    const [image, setImage] = useState(projectImage);
    const [reviews, setReviews] = useState(projectReviews);
    const [techStack, setTechStack] = useState<string[] | null>(projectTechStack);
    const [features, setFeatures] = useState<string[] | null>(projectFeatures);
    const [knowledge, setKnowledge] = useState<string[] | null>(projectKnowledge);
    const [summary, setSummary] = useState<string[] | null>(projectSummary);
    const [githubLink, setGithubLink] = useState(projectGithubLink);
    const [startDate, setStartDate] = useState(projectStartDate);
    const [endDate, setEndDate] = useState(projectEndDate);

    const handleSave = () => {
        onSave({
            name,
            description,
            image,
            reviews,
            techStack,
            features,
            knowledge,
            summary,
            githubLink,
            startDate,
            endDate,
        });
        onClose(); // Close the modal after saving
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
                            onChange={(e) => setName(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label>Reviews:</label>
                        <input
                            type="number"
                            value={reviews}
                            onChange={(e) => setReviews(Number(e.target.value))} // Update state on change
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label>Tech Stack:</label>
                        <input
                            type="text"
                            value={techStack ? techStack.join(", ") : ""}
                            onChange={(e) =>
                                setTechStack(e.target.value ? e.target.value.split(", ") : null)
                            }
                        />
                    </div>
                    <div>
                        <label>Features:</label>
                        <input
                            type="text"
                            value={features ? features.join(", ") : ""}
                            onChange={(e) =>
                                setFeatures(e.target.value ? e.target.value.split(", ") : null)
                            }
                        />
                    </div>
                    <div>
                        <label>Knowledge:</label>
                        <input
                            type="text"
                            value={knowledge ? knowledge.join(", ") : ""}
                            onChange={(e) =>
                                setKnowledge(e.target.value ? e.target.value.split(", ") : null)
                            }
                        />
                    </div>
                    <div>
                        <label>Summary:</label>
                        <input
                            type="text"
                            value={summary ? summary.join(", ") : ""}
                            onChange={(e) =>
                                setSummary(e.target.value ? e.target.value.split(", ") : null)
                            }
                        />
                    </div>
                    <div>
                        <label>GitHub Link:</label>
                        <input
                            type="text"
                            value={githubLink}
                            onChange={(e) => setGithubLink(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label>Start Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label>End Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} // Update state on change
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
