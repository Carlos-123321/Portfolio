import React, {useEffect, useState} from "react";
import NavBar from "../navbar/NavBar.tsx";
import portfolioBackground from "../../public/assets/portfoliobackground.png";
import homepageStyles from "./homepage.module.css";
import Footer from "../footer/Footer.tsx";
import {useTranslation} from "react-i18next";

const Homepage: React.FC = () => {

    const { t } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        {title: "Review 1", content: "Carlos is a very good software developer!"},
        {title: "Review 2", content: "Helped me out a lot in pet clinic project"},
        {title: "Review 3", content: "Did the translation and authentication for our external client project. Would Recommend"},
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [reviews.length]);


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
                        <div className={homepageStyles.profile}>

                        </div>
                    </div>
                    <p className={homepageStyles.temp1title}>
                        {t("introLine")}
                    </p>
                    <p className={homepageStyles.temp2title}>
                        {t("introSecondLine")}
                    </p>
                    <p className={homepageStyles.temp3title}>
                        {t("introThirdLine")}
                    </p>
                </div>
            </div>

            <div className={homepageStyles.nextPage}>

                <div className={homepageStyles.rightSide}>
                    <p>
                        {t("longText")}
                    </p>
                </div>
            </div>

            <div className={homepageStyles.reviewSection}>
                <div className={homepageStyles.reviewsTitle}>Reviews</div>
                <div className={homepageStyles.carousel}>
                    <div
                        className={homepageStyles.carouselTrack}
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className={homepageStyles.reviewItem}>
                                <h3>{review.title}</h3>
                                <p>{review.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Footer/>
        </>
    );
};

export default Homepage;

