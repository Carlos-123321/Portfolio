// import React from "react";
// import NavBar from "../navbar/NavBar.tsx";
// import portfolioBackground from "../assets/portfoliobackground.png";
// import homepageStyles from "./homepage.module.css";
// import Footer from "../footer/Footer.tsx";
//
// const Homepage: React.FC = () => {
//     return (
//         <>
//             <NavBar/>
//
//             <img
//                 src={portfolioBackground}
//                 alt="portfolio background"
//                 className={homepageStyles.heroImage}
//             />
//
//             <div>
//                 <p className={homepageStyles.temp1title}>
//                     Hi, I'm Carlos Alvarado
//                 </p>
//                 <p className={homepageStyles.temp2title}>
//                     A passionate developer from Canada
//                 </p>
//                 <p className={homepageStyles.temp3title}>
//                     "The journey of a thousand miles begins with a single step."
//                 </p>
//             </div>
//
//             <Footer/>
//
//         </>
//     );
// };
//
// export default Homepage;

import React from "react";
import NavBar from "../navbar/NavBar.tsx";
import portfolioBackground from "../assets/portfoliobackground.png";
import homepageStyles from "./homepage.module.css";
import Footer from "../footer/Footer.tsx";

const Homepage: React.FC = () => {
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
                    <p className={homepageStyles.temp1title}>
                        Hi, I'm Carlos Alvarado
                    </p>
                    <p className={homepageStyles.temp2title}>
                        A passionate developer from Canada
                    </p>
                    <p className={homepageStyles.temp3title}>
                        "The journey of a thousand miles begins with a single step."
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Homepage;

