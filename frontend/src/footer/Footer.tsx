import React, { useEffect, useState } from "react";
import footerStyles from "./footer.module.css";
import axios from "axios";

const Footer: React.FC = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/users")
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <>

            <div className={footerStyles.footerContainer}>

                <h3>User List</h3>
                <ul>
                    {users.map((user: any, index) => (
                        <li key={index}>{user.name}</li>
                    ))}
                </ul>

            </div>
        </>
    );
};

export default Footer;
