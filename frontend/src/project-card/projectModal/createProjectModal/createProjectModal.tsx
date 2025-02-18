import React, { useState } from "react";
import modalStyles from "./createProjectModal.module.css";
import { createProject } from "../../../apiCalls/project/projectService.ts";
import Project from "../../../apiCalls/project/Project.ts";
import CreateProject from "../../../apiCalls/project/CreateProject.ts";
import {useTranslation} from "react-i18next";

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

    const { t } = useTranslation();

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
                <p className={modalStyles.modalTitle}>{t("Create New Project")}</p>
                <form onSubmit={handleSubmit} className={modalStyles.modalForm}>
                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="name" className={modalStyles.modalLabel}>
                            {t("Project Name")}
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder={t("Project Name")}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="description" className={modalStyles.modalLabel}>
                            {t("Project Description")}
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder={t("Project Description")}
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="coverImage" className={modalStyles.modalLabel}>
                            {t("Cover Image URL")}
                        </label>
                        <input
                            id="coverImage"
                            type="text"
                            name="coverImage"
                            placeholder={t("Cover Image URL")}
                            value={formData.coverImage}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="reviews" className={modalStyles.modalLabel}>
                            {t("Reviews")}
                        </label>
                        <input
                            id="reviews"
                            type="number"
                            name="reviews"
                            placeholder={t("Reviews")}
                            value={formData.reviews}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="type" className={modalStyles.modalLabel}>
                            {t("Project Type")}
                        </label>
                        <input
                            id="type"
                            type="text"
                            name="type"
                            placeholder={t("Project Type")}
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="githubLink" className={modalStyles.modalLabel}>
                            {t("GitHub Link")}
                        </label>
                        <input
                            id="githubLink"
                            type="text"
                            name="githubLink"
                            placeholder={t("GitHub Link")}
                            value={formData.githubLink}
                            onChange={handleChange}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="startDate" className={modalStyles.modalLabel}>
                            {t("Start Date")}
                        </label>
                        <input
                            id="startDate"
                            type="date"
                            name="startDate"
                            placeholder={t("Start Date")}
                            value={formData.startDate}
                            onChange={handleChange}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="endDate" className={modalStyles.modalLabel}>
                            {t("End Date")}
                        </label>
                        <input
                            id="endDate"
                            type="date"
                            name="endDate"
                            placeholder={t("End Date")}
                            value={formData.endDate}
                            onChange={handleChange}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="images" className={modalStyles.modalLabel}>
                            {t("Add Image URL")}
                        </label>
                        <input
                            id="images"
                            type="text"
                            name="images"
                            placeholder={t("Add Image URL")}
                            onChange={(e) => handleArrayChange(e, "images")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="techStack" className={modalStyles.modalLabel}>
                            {t("Add Tech Stack")}
                        </label>
                        <input
                            id="techStack"
                            type="text"
                            name="techStack"
                            placeholder={t("Add Tech Stack")}
                            onChange={(e) => handleArrayChange(e, "techStack")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="features" className={modalStyles.modalLabel}>
                            {t("Add Features")}
                        </label>
                        <input
                            id="features"
                            type="text"
                            name="features"
                            placeholder={t("Add Features")}
                            onChange={(e) => handleArrayChange(e, "features")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="knowledge" className={modalStyles.modalLabel}>
                            {t("Add Knowledge")}
                        </label>
                        <input
                            id="knowledge"
                            type="text"
                            name="knowledge"
                            placeholder={t("Add Knowledge")}
                            onChange={(e) => handleArrayChange(e, "knowledge")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <div className={modalStyles.inputGroup}>
                        <label htmlFor="summary" className={modalStyles.modalLabel}>
                            {t("Add Summary")}
                        </label>
                        <input
                            id="summary"
                            type="text"
                            name="summary"
                            placeholder={t("Add Summary")}
                            onChange={(e) => handleArrayChange(e, "summary")}
                            className={modalStyles.modalInput}
                        />
                    </div>

                    <button type="submit" className={modalStyles.modalButton}>{t("Create Project")}</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;
