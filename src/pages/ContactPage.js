import React, { useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';

const ContactPage = () => {
    const initial = {
        name: '',
        message: '',
        email: '',
    };
    const [formData, setFormData] = useState(initial);

    const handleChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(initial);
        // handle email here
    };

    return (
        <DefaultLayout
            title="Contact"
        >
            <main
                className="main-container"
            >
                <form
                    className="contact_form"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <h2>Drop me an email (:</h2>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange(e.target)}
                        placeholder="Your full name"
                    />
                    <textarea
                        name="message"
                        type="text"
                        value={formData.message}
                        onChange={(e) => handleChange(e.target)}
                        placeholder="Your Message"
                    />
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e.target)}
                        placeholder="Your e-mail"
                    />
                    <button type="submit">SUBMIT</button>
                </form>
            </main>
        </DefaultLayout>
    );
};

export default ContactPage;
