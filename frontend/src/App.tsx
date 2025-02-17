import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage.tsx";
import Portfolio from "./portfolio/Portfolio.tsx";
import ProjectPage from "./project-card/project-page/ProjectPage.tsx";
import LoginPage from "./loginpage/LoginPage.tsx";
import AcademicJourney from "./academicJourney/AcademicJourney.tsx";
import Comment from "./commentPage/Comment.tsx";
import Sign from "./loginpage/Sign.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import EmailPage from "./emailPage/EmailPage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/academicJourney" element={<AcademicJourney />} />
                <Route path="/comment" element={<Comment />} />
                <Route path="/sign-up" element={<Sign />} />
                <Route path="/adminDashboard" element={<Dashboard />} />
                <Route path="/email" element={<EmailPage />} />
            </Routes>
        </Router>
    );
};

export default App;