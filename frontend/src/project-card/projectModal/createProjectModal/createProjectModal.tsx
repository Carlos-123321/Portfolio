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
                <p className={modalStyles.modalTitle}>Create New Project</p>
                <form onSubmit={handleSubmit} className={modalStyles.modalForm}>
                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="name" className={modalStyles.modalLabel}>
                            Project Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Project Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="description" className={modalStyles.modalLabel}>
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Project Description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="coverImage" className={modalStyles.modalLabel}>
                            Cover Image URL
                        </label>
                        <input
                            id="coverImage"
                            type="text"
                            name="coverImage"
                            placeholder="Cover Image URL"
                            value={formData.coverImage}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="reviews" className={modalStyles.modalLabel}>
                            Reviews
                        </label>
                        <input
                            id="reviews"
                            type="number"
                            name="reviews"
                            placeholder="Reviews"
                            value={formData.reviews}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="type" className={modalStyles.modalLabel}>
                            Project Type
                        </label>
                        <input
                            id="type"
                            type="text"
                            name="type"
                            placeholder="Project Type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="githubLink" className={modalStyles.modalLabel}>
                            GitHub Link
                        </label>
                        <input
                            id="githubLink"
                            type="text"
                            name="githubLink"
                            placeholder="GitHub Link"
                            value={formData.githubLink}
                            onChange={handleChange}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="startDate" className={modalStyles.modalLabel}>
                            Start Date
                        </label>
                        <input
                            id="startDate"
                            type="date"
                            name="startDate"
                            placeholder="Start Date"
                            value={formData.startDate}
                            onChange={handleChange}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="endDate" className={modalStyles.modalLabel}>
                            End Date
                        </label>
                        <input
                            id="endDate"
                            type="date"
                            name="endDate"
                            placeholder="End Date"
                            value={formData.endDate}
                            onChange={handleChange}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="images" className={modalStyles.modalLabel}>
                            Add Image URL
                        </label>
                        <input
                            id="images"
                            type="text"
                            name="images"
                            placeholder="Add Image URL"
                            onChange={(e) => handleArrayChange(e, "images")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="techStack" className={modalStyles.modalLabel}>
                            Add Tech Stack
                        </label>
                        <input
                            id="techStack"
                            type="text"
                            name="techStack"
                            placeholder="Add Tech Stack"
                            onChange={(e) => handleArrayChange(e, "techStack")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="features" className={modalStyles.modalLabel}>
                            Add Features
                        </label>
                        <input
                            id="features"
                            type="text"
                            name="features"
                            placeholder="Add Features"
                            onChange={(e) => handleArrayChange(e, "features")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="knowledge" className={modalStyles.modalLabel}>
                            Add Knowledge
                        </label>
                        <input
                            id="knowledge"
                            type="text"
                            name="knowledge"
                            placeholder="Add Knowledge"
                            onChange={(e) => handleArrayChange(e, "knowledge")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="summary" className={modalStyles.modalLabel}>
                            Add Summary
                        </label>
                        <input
                            id="summary"
                            type="text"
                            name="summary"
                            placeholder="Add Summary"
                            onChange={(e) => handleArrayChange(e, "summary")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <button type="submit" className={modalStyles.modalButton}>Create Project</button>
                </form>


            </div>
        </div>
    );
};

export default CreateProjectModal;
