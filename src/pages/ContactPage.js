import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { userID, templateID, serviceID } from '../data/account';
import DefaultLayout from '../components/layout/DefaultLayout';
import StyledContainer from '../styled/Container.styled';

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

    const sendEmail = async (email) => {
        const successMsg = 'Your message has been successfully sent';
        const errorMsg = 'Your message has not been sent';

        const serverResp = await emailjs
            .send(serviceID, templateID, email, userID)
            .then(
                (res) => {
                    console.log('🚀 ~ sendEmail ~ res', res.status);
                    if (res.status === 200) {
                        Swal.fire(successMsg);
                        return Promise.resolve(successMsg);
                    } if (res.status !== 200) {
                        Swal.fire(errorMsg);
                        return Promise.reject(successMsg);
                    }
                },
                (err) => {
                    console.log(err);
                },
            );
        return serverResp;
    };

    const handleEmail = async () => {
        const email = formData;
        const respond = await sendEmail(email);
        console.log('respond', respond);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEmail();
        setFormData(initial);
    };

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
            </StyledContainer>
        </DefaultLayout>
    );
};

export default ContactPage;
