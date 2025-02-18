import React, { useState } from "react";
import projectCardStyles from "./projectCard.module.css";
import navbarStyles from "../navbar/navbar.module.css";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./projectModal/ProjectModal.tsx";
import { deleteProject } from "../apiCalls/project/projectService.ts";
import UpdateProjectModal from "./UpdateProjectModal.tsx";

interface ProjectCardProps {
    id: number;
    name: string;
    description: string;
    coverImage: string;
    reviews: number;
    type: string;
    githubLink: string;
    startDate: string;
    endDate: string;
    images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, description, coverImage, reviews, githubLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/project/${id}`);
    };

    const handleDeleteClick = async () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete the project "${name}"?`);

        if (confirmDelete) {
            const result = await deleteProject(id);
            if (result) {
                console.log(`Project with ID: ${id} deleted`);
            }
        }
    };

    const handleSave = (updatedName: string, updatedDescription: string, updatedImage: string, updatedReviews: number) => {
        console.log("Updated Project:", { updatedName, updatedDescription, updatedImage, updatedReviews });
    };

    const userRole = localStorage.getItem("userRole");

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "../../assets/defaultImage.jpg";
    };

    return (
        <>
            <div className={projectCardStyles.projectCardContainer}>
                <div className={projectCardStyles.projectCardImageContainer}>
                    <div className={navbarStyles.cardImageLink}>
                        <img
                            src={`../../assets/${coverImage}`}
                            alt={name}
                            className={projectCardStyles.projectCardImageStyle}
                            onClick={handleNavigate}
                            onError={handleImageError}
                        />
                    </div>
                </div>

                <div className={projectCardStyles.projectCardContent}>
                    <div className={projectCardStyles.projectCardTitle}>
                        {name}
                    </div>

                    <p className={projectCardStyles.projectCardDescription}>
                        {description} ⭐{reviews} Reviews
                    </p>


                    <div className={projectCardStyles.cardIconsContainer} style={{marginTop: '3%'}}>

                        <svg onClick={() => setIsModalOpen(true)} xmlns="http://www.w3.org/2000/svg" width="16"
                             height="16" fill="currentColor"
                             className={projectCardStyles.cardIcons} viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                        </svg>


                        {userRole === "Admin" && (

                        <svg onClick={handleDeleteClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor"
                             className={projectCardStyles.cardIcons} viewBox="0 0 16 16">
                            <path
                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                        )}

                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer"
                               style={{all: 'unset', display: 'inline-block'}}>
                                <svg className={projectCardStyles.cardIcons} xmlns="http://www.w3.org/2000/svg"
                                     width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        )}

                        {userRole === "Admin" && (
                        <svg onClick={() => {
                            setIsUpdateModalOpen(true);
                        }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className={projectCardStyles.cardIcons} viewBox="0 0 16 16">
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <ProjectModal
                    name={name}
                    description={description}
                    coverImage={coverImage}
                    reviews={reviews}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {isUpdateModalOpen && (
                <UpdateProjectModal
                    onClose={() => setIsUpdateModalOpen(false)}
                    projectName={name}
                    projectDescription={description}
                    projectImage={coverImage}
                    projectReviews={reviews}
                    onSave={handleSave}
                />
            )}


        </>
    );
};

export default ProjectCard;