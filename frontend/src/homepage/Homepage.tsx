// import React, {useEffect, useState} from "react";
// import NavBar from "../navbar/NavBar.tsx";
// import portfolioBackground from "../../public/assets/portfoliobackground.png";
// import homepageStyles from "./homepage.module.css";
// import Footer from "../footer/Footer.tsx";
// import {useTranslation} from "react-i18next";
//
// const Homepage: React.FC = () => {
//
//     const { t } = useTranslation();
//
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const reviews = [
//         {title: "Review 1", content: "Carlos is a very good software developer!"},
//         {title: "Review 2", content: "Helped me out a lot in pet clinic project"},
//         {title: "Review 3", content: "Did the translation and authentication for our external client project. Would Recommend"},
//     ];
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//         }, 3000); // Change slide every 3 seconds
//         return () => clearInterval(interval);
//     }, [reviews.length]);
//
//
//     return (
//         <>
//             <NavBar/>
//
//             <div className={homepageStyles.heroContainer}>
//                 <img
//                     src={portfolioBackground}
//                     alt="portfolio background"
//                     className={homepageStyles.heroImage}
//                 />
//
//                 <div className={homepageStyles.textContainer}>
//                     <div className={homepageStyles.profileSectionContainer}>
//                         <div className={homepageStyles.profile}>
//
//                         </div>
//                     </div>
//                     <p className={homepageStyles.temp1title}>
//                         {t("introLine")}
//                     </p>
//                     <p className={homepageStyles.temp2title}>
//                         {t("introSecondLine")}
//                     </p>
//                     <p className={homepageStyles.temp3title}>
//                         {t("introThirdLine")}
//                     </p>
//                 </div>
//             </div>
//
//             <div className={homepageStyles.nextPage}>
//
//                 <div className={homepageStyles.rightSide}>
//                     <p>
//                         {t("longText")}
//                     </p>
//                 </div>
//             </div>
//
//             <div className={homepageStyles.reviewSection}>
//                 <div className={homepageStyles.reviewsTitle}>Reviews</div>
//                 <div className={homepageStyles.carousel}>
//                     <div
//                         className={homepageStyles.carouselTrack}
//                         style={{transform: `translateX(-${currentIndex * 100}%)`}}
//                     >
//                         {reviews.map((review, index) => (
//                             <div key={index} className={homepageStyles.reviewItem}>
//                                 <h3>{review.title}</h3>
//                                 <p>{review.content}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//
//                 <div className={homepageStyles.reviewsContainer}>
//                     {reviews.map((review, index) => (
//                         <div key={index} className={homepageStyles.reviewCard}>
//                             <h3>{review.title}</h3>
//                             <p>{review.content}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//
//             <Footer/>
//         </>
//     );
// };
//
// export default Homepage;
//


import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.tsx";
import portfolioBackground from "../../public/assets/portfoliobackground.png";
import homepageStyles from "./homepage.module.css";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import { getUsers } from "../apiCalls/user/userService.ts"; // Import API call function
import User from "../apiCalls/user/User.ts"; // Import User model

const Homepage: React.FC = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reviews, setReviews] = useState<{ title: string; content: string }[]>([]);

    // Fetch user comments on component mount
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const users: User[] = await getUsers(); // Fetch users with comments
                const comments = users.flatMap((user) =>
                    user.comments // Corrected here: use 'comments' instead of 'comment'
                        .filter((comment) => comment.approved) // Filter only approved comments
                        .map((comment) => ({
                            title: user.name, // Display the user's name as the title
                            content: comment.comment, // Corrected here: access comment.comment
                        })) || []
                );
                setReviews(comments);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    // Automatically switch between reviews
    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval);
        }
    }, [reviews]);

    return (
        <>
            <NavBar />

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

            <div className={homepageStyles.nextPage}>
                <div className={homepageStyles.rightSide}>
                    <p>{t("longText")}</p>
                </div>
            </div>

            {/* Reviews Section */}
            <div className={homepageStyles.reviewSection}>
                <div className={homepageStyles.reviewsTitle}>Reviews</div>

                {/* Carousel for scrolling reviews */}
                <div className={homepageStyles.carousel}>
                    <div
                        className={homepageStyles.carouselTrack}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className={homepageStyles.reviewItem}>
                                    <h3>{review.title}</h3>
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
                            <div key={index} className={homepageStyles.reviewCard}>
                                <p className={homepageStyles.reviewCardTitle}>{review.title}</p>
                                <p className={homepageStyles.reviewCardSubText}>{review.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Homepage;
