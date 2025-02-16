import React, { useEffect, useState } from "react";
import portfolioBackground from "../../public/assets/portfoliobackground.png";
import portfolioStyles from "../portfolio/portfolio.module.css";
import NavBar from "../navbar/NavBar.tsx";
import ProjectCard from "../project-card/ProjectCard.tsx";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import { getProjects } from '../apiCalls/project/projectService.ts';
import "./testing.css";
import Project from "../apiCalls/project/Project.ts";
import CreateProjectModal from "../project-card/projectModal/createProjectModal/createProjectModal.tsx"; // Import the correct modal

const Portfolio: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    const { t } = useTranslation();

    const userRole = localStorage.getItem("userRole");

    return (
        <>
            <NavBar />
            <div className={portfolioStyles.heroSection}>
                <img
                    src={portfolioBackground}
                    alt="portfolio background"
                    className={portfolioStyles.heroImage}
                />

                <div className={portfolioStyles.whiteCover}>
                    <div className={portfolioStyles.portfolioFirstSection}>
                        <p className={portfolioStyles.myPortfolioText}>
                            {t("My Projects")}
                        </p>
                        {userRole === "Admin" && (
                            <button className={portfolioStyles.createProjectButton} onClick={() => setIsModalOpen(true)}>
                                {t("Create Project")}
                            </button>
                        )}
                        <p className={portfolioStyles.myPortfolioSubText}>
                            {t("portfolioText")}
                        </p>
                    </div>

                    <div className={portfolioStyles.temp}>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                description={project.description}
                                coverImage={project.coverImage}
                                reviews={project.reviews}
                                type={project.type}
                                githubLink={project.githubLink}
                                startDate={project.startDate}
                                endDate={project.endDate}
                                images={project.images}
                            />
                        ))}
                    </div>
                    <Footer/>
                </div>

                {isModalOpen && (
                    <CreateProjectModal onClose={() => setIsModalOpen(false)} />
                )}

            </div>

        </>
    );
};

export default Portfolio;
