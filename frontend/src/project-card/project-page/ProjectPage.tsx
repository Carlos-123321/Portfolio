import React from "react";
// import { Link } from "react-router-dom";
import projectPageStyles from "./projectPage.module.css";
import NavBar from "../../navbar/NavBar.tsx";
import portfolio1 from "../../assets/portcasa3.jpeg";
import portfolio2 from "../../assets/portcasa4.jpeg";
import portfolio3 from "../../assets/portcasa5.jpeg";
import homepageStyles from "../../homepage/homepage.module.css";

const ProjectPage: React.FC = () => {

    return (
        <>
            <NavBar/>
            <div className={projectPageStyles.projectPageFirstSection}>
                <div className={projectPageStyles.projectPageFirstSectionLeft}>
                    <p className={projectPageStyles.projectPageFirstSectionLeftTitle}>
                        Casa Control
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftSubTitle}>
                        Project Type
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftText}>
                        Internet Of Things
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftSubTitle}>
                        Date
                    </p>
                    <p className={projectPageStyles.projectPageFirstSectionLeftText}>
                        Sometime around last year
                    </p>
                </div>

                <div className={projectPageStyles.projectPageFirstSectionRight}>
                    <p className={projectPageStyles.projectPageFirstSectionRightText}>This is where the project
                        description goes.
                        Give an overview or go in depth - what it's all about,
                        what inspired you, how you created it, or anything else you'd like visitors to know.
                        To add Project descriptions, go to Manage Projects.</p>
                </div>
            </div>

            <img
                src={portfolio1}
                alt="portfolio background"
                className={homepageStyles.heroImage}
            />

            <img
                src={portfolio2}
                alt="portfolio background"
                className={homepageStyles.heroImage}
            />

            <img
                src={portfolio3}
                alt="portfolio background"
                className={homepageStyles.heroImage}
            />
        </>
    );
};

export default ProjectPage;
