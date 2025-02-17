import React, { useState } from "react";
import modalStyles from "./createProjectModal.module.css";
import { createProject } from "../../../apiCalls/project/projectService.ts";
import Project from "../../../apiCalls/project/Project.ts";
import CreateProject from "../../../apiCalls/project/CreateProject.ts";

interface CreateProjectModalProps {
    onClose: () => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<CreateProject>({
        id: null,
        name: "",
        description: "",
        coverImage: "",
        reviews: 0,
        type: "",
        githubLink: "",
        startDate: "",
        endDate: "",
        images: [],
        techStack: [],
        features: [],
        knowledge: [],
        summary: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Project) => {
        if (Array.isArray(formData[field])) {
            const updatedArray = [...formData[field], e.target.value];
            setFormData({ ...formData, [field]: updatedArray });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submitting project with data:", formData);

        try {
            const createdProject = await createProject(formData);

            console.log("Created project response:", createdProject);

            if (createdProject) {
                alert("Project created successfully!");
                onClose();
            } else {
                alert("Error creating project. Please try again.");
            }
        } catch (error) {
            console.error("Error creating project:", error);
            alert("An error occurred while creating the project.");
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
                        name="coverImage"
                        placeholder="coverImage URL"
                        value={formData.coverImage}
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
                    <input
                        type="text"
                        name="githubLink"
                        placeholder="GitHub Link"
                        value={formData.githubLink}
                        onChange={handleChange}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="date"
                        name="startDate"
                        placeholder="Start Date"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="date"
                        name="endDate"
                        placeholder="End Date"
                        value={formData.endDate}
                        onChange={handleChange}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="images"
                        placeholder="Add Image URL"
                        onChange={(e) => handleArrayChange(e, "images")}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="techStack"
                        placeholder="Add Tech Stack"
                        onChange={(e) => handleArrayChange(e, "techStack")}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="features"
                        placeholder="Add Features"
                        onChange={(e) => handleArrayChange(e, "features")}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="knowledge"
                        placeholder="Add Knowledge"
                        onChange={(e) => handleArrayChange(e, "knowledge")}
                        className={modalStyles.modalInput}
                    />
                    <input
                        type="text"
                        name="summary"
                        placeholder="Add Summary"
                        onChange={(e) => handleArrayChange(e, "summary")}
                        className={modalStyles.modalInput}
                    />
                    <button type="submit" className={modalStyles.modalButton}>Create Project</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;
