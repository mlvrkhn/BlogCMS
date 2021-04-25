import { useState } from 'react';
import emailjs from 'emailjs-com';

import { userID, templateID, serviceID } from '../data/account';

const useSendEmail = (email) => {
    const [response, setResponse] = useState(null);

    const successMsg = 'Your message has been successfully sent';
    const errorMsg = 'Your message has not been sent';

    const setEmail = async () => emailjs
        .send(serviceID, templateID, email, userID)
        .then(
            (res) => {
                if (res.status === 200) {
                    setResponse(successMsg);
                }
                if (res.status !== 200) {
                    setResponse(errorMsg);
                }
            },
            (err) => {
                console.log(err);
            },
        );

    return { response, setEmail }
};

export default useSendEmail;
