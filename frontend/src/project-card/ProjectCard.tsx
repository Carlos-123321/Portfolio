// import React from "react";
// import projectCardStyles from "./projectCard.module.css";
// import projectCard from "./Project1I.png";
//
// const ProjectCard: React.FC = () => {
//     return (
//         <>
//             <div className={projectCardStyles.projectCardContainer}>
//                 <div className={projectCardStyles.projectCardImageContainer}>
//                     <img
//                         src={projectCard}
//                         alt="Card Image"
//                         className={projectCardStyles.projectCardImageStyle}
//                     />
//                 </div>
//             </div>
//
//         </>
//     );
// };
//
// export default ProjectCard;


import React from "react";
import projectCardStyles from "./projectCard.module.css";
import projectCardImage from "./Project1I.png";
import navbarStyles from "../navbar/navbar.module.css";
import {Link} from "react-router-dom"; // Adjust path if needed

const ProjectCard: React.FC = () => {
    return (
        <div className={projectCardStyles.projectCardContainer}>
            <div className={projectCardStyles.projectCardImageContainer}>
                <Link to="/specificProject" className={navbarStyles.cardImageLink}>
                <img
                    src={projectCardImage}
                    alt="Project Image"
                    className={projectCardStyles.projectCardImageStyle}
                />
                </Link>
            </div>

            <div className={projectCardStyles.projectCardContent}>
                <div className={projectCardStyles.projectCardTitle}>
                    Casa Control Project
                </div>
                <p className={projectCardStyles.projectCardDescription}>
                    This is a brief description of my amazing project. It showcases my skills in web development and
                    provides a solution to a real-world problem.
                </p>
            </div>
        </div>


    );
};

export default ProjectCard;
