import React from "react";
import academicStyles from "./academicJourney.module.css";
import Navbar from "../navbar/NavBar.tsx";
import Footer from "../footer/Footer.tsx";

const AcademicJourney: React.FC = () => {
    return (
        <>
        <Navbar/>
        <div className={academicStyles.container}>
            <h1>My Academic Journey</h1>

            <div className={academicStyles.school}>
                <h2>Champlain College Saint-Lambert</h2>
                <p><strong>Degree:</strong> Computer Science Technology</p>
                <p><strong>Years Attended:</strong> 2021 - 2025</p>
                <p><strong>Description:</strong> Focused on software development, networking, and cybersecurity.</p>
            </div>

            <div className={academicStyles.school}>
                <h2>École secondaire Gerard-Filion</h2>
                <p><strong>Degree:</strong>High Schoold Diploma</p>
                <p><strong>Years Attended:</strong> 2016 - 2021</p>
                <p><strong>Description:</strong> </p>
            </div>

        </div>
            <Footer/>
        </>
    );
};

export default AcademicJourney;
