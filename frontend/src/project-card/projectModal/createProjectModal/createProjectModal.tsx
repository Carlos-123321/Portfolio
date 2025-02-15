// import React, { useState } from "react";
// import modalStyles from "./createProjectModal.module.css";
// import { createProject } from "../../../apiCalls/project/projectService.ts";
//
// interface CreateProjectModalProps {
//     onClose: () => void;
// }
//
// const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         description: "",
//         image: "",
//         reviews: 0,
//         type: ""
//     });
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const createdProject = await createProject(formData);
//         if (createdProject) {
//             alert("Project created successfully!");
//             onClose(); // Close modal after successful creation
//         } else {
//             alert("Error creating project. Please try again.");
//         }
//     };
//
//     return (
//         <div className={modalStyles.modalOverlay} onClick={onClose}>
//             <div className={modalStyles.modalContent} onClick={(e) => e.stopPropagation()}>
//                 <span className={modalStyles.closeButton} onClick={onClose}>&times;</span>
//                 <h2>Create New Project</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Project Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                     <textarea
//                         name="description"
//                         placeholder="Project Description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="text"
//                         name="image"
//                         placeholder="Image URL"
//                         value={formData.image}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="number"
//                         name="reviews"
//                         placeholder="Reviews"
//                         value={formData.reviews}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="text"
//                         name="type"
//                         placeholder="Project Type"
//                         value={formData.type}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button type="submit">Create Project</button>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default CreateProjectModal;

import React, { useState } from "react";
import modalStyles from "./createProjectModal.module.css";
import { createProject } from "../../../apiCalls/project/projectService.ts";

interface CreateProjectModalProps {
    onClose: () => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        reviews: 0,
        type: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const createdProject = await createProject(formData);
        if (createdProject) {
            alert("Project created successfully!");
            onClose(); // Close modal after successful creation
        } else {
            alert("Error creating project. Please try again.");
        }
    };

    return (
        <div className={modalStyles.modalOverlay} onClick={onClose}>
            <div className={modalStyles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={modalStyles.closeButton} onClick={onClose}>&times;</span>
                <h2 className={modalStyles.modalTitle}>Create New Project</h2>
                <form onSubmit={handleSubmit} className={modalStyles.modalForm}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Project Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={modalStyles.modalInput}
                    />
                    <textarea
                        name="description"
                        placeholder="Project Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="number"
                        name="reviews"
                        placeholder="Reviews"
                        value={formData.reviews}
                        onChange={handleChange}
                        required
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="type"
                        placeholder="Project Type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className={modalStyles.modalInput}
                    />
                    <button type="submit" className={modalStyles.modalButton}>Create Project</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;
