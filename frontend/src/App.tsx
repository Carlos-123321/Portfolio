import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage.tsx";
import Portfolio from "./portfolio/Portfolio.tsx";
import PortfolioProject from "./PortfolioProject.tsx";
import ProjectPage from "./project-card/project-page/ProjectPage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioProject />} />
                <Route path="/specificProject" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
};

export default App;