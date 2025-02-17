import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import styles from './emailPage.module.css';
import Navbar from "../navbar/NavBar.tsx"; // Import the CSS module

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_tcr0nn6",
                "template_m77btdn",
                e.target as HTMLFormElement,
                "5Ko_4I-qwRVgN3M7r"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    setStatus("An error occurred. Please try again.");
                }
            );
    };

    return (
        <>
        <Navbar/>

            <div className={styles.marginSpace}/>
        <div className={styles.formContainer}>
            <h2>Send me an email</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send Message</button>
            </form>

            {status && <p className={styles.statusMessage}>{status}</p>}
        </div>
        </>
    );
};

export default ContactForm;

