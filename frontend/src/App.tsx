import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage.tsx";
import Portfolio from "./portfolio/Portfolio.tsx";
import ProjectPage from "./project-card/project-page/ProjectPage.tsx";
import LoginPage from "./loginpage/LoginPage.tsx";
import AcademicJourney from "./academicJourney/AcademicJourney.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/academicJourney" element={<AcademicJourney />} />
            </Routes>
        </Router>
    );
};

export default App;