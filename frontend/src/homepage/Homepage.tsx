import React, {useEffect, useState} from "react";
import NavBar from "../navbar/NavBar.tsx";
import portfolioBackground from "../../public/assets/portfoliobackground.png";
import college from "../../public/assets/College.jpg";
import homepageStyles from "./homepage.module.css";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import { getUsers } from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";
import soccerImage from "../../public/assets/Soccer.jpg";
import runningImage from "../../public/assets/Running.png";
import gymImage from "../../public/assets/Gym.jpg";
import { motion } from "framer-motion";
import me from "../../public/assets/PhotoOfMe.jpg";

const Homepage: React.FC = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reviews, setReviews] = useState<{ title: string; content: string }[]>([]);

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
            </div>

                <div className={homepageStyles.aboutMeSection}>

                    <p className={homepageStyles.reviewsTitle}>{t("About Me")} 📌</p>

                    <div className={homepageStyles.innerAboutSection}>

                        <div className={homepageStyles.aboutMeSectionImageContainer}>
                            <img
                                src={college}
                                alt="college"
                                className={homepageStyles.heroImage}
                            />
                        </div>
                        <div className={homepageStyles.rightSideAbout}>
                            <p>{t("longText")}</p>
                        </div>
                    </div>


                </div>

                <div className={homepageStyles.skillSection}>
                    <p className={homepageStyles.reviewsTitle}>{t("Skills")} 🧠</p>

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

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                        alt="html5" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        9
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                        alt="css3" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        9
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                        alt="javascript" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                                        alt="typescript" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        7
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                        alt="react" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                                        alt="bootstrap" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma"
                                         width="40"
                                         height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        6
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                                        alt="photoshop" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        5
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={homepageStyles.skillsFirstRowRight}>
                            <div className={homepageStyles.skillsTitleContainer}>
                                <p className={homepageStyles.skillsTitle}>{t("Backend Technologies")}</p>
                            </div>

                            <div className={homepageStyles.skillsLeftIcons}>
                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                                        alt="java" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                                        alt="csharp" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        6
                                    </div>
                                </div>

                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                                        alt="python" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        6
                                    </div>
                                </div>
                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                                        alt=".NET" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>
                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                                         alt="Spring Boot"
                                         width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>
                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                        alt="MySQL" width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        8
                                    </div>
                                </div>
                                <div className={homepageStyles.skillsLeftIconsContainer}>
                                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                         alt="Postman"
                                         width="40" height="40"/>
                                    <div className={homepageStyles.skillsLeftIconsContainerNumericalValue}>
                                        9
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={homepageStyles.skillsSecondRow}>
                        <div className={homepageStyles.skillsTitleContainer}>
                            <p className={homepageStyles.skillsTitle}>{t("Soft Skills")}</p>
                        </div>

                        <div className={homepageStyles.softSkillsContainer}>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Communication")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Problem-solving")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Time Management")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Adaptability")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Collaboration")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Attention to Detail")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Leadership")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Creative Thinking")}</p></div>
                            <div className={homepageStyles.softSkillsTextStyleContainer}><p
                                className={homepageStyles.softSkillsTextStyle}>• {t("Customer Focus")}</p></div>
                        </div>

                    </div>

                </div>

                <div className={homepageStyles.hobbySection}>
                    <p className={homepageStyles.reviewsTitle}>{t("Pastimes")} 🎭</p>
                    <div className={homepageStyles.pastimesContainer}>
                        <p className={homepageStyles.pastimeSubTitle}>{t("I am someone who does a lot of exercise...")}</p>
                    </div>

                    <div className={homepageStyles.pastimeFirstRow}>

                        <div className={homepageStyles.pastimeLeftSection}>
                            <div className={homepageStyles.pastimeText}>
                                {t("I play Soccer at a competitive level")} ⚽
                            </div>
                            <div className={homepageStyles.imageContainer}>
                                <img
                                    src={soccerImage}
                                    alt="running"
                                    className={homepageStyles.imageFit}
                                />
                            </div>
                        </div>

                        <div className={homepageStyles.pastimeRightSection}>
                            <div className={homepageStyles.pastimeText}>
                                {t("I like running. I can run 5km in 18 minutes")} 🏃💨
                            </div>
                            <div className={homepageStyles.imageContainer}>
                                <img
                                    src={runningImage}
                                    alt="running"
                                    className={homepageStyles.imageFit}
                                />
                            </div>
                        </div>

                    </div>

                    <div className={homepageStyles.pastimeSecondRowSection}>
                        <div className={homepageStyles.pastimeText}>
                            {t("gym")} 🏋️
                            <div className={homepageStyles.imageContainer}>
                                <img
                                    src={gymImage}
                                    alt="running"
                                    className={homepageStyles.imageFit}
                                />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>

                <div className={homepageStyles.reviewSection}>
                    <p className={homepageStyles.reviewsTitle}>{t("Reviews")} ✨</p>

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
                </div>

                <Footer/>
            </>
            );
            };

            export default Homepage;
