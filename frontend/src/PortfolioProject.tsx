import React from "react";
import { useParams } from "react-router-dom";

const PortfolioProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Project Details</h1>
            <p>
                You are viewing the details for <strong>Project ID: {id}</strong>.
            </p>
            <p>More information about this project will go here.</p>
        </div>
    );
};

export default PortfolioProject;
