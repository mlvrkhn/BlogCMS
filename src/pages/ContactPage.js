import React, { useState, useCallback } from 'react';


import DefaultLayout from '../components/layout/DefaultLayout';
import StyledContainer from '../styled/Container.styled';
import useSendEmail from '../hooks/useSendEmail';
import Swal from 'sweetalert2';

const ContactPage = () => {
    const initial = {
        from: '',
        message: '',
        email: '',
    };
    const [formData, setFormData] = useState(initial);

    const handleChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const [emailStatus] = useSendEmail(formData);
        setFormData(formData);
    });

    return (
        <DefaultLayout title="Contact">
            <StyledContainer>
                <form className="contact_form" onSubmit={(e) => handleSubmit(e)}>
                    <h2>Drop me an email (:</h2>
                    <input
                        name="from"
                        type="text"
                        value={formData.from}
                        onChange={(e) => handleChange(e.target)}
                        placeholder="Your full name"
                    />
                    <textarea
                        name="message"
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
            </StyledContainer>
        </DefaultLayout>
    );
};

export default ContactPage;
