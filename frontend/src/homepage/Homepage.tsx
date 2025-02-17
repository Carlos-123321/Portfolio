import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.tsx";
import portfolioBackground from "../../public/assets/portfoliobackground.png";
import college from "../../public/assets/College.jpg";
import homepageStyles from "./homepage.module.css";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import { getUsers } from "../apiCalls/user/userService.ts";
import User from "../apiCalls/user/User.ts";

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

                <div className={homepageStyles.textContainer}>
                    <div className={homepageStyles.profileSectionContainer}>
                        <div className={homepageStyles.profile}></div>
                    </div>
                    <p className={homepageStyles.temp1title}>{t("introLine")}</p>
                    <p className={homepageStyles.temp2title}>{t("introSecondLine")}</p>
                    <p className={homepageStyles.temp3title}>{t("introThirdLine")}</p>
                </div>
            </div>

            <div className={homepageStyles.aboutMeSection}>
                <p className={homepageStyles.reviewsTitle}>About Me 📌</p>

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
            <p className={homepageStyles.reviewsTitle}>Skills 🧠</p>
                <div className={homepageStyles.rightSide}>
                    <p>{t("longText")}</p>
                </div>

            </div>

            <div className={homepageStyles.hobbySection}>
                <p className={homepageStyles.reviewsTitle}>Pastimes 🎭</p>
                <div className={homepageStyles.rightSide}>
                    <p>{t("longText")}</p>
                </div>

            </div>

            <div className={homepageStyles.reviewSection}>
                <p className={homepageStyles.reviewsTitle}>Reviews ✨</p>

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
