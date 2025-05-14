import React, { useEffect, useState } from "react";
import academicStyles from "./journey.module.css";
import Navbar from "../navbar/NavBar.tsx";
import Footer from "../footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import Journey from "../apiCalls/journey/Journey.ts";
import { Academic } from "../apiCalls/journey/Academic.ts";
import { getJourneyById, updateJourney } from "../apiCalls/journey/JourneyService.ts";
import homepageStyles from "../homepage/homepage.module.css";

const JourneySectionPage: React.FC = () => {
    const { t } = useTranslation();
    const [journey, setJourney] = useState<Journey | null>(null);
    const [showJourneyOverlay, setShowJourneyOverlay] = useState(false);
    const [journeyTitle, setJourneyTitle] = useState("");
    const [academic, setAcademic] = useState<Academic[]>([]);
    const [editedAcademic, setEditedAcademic] = useState<Academic[]>([]);
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userRole = localStorage.getItem("userRole");

    useEffect(() => {
        const fetchJourney = async () => {
            const data = await getJourneyById();
            const translatedTitle = t(data?.title || "");
            const fetchedJourney = await getJourneyById();

            const academicData = Array.isArray(data?.academic) ? data.academic : [];

            setJourney(data);
            setJourneyTitle(translatedTitle);
            setEditedAcademic(fetchedJourney.academic); // Initialize editedAcademic state
            setAcademic(academicData);
        };

        fetchJourney();
    }, [t]);

    const handleJourneySave = async () => {
        console.log("journey:", journey);
        try {
            if (journey) {
                const updatedData = {
                    title: journeyTitle,
                    academic: editedAcademic,
                };

                await updateJourney(journey.id, updatedData);
                setJourney({ ...journey, ...updatedData });
                setShowJourneyOverlay(false);
            }
        } catch (error) {
            console.error("Failed to update Journey:", error);
        }
    };

    const handleAddAcademic = () => {
        const newAcademicEntry = {
            id: 0,
            innerTitle: '',
            degree: '',
            attendance: '',
            description: '',
        };

        // Only update the editedAcademic state initially
        setEditedAcademic([...editedAcademic, newAcademicEntry]);
    };

    const sortedAcademic = academic.slice().reverse();

    return (
        <>
            <Navbar />
            <div className={academicStyles.container}>
                {isAuthenticated === "true" && userRole === "Admin" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className={homepageStyles.aboutMeSectionPencil}
                        viewBox="0 0 16 16"
                        onClick={() => setShowJourneyOverlay(true)}
                    >
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                )}

                <h1>{journey ? t(journey.title) : t("Loading...")}</h1>

                {sortedAcademic.length > 0 ? (
                    sortedAcademic.map((academicEntry, index) => (
                        <div key={index} className={academicStyles.school}>
                            <h2>{academicEntry?.innerTitle}</h2>
                            <p><strong>{t("Degree")}:</strong> {academicEntry?.degree}</p>
                            <p><strong>{t("Years Attended")}:</strong> {academicEntry?.attendance}</p>
                            <p>
                                <strong>{t("Description")}:</strong> {academicEntry?.description}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>{t("No academic entries available.")}</p>
                )}

                {showJourneyOverlay && (
                    <div className={homepageStyles.overlay} onClick={() => setShowJourneyOverlay(false)}>
                        <div className={homepageStyles.overlayContent} onClick={(e) => e.stopPropagation()}>
                            <h2>Edit Academic Journey</h2>

                            <label htmlFor="journeyTitle">Title:</label>
                            <input
                                id="journeyTitle"
                                type="text"
                                value={journeyTitle}
                                onChange={(e) => {
                                    const newTitle = e.target.value;
                                    console.log("Input Title:", newTitle);  // Log the input value
                                    setJourneyTitle(newTitle);  // Update the state with the new value
                                }}
                                className={homepageStyles.input}
                            />

                            <h3>Edit Academic Journey</h3>
                            {editedAcademic.map((academic, index) => (
                                <div key={academic.id || index} className={homepageStyles.techEditContainer}>
                                    <label>ID:</label>
                                    <input
                                        type="number"
                                        value={academic.id}
                                        onChange={(e) => {
                                            const updated = [...editedAcademic];
                                            updated[index] = { ...updated[index], id: parseInt(e.target.value) || 0 };
                                            setEditedAcademic(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />

                                    <label>Title of School:</label>
                                    <input
                                        type="text"
                                        value={academic.innerTitle}
                                        onChange={(e) => {
                                            const updated = [...editedAcademic];
                                            updated[index] = { ...updated[index], innerTitle: e.target.value };
                                            setEditedAcademic(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />

                                    <label>Degree:</label>
                                    <input
                                        type="text"
                                        value={academic.degree}
                                        onChange={(e) => {
                                            const updated = [...editedAcademic];
                                            updated[index] = { ...updated[index], degree: e.target.value };
                                            setEditedAcademic(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />

                                    <label>Attendance:</label>
                                    <input
                                        type="text"
                                        value={academic.attendance}
                                        onChange={(e) => {
                                            const updated = [...editedAcademic];
                                            updated[index] = { ...updated[index], attendance: e.target.value };
                                            setEditedAcademic(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />

                                    <label>Description:</label>
                                    <input
                                        type="text"
                                        value={academic.description}
                                        onChange={(e) => {
                                            const updated = [...editedAcademic];
                                            updated[index] = { ...updated[index], description: e.target.value };
                                            setEditedAcademic(updated);
                                        }}
                                        className={homepageStyles.input}
                                    />
                                </div>
                            ))}

                            <div className={homepageStyles.overlayContentButtonsRow}>
                                <button onClick={handleJourneySave}>Save</button>
                                <button onClick={handleAddAcademic}>Add Academic Section</button>
                                <button onClick={() => setShowJourneyOverlay(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default JourneySectionPage;
