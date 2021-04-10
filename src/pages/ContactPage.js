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
        console.log(formData);
		setFormData(initial);
    };

    return (
        <DefaultLayout>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="name" type="text" value={formData.name} onChange={(e) => handleChange(e.target)} />
                <input name="message" type="text" value={formData.message} onChange={(e) => handleChange(e.target)} />
                <input name="email" type="email" value={formData.email} onChange={(e) => handleChange(e.target)} />
                <button type="submit">SUBMIT</button>
            </form>
        </DefaultLayout>
    );
};

export default ContactPage;
