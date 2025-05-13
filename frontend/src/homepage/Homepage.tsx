import React, {useEffect, useState} from "react";
import NavBar from "../navbar/NavBar.tsx";
import portfolioBackground from "../../public/assets/portfoliobackground.png";
import college from "../../public/assets/College.jpg";
import homepageStyles from "./homepage.module.css";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import { getUsers } from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";
import { motion } from "framer-motion";
import me from "../../public/assets/PhotoOfMe.jpg";
import {getAboutMeById, updateAboutMe} from "../apiCalls/aboutMe/aboutMeService.ts";
import AboutMe from "../apiCalls/aboutMe/AboutMe.ts";
import Skills from "../apiCalls/skills/Skills.ts";
import Hobby from "../apiCalls/hobby/Hobby.ts";
import {getSkillsById, updateSkills} from "../apiCalls/skills/SkillsService.ts";
import {FrontendTechnology} from "../apiCalls/skills/FrontendTechnology.ts";
import {BackendTechnology} from "../apiCalls/skills/BackendTechnology.ts";
import {getReviewsById, updateReviews} from "../apiCalls/reviews/reviewsService.ts";
import Reviews from "../apiCalls/reviews/Reviews.ts";
import {getHobbyById, updateHobby} from "../apiCalls/hobby/HobbyService.ts";
import {Hobbies} from "../apiCalls/hobby/Hobbies.ts";

const Homepage: React.FC = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);
    const [skills, setSkills] = useState<Skills | null>(null);
    const [reviewsPage, setReviewsPage] = useState<Reviews | null>(null);
    const [hobbyPage, setHobbyPage] = useState<Hobby | null>(null);
    const [reviews, setReviews] = useState<{ title: string; content: string }[]>([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSkillsOverlay, setShowSkillsOverlay] = useState(false);
    const [showReviewsOverlay, setShowReviewsOverlay] = useState(false);
    const [showHobbyOverlay, setShowHobbyOverlay] = useState(false);
    const [aboutMeTitle, setAboutMeTitle] = useState("");
    const [skillsTitle, setSkillsTitle] = useState("");
    const [softSkillsInput, setSoftSkillsInput] = useState("");
    const [aboutMeText, setAboutMeText] = useState("");
    const [frontendTechnologies, setFrontendTechnologies] = useState<FrontendTechnology[]>([]);
    const [hobbies, setHobbies] = useState<Hobbies[]>([]);
    const [editedHobbies, setEditedHobbies] = useState(hobbies);
    const [backendTechnologies, setBackendTechnologies] = useState<BackendTechnology[]>([]);
    const [editedTechnologies, setEditedTechnologies] = useState(frontendTechnologies);
    const [backendEditedTechnologies, setBackendEditedTechnologies] = useState(backendTechnologies);
    const [reviewsTitle, setReviewsTitle] = useState("");
    const [hobbyTitle, setHobbyTitle] = useState("");
    const [belowHobbyTitle, setBelowHobbyTitle] = useState("");


    useEffect(() => {
        const fetchAboutMe = async () => {
            console.log("id:");
            const data = await getAboutMeById();
            console.log("Fetched data:", data);

            const translatedTitle = t(data?.title || "");
            const translatedText = t(data?.aboutMeText || "");

            setAboutMe(data);
            setAboutMeTitle(translatedTitle);
            setAboutMeText(translatedText);
        };

        fetchAboutMe();
    }, [t]);

    useEffect(() => {
        const fetchReviewsPage = async () => {
            console.log("id:");
            const data = await getReviewsById();
            console.log("Fetched data:", data);

            const translatedTitle = t(data?.title || "");

            setReviewsPage(data);
            setReviewsTitle(translatedTitle);
        };

        fetchReviewsPage();
    }, [t]);

    useEffect(() => {
        const fetchHobbyPage = async () => {
            console.log("id:");
            const data = await getHobbyById();
            console.log("Fetched data:", data);

            const translatedTitle = t(data?.title || "");
            const translatedBelowTitle = t(data?.title || "");
            const fetchedHobbies = await getHobbyById();
            const hobbies = Array.isArray(data?.hobbies)
                ? data.hobbies
                : [];

            setHobbyPage(data);
            setHobbyTitle(translatedTitle);
            setBelowHobbyTitle(translatedBelowTitle);
            setHobbies(hobbies);
            setEditedHobbies(fetchedHobbies.hobbies);

        };

        fetchHobbyPage();
    }, [t]);

    useEffect(() => {
        const fetchSkills = async () => {
            const data = await getSkillsById();
            const translatedTitle = t(data?.title || "");
            const fetchedSkills = await getSkillsById();

            const translatedSoftSkills = Array.isArray(data?.softSkills)
                ? data.softSkills.map((s: string) => t(s)).join(", ")
                : "";

            const frontendTechs = Array.isArray(data?.frontendTechnologies)
                ? data.frontendTechnologies
                : [];

            const backendTechs = Array.isArray(data?.backendTechnologies)
                ? data.backendTechnologies
                : [];

            setSkills(data);
            setSkillsTitle(translatedTitle);
            setSoftSkillsInput(translatedSoftSkills);
            setEditedTechnologies(fetchedSkills.frontendTechnologies);
            setFrontendTechnologies(frontendTechs);
            setBackendEditedTechnologies(fetchedSkills.backendTechnologies);
            setBackendTechnologies(backendTechs);
        };

        fetchSkills();
    }, [t]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const users: User[] = await getUsers();
                const comments = users.flatMap((user) =>
                    user.comments
                        .filter((comment) => comment.approved)
                        .map((comment) => ({
                            title: user.name,
                            content: comment.comment,
                        })) || []
                );
                setReviews(comments);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [reviews]);

    const getRandomSize = () => {
        const sizes = ["small", "medium", "large"];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    const handleSave = async () => {
        try {
            if (aboutMe) {
                const updatedData = {
                    aboutMeText: aboutMeText,
                    title: aboutMeTitle,
                };

                await updateAboutMe(aboutMe.id, updatedData);
                setAboutMe({ ...aboutMe, ...updatedData });
                setShowOverlay(false);
            }
        } catch (error) {
            console.error("Failed to update About Me:", error);
        }
    };

    const handleSkillsSave = async () => {
        console.log("skills:", skills);
        try {
            if (skills) {
                const updatedData = {
                    title: skillsTitle,
                    softSkills: softSkillsInput.split(",").map(s => s.trim()).filter(s => s !== ""),
                    frontendTechnologies: editedTechnologies,
                    backendTechnologies: backendEditedTechnologies
                };

                await updateSkills(skills.id, updatedData);
                setSkills({ ...skills, ...updatedData });
                setShowSkillsOverlay(false);
            }
        } catch (error) {
            console.error("Failed to update About Me:", error);
        }
    };

    const handleSaveReviews = async () => {
        console.log("Save clicked");
        console.log("reviewsPage:", reviewsPage);// Add this to check if the button is triggered
        try {

            if (reviewsPage) {
                console.log("next step");
                const updatedData = {
                    title: reviewsTitle,
                };

                const updatedReview = await updateReviews(reviewsPage.id, updatedData);
                console.log("Updated review:", updatedReview);  // Debugging the updated review
                setReviewsPage({ ...reviewsPage, ...updatedData });
                setShowReviewsOverlay(false);
            }
        } catch (error) {
            console.error("Failed to update Reviews:", error);
        }
    };

    const handleSaveHobby = async () => {
        console.log("Save clicked");
        console.log("hobbyPage:", hobbyPage);// Add this to check if the button is triggered
        try {

            if (hobbyPage) {
                console.log("next step");
                const updatedData = {
                    title: hobbyTitle,
                    below: belowHobbyTitle,
                    hobbies: editedHobbies,
                };

                const updatedHobby = await updateHobby(hobbyPage.id, updatedData);
                console.log("Updated hobby:", updatedHobby);  // Debugging the updated review
                setHobbyPage({ ...hobbyPage, ...updatedData });
                setShowHobbyOverlay(false);
            }
        } catch (error) {
            console.error("Failed to update Hobby:", error);
        }
    };



    return (
        <>
            <NavBar/>

            <div className={homepageStyles.heroContainer}>
                <img
                    src={portfolioBackground}
                    alt="portfolio background"
                    className={homepageStyles.heroImage}
                />

                <motion.div
                    className={homepageStyles.textContainer}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >
                    <div className={homepageStyles.profileSectionContainer}>
                        <div className={homepageStyles.profile}>
                            <img
                                src={me}
                                alt="portfolio background"
                                className={homepageStyles.heroImage}
                            />
                        </div>
                    </div>
                    <p className={homepageStyles.temp1title}>{t("introLine")}</p>
                    <p className={homepageStyles.temp2title}>{t("introSecondLine")}</p>
                    <p className={homepageStyles.temp3title}>{t("introThirdLine")}</p>
                </motion.div>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className={homepageStyles.aboutMeSectionPencil} viewBox="0 0 16 16"
                     onClick={() => setShowSkillsOverlay(true)}>
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
            </div>

            <div className={homepageStyles.aboutMeSection}>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className={homepageStyles.aboutMeSectionPencil} viewBox="0 0 16 16"
                     onClick={() => setShowOverlay(true)}
                >
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>

                    <p className={homepageStyles.reviewsTitle}>{aboutMe ? t(aboutMe.title) : t("Loading...")}</p>

                    <div className={homepageStyles.innerAboutSection}>

                        <div className={homepageStyles.aboutMeSectionImageContainer}>
                            <img
                                src={college}
                                alt="college"
                                className={homepageStyles.heroImage}
                            />
                        </div>
                        <div className={homepageStyles.rightSideAbout}>
                            <p>{aboutMe ? t(aboutMe.aboutMeText) : t("Loading...")}</p>
                        </div>
                    </div>
                    {showOverlay && (
                        <div className={homepageStyles.overlay} onClick={() => setShowOverlay(false)}>
                            <div className={homepageStyles.overlayContent} onClick={(e) => e.stopPropagation()}>
                                <h2>Edit About Me</h2>

                                <label htmlFor="aboutMeTitle">Title:</label>
                                <input
                                    id="aboutMeTitle"
                                    type="text"
                                    value={aboutMeTitle}
                                    onChange={(e) => {
                                        const newTitle = e.target.value;
                                        console.log("Input Title:", newTitle);  // Log the input value
                                        setAboutMeTitle(newTitle);  // Update the state with the new value
                                    }}
                                    className={homepageStyles.input}
                                />

                                <label htmlFor="aboutMeTitle">Paragraph:</label>
                                <textarea
                                    value={aboutMeText}
                                    onChange={(e) => {
                                        const newText = e.target.value;
                                        console.log("Input Paragraph:", newText);  // Log the input value
                                        setAboutMeText(newText);  // Update the state with the new value
                                    }}
                                    className={homepageStyles.textarea}
                                />

                                <div className={homepageStyles.overlayContentButtonsRow}>
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={() => setShowOverlay(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            <div className={homepageStyles.skillSection}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className={homepageStyles.aboutMeSectionPencil} viewBox="0 0 16 16" onClick={() => setShowSkillsOverlay(true)}>
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                <p className={homepageStyles.reviewsTitle}>{skills ? t(skills.title) : t("Loading...")}</p>

                <div className={homepageStyles.legendSection}>
                    <div className={homepageStyles.legendContainer}>
                        <p className={homepageStyles.legendTitle}>{t("Expertise Legend")}</p>
                        <div className={homepageStyles.legendTitleFirstRow}>
                            <div className={homepageStyles.legendTitleBeginnerRow}>
                                1 = {t("Beginner")} 🤓
                            </div>
                            <div className={homepageStyles.legendTitleIntermediateRow}>
                                5 = {t("Intermediate")} 📈
                            </div>
                        </div>
                        <div className={homepageStyles.legendTitleExpertRow}>
                            10 = {t("Expert")} 🚀
                        </div>
                    </div>
                </div>

                <div className={homepageStyles.skillsFirstRow}>


                    <div className={homepageStyles.skillsFirstRowLeft}>
                        <div className={homepageStyles.skillsTitleContainer}>
                            <p className={homepageStyles.skillsTitle}>{t("Frontend Technologies")}</p>
                        </div>

                        <div className={homepageStyles.skillsLeftIcons}>
                                {frontendTechnologies.map((tech) => (
                                    <div key={tech.id} className={homepageStyles.skillsLeftIconsContainer}>
                                        <img
                                            src={tech.imageUrl}
                                            width="40"
                                            height="40"
                                        />
                                        <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                            {tech.proficiency}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className={homepageStyles.skillsFirstRowRight}>
                        <div className={homepageStyles.skillsTitleContainer}>
                            <p className={homepageStyles.skillsTitle}>{t("Backend Technologies")}</p>
                        </div>

                        <div className={homepageStyles.skillsLeftIcons}>
                            {backendTechnologies.map((tech) => (
                                <div key={tech.id} className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src={tech.imageUrl}
                                        width="40"
                                        height="40"
                                    />
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        {tech.proficiency}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showSkillsOverlay && (
                        <div className={homepageStyles.overlay} onClick={() => setShowSkillsOverlay(false)}>
                            <div className={homepageStyles.overlayContent} onClick={(e) => e.stopPropagation()}>
                                <h2>Edit or Add Skills</h2>

                                <label htmlFor="skillsTitle">Title:</label>
                                <input
                                    id="skillsTitle"
                                    type="text"
                                    value={skillsTitle}
                                    onChange={(e) => setSkillsTitle(e.target.value)}
                                    className={homepageStyles.input}
                                />

                                <label htmlFor="softSkills">Soft Skills (comma-separated):</label>
                                <input
                                    id="softSkills"
                                    type="text"
                                    value={softSkillsInput}
                                    onChange={(e) => setSoftSkillsInput(e.target.value)}
                                    className={homepageStyles.input}
                                />

                                <h3>Edit Frontend Skills</h3>
                                {editedTechnologies.map((tech, index) => (
                                    <div key={tech.id || index} className={homepageStyles.techEditContainer}>
                                        <label>ID:</label>
                                        <input
                                            type="number"
                                            value={tech.id}
                                            onChange={(e) => {
                                                const updated = [...editedTechnologies];
                                                updated[index] = {...updated[index], id: parseInt(e.target.value) || 0};
                                                setEditedTechnologies(updated);
                                            }}
                                            className={homepageStyles.input}
                                        />

                                        <label>Image URL:</label>
                                        <input
                                            type="text"
                                            value={tech.imageUrl}
                                            onChange={(e) => {
                                                const updated = [...editedTechnologies];
                                                updated[index] = { ...updated[index], imageUrl: e.target.value };
                                                setEditedTechnologies(updated);
                                            }}
                                            className={homepageStyles.input}
                                        />

                                        <label>Proficiency:</label>
                                        <input
                                            type="number"
                                            value={tech.proficiency}
                                            onChange={(e) => {
                                                const updated = [...editedTechnologies];
                                                updated[index] = { ...updated[index], proficiency: parseInt(e.target.value) || 1 };
                                                setEditedTechnologies(updated);
                                            }}
                                            className={homepageStyles.input}
                                        />
                                    </div>
                                ))}

                                <h3>Edit Backend Skills</h3>
                                {backendEditedTechnologies.map((tech, index) => (
                                    <div key={tech.id || index} className={homepageStyles.techEditContainer}>
                                        <label>ID:</label>
                                        <input
                                            type="number"
                                            value={tech.id}
                                            onChange={(e) => {
                                                const updated = [...backendEditedTechnologies];
                                                updated[index] = {...updated[index], id: parseInt(e.target.value) || 0};
                                                setBackendEditedTechnologies(updated);
                                            }}
                                            className={homepageStyles.input}
                                        />

                                        <label>Image URL:</label>
                                        <input
                                            type="text"
                                            value={tech.imageUrl}
                                            onChange={(e) => {
                                                const updated = [...backendEditedTechnologies];
                                                updated[index] = { ...updated[index], imageUrl: e.target.value };
                                                setBackendEditedTechnologies(updated);
                                            }}
                                            className={homepageStyles.input}
                                        />

                                        <label>Proficiency:</label>
                                        <input
                                            type="number"
                                            value={tech.proficiency}
                                            onChange={(e) => {
                                                const updated = [...backendEditedTechnologies];
                                                updated[index] = { ...updated[index], proficiency: parseInt(e.target.value) || 1 };
                                                setBackendEditedTechnologies(updated);
                                            }}
                                            className={homepageStyles.input}
                                        />
                                    </div>
                                ))}

                                <div className={homepageStyles.overlayContentButtonsRow}>
                                    <button onClick={() => {
                                        setEditedTechnologies([...editedTechnologies, {
                                            id: 0,
                                            imageUrl: '',
                                            proficiency: 1
                                        }]);
                                    }}>Add Frontend Skill
                                    </button>
                                    <button onClick={() => {
                                        setBackendEditedTechnologies([...backendEditedTechnologies, {
                                            id: 0,
                                            imageUrl: '',
                                            proficiency: 1
                                        }]);
                                    }}>Add Backend Skill
                                    </button>
                                    <button onClick={handleSkillsSave}>Save</button>
                                    <button onClick={() => setShowSkillsOverlay(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}


                </div>

                <div className={homepageStyles.skillsSecondRow}>
                    <div className={homepageStyles.skillsTitleContainer}>
                        <p className={homepageStyles.skillsTitle}>{t("Soft Skills")}</p>
                    </div>

                    <div className={homepageStyles.softSkillsContainer}>
                        {skills && skills.softSkills.length > 0 ? (
                            skills.softSkills.map((skill, index) => (
                                <div key={index} className={homepageStyles.softSkillsTextStyleContainer}>
                                    <p className={homepageStyles.softSkillsTextStyle}>• {t(skill)}</p>
                                </div>
                            ))
                        ) : (
                            <p>{t("Loading...")}</p>
                        )}
                    </div>

                </div>

            </div>

            <div className={homepageStyles.hobbySection}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className={homepageStyles.aboutMeSectionPencil} viewBox="0 0 16 16" onClick={() => setShowHobbyOverlay(true)}>
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                <p className={homepageStyles.reviewsTitle}>{hobbyPage ? t(hobbyPage.title) : t("Loading...")}</p>
                <div className={homepageStyles.pastimesContainer}>
                    <p className={homepageStyles.pastimeSubTitle}>{hobbyPage ? t(hobbyPage.below) : t("Loading...")}</p>
                </div>

                <div className={homepageStyles.pastimeFirstRow}>

                    <div className={homepageStyles.pastimeLeftSection}>
                        <div className={homepageStyles.pastimeText}>
                            {editedHobbies?.[0]?.description || "No description available"}
                        </div>
                        <div className={homepageStyles.imageContainer}>
                            <img
                                src={editedHobbies[0]?.image}
                                alt="running"
                                className={homepageStyles.imageFit}
                            />
                        </div>
                    </div>

                    <div className={homepageStyles.pastimeRightSection}>
                        <div className={homepageStyles.pastimeText}>
                            {editedHobbies?.[1]?.description || "No description available"}
                        </div>
                        <div className={homepageStyles.imageContainer}>
                            <img
                                src={editedHobbies[1]?.image}
                                alt="running"
                                className={homepageStyles.imageFit}
                            />
                        </div>
                    </div>

                </div>

                <div className={homepageStyles.pastimeSecondRowSection}>
                    <div className={homepageStyles.pastimeText}>
                        {editedHobbies?.[2]?.description || "No description available"}
                        <div className={homepageStyles.imageContainer}>
                            <img
                                src={editedHobbies[2]?.image}
                                alt="running"
                                className={homepageStyles.imageFit}
                            />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                {showHobbyOverlay && (
                    <div className={homepageStyles.overlay} onClick={() => setShowHobbyOverlay(false)}>
                        <div className={homepageStyles.overlayContent} onClick={(e) => e.stopPropagation()}>
                            <h2>Edit Pastime Section</h2>

                            <label htmlFor="hobbyTitle">Title:</label>
                            <input
                                id="hobbyTitle"
                                type="text"
                                value={hobbyTitle}
                                onChange={(e) => {
                                    const newTitle = e.target.value;
                                    console.log("Input Title:", newTitle);
                                    setHobbyTitle(newTitle);
                                }}
                                className={homepageStyles.input}
                            />

                            <label htmlFor="belowHobbyTitle">Below text:</label>
                            <input
                                id="belowHobbyTitle"
                                type="text"
                                value={belowHobbyTitle}
                                onChange={(e) => {
                                    const newTitle = e.target.value;
                                    console.log("Input Title:", newTitle);
                                    setBelowHobbyTitle(newTitle);
                                }}
                                className={homepageStyles.input}
                            />

                            <h3>Edit Pastimes</h3>
                            {editedHobbies.map((hobby, index) => (
                                <div key={hobby.id || index} className={homepageStyles.techEditContainer}>
                                    <label>ID:</label>
                                    <input
                                        type="number"
                                        value={hobby.id}
                                        onChange={(e) => {
                                            const updated = [...editedHobbies];
                                            updated[index] = {...updated[index], id: parseInt(e.target.value) || 0};
                                            setEditedHobbies(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />

                                    <label>Description:</label>
                                    <input
                                        type="text"
                                        value={hobby.description}
                                        onChange={(e) => {
                                            const updated = [...editedHobbies];
                                            updated[index] = {...updated[index], description: e.target.value};
                                            setEditedHobbies(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />

                                    <label>Image URL:</label>
                                    <input
                                        type="text"
                                        value={hobby.image}
                                        onChange={(e) => {
                                            const updated = [...editedHobbies];
                                            updated[index] = {...updated[index], image: e.target.value};
                                            setEditedHobbies(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />
                                </div>
                            ))}


                            <div className={homepageStyles.overlayContentButtonsRow}>
                                <button onClick={handleSaveHobby}>Save</button>
                                <button onClick={() => setShowHobbyOverlay(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>


            <div className={homepageStyles.reviewSection}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className={homepageStyles.aboutMeSectionPencil} viewBox="0 0 16 16"
                     onClick={() => setShowReviewsOverlay(true)}>
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                <p className={homepageStyles.reviewsTitle}>{reviewsPage ? t(reviewsPage.title) : t("Loading...")}</p>

                <div className={homepageStyles.carousel}>
                    <div
                        className={homepageStyles.carouselTrack}
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className={homepageStyles.reviewItem}>
                                    <h3 className={homepageStyles.reviewCardTitle}>{review.title}</h3>
                                    <p>{review.content}</p>
                                </div>
                            ))
                        ) : (
                            <p>Loading reviews...</p>
                        )}
                    </div>
                </div>

                <div className={homepageStyles.reviewsContainer}>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div
                                key={index}
                                className={`${homepageStyles.reviewCard} ${homepageStyles[getRandomSize()]}`}
                            >
                                <div className={homepageStyles.badgeContainer}>
                                    <p className={homepageStyles.badgeStyles}>📜</p>
                                </div>

                                <p className={homepageStyles.reviewCardTitle}>{review.title}</p>
                                <p className={homepageStyles.reviewCardSubText}>{review.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>

                {showReviewsOverlay && (
                    <div className={homepageStyles.overlay} onClick={() => setShowReviewsOverlay(false)}>
                        <div className={homepageStyles.overlayContent} onClick={(e) => e.stopPropagation()}>
                            <h2>Edit Reviews Section</h2>

                            <label htmlFor="reviewsTitle">Title:</label>
                            <input
                                id="reviewsTitle"
                                type="text"
                                value={reviewsTitle}
                                onChange={(e) => {
                                    const newTitle = e.target.value;
                                    console.log("Input Title:", newTitle);
                                    setReviewsTitle(newTitle);
                                }}
                                className={homepageStyles.input}
                            />


                            <div className={homepageStyles.overlayContentButtonsRow}>
                                <button onClick={handleSaveReviews}>Save</button>
                                <button onClick={() => setShowReviewsOverlay(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer/>
        </>
    );
};

export default Homepage;
