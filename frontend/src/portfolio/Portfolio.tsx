import React from "react";
// import { Link } from "react-router-dom";
import portfolioBackground from "../assets/portfoliobackground.png";
import portfolioStyles from "../portfolio/portfolio.module.css";
import NavBar from "../navbar/NavBar.tsx";
import ProjectCard from "../project-card/ProjectCard.tsx";
import Footer from "../footer/Footer.tsx";

const Portfolio: React.FC = () => {

    return (
        <>
            <NavBar/>
            <div className={portfolioStyles.heroSection}>
                <img
                    src={portfolioBackground}
                    alt="portfolio background"
                    className={portfolioStyles.heroImage}
                />

                <div className={portfolioStyles.whiteCover}>
                    <div className={portfolioStyles.portfolioFirstSection}>
                            <p className={portfolioStyles.myPortfolioText}>
                                My Portfolio
                            </p>
                            <p className={portfolioStyles.myPortfolioSubText}>
                                Welcome to my portfolio. Here you’ll find a selection of my work.
                                Explore my <br/>projects to learn more about what I do.
                            </p>
                    </div>
                        <div className={portfolioStyles.temp}>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                        </div>
                </div>
            </div>
            <Footer/>
            </>
            );
            };

            export default Portfolio;
