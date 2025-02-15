import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectPageStyles from "./projectPage.module.css";
import NavBar from "../../navbar/NavBar.tsx";
import { getProjectById } from "../../apiCalls/project/projectService.ts";
import Project from "../../apiCalls/project/Project.ts";

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProject = async () => {
            if (id) {
                const data = await getProjectById(Number(id));
                setProject(data);
            }
        };
        fetchProject();
    }, [id]);

    useEffect(() => {
        if (!project || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [project]);

    if (!project) return <div>Loading...</div>;

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <NavBar />
            <div className={projectPageStyles.projectPageFirstSection}>
                <div className={projectPageStyles.projectPageFirstSectionLeft}>
                    <p className={projectPageStyles.projectPageFirstSectionLeftTitle}>
                        {project.name}
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftSubTitle}>
                        Project Type
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftText}>
                        {project.type}
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftSubTitle}>
                        Date
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftText}>
                        Started: {project.startDate}<br/> Ended: {project.endDate}
                    </p>
                </div>

                <div className={projectPageStyles.projectPageFirstSectionRight}>
                    <p className={projectPageStyles.projectPageFirstSectionRightText}>
                        {project.description}
                    </p>
                </div>
            </div>

            <div className={projectPageStyles.projectPageSecondSection}>
                <div className={projectPageStyles.projectPageSecondSectionLeftSide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className={projectPageStyles.Arrow} viewBox="0 0 16 16"
                         onClick={handlePrevious}
                    >
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                    </svg>
                </div>

                <div className={projectPageStyles.projectPageSecondSectionMiddleSection}>
                    <div
                        className={projectPageStyles.projectPageSecondSectionMiddleSectionInner}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {project.images.map((img, index) => (
                            <img
                                key={index}
                                src={`../../assets/${img}`}
                                alt="portfolio background"
                                className={projectPageStyles.carousselImage}
                            />
                        ))}
                    </div>
                </div>

                <div className={projectPageStyles.projectPageSecondSectionRightSide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className={projectPageStyles.Arrow} viewBox="0 0 16 16"
                         onClick={handleNext}
                    >
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                    </svg>
                </div>
            </div>

            <div className={projectPageStyles.projectPageThirdSection}>
                <div className={projectPageStyles.projectPageThirdSectionTechnologySection}>
                    <p className={projectPageStyles.projectPageThirdSectionTitle}>Technology Stack</p>

                    <div className={projectPageStyles.projectPageThirdSectionIcons}>
                        {project.techStack.map((tech, index) => {
                            console.log(`Rendering icon ${index}: ${tech}`);
                            return (
                                <img
                                    key={index}
                                    src={tech}
                                    alt={`tech-icon-${index}`}
                                    width="40"
                                    height="40"
                                    style={{ marginRight: "10px", marginLeft: "10px" }}
                                />
                            );
                        })}
                    </div>

                </div>

                <div className={projectPageStyles.projectPageThirdSectionFeatureKnowledgeSection}>
                    <div className={projectPageStyles.projectPageThirdSectionFKleft}>
                        <div className={projectPageStyles.projectPageThirdSectionTitleContainer}>
                        <p className={projectPageStyles.projectPageThirdSectionTitle}>Features</p>
                        </div>

                        {project.features && project.features.length > 0 ? (
                            project.features.map((feature, index) => (
                                <p key={index} className={projectPageStyles.projectPageFeatureText}>
                                    • {feature}
                                </p>
                            ))
                        ) : (
                            <p className={projectPageStyles.projectPageFeatureText}>No features available.</p>
                        )}
                    </div>


                    <div className={projectPageStyles.projectPageThirdSectionFKright}>
                        <div className={projectPageStyles.projectPageThirdSectionTitleContainer}>
                            <p className={projectPageStyles.projectPageThirdSectionTitle}>Knowledge Applied</p>
                        </div>
                        {project.knowledge && project.features.length > 0 ? (
                            project.knowledge.map((knowledge, index) => (
                                <p key={index} className={projectPageStyles.projectPageFeatureText}>
                                    • {knowledge}
                                </p>
                            ))
                        ) : (
                            <p className={projectPageStyles.projectPageFeatureText}>No features available.</p>
                        )}
                    </div>
                </div>


                <div className={projectPageStyles.projectPageThirdSectionInDepthSummary}>
                    <div className={projectPageStyles.projectPageThirdSectionTitleContainer}>
                        <p className={projectPageStyles.projectPageThirdSectionTitle}>In Depth Summary</p>
                    </div>
                        <p className={projectPageStyles.projectPageFeatureText}>{project.summary}</p>
                </div>
            </div>

        </>
    );
};

export default ProjectPage;
