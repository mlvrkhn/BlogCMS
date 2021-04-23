import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import { userID, templateID, serviceID } from '../data/account';

const useSendEmail = async (email) => {
    const [respond, setRespond] = useState('');
    const successMsg = 'Your message has been successfully sent';
    const errorMsg = 'Your message has not been sent';

    const serverResp = await emailjs
        .send(serviceID, templateID, email, userID)
        .then(
            (res) => {
                if (res.status === 200) {
                    // Swal.fire(successMsg);
                    setRespond(successMsg);
                    // return Promise.resolve(successMsg);
                }
                if (res.status !== 200) {
                    // Swal.fire(errorMsg);
                    setRespond(errorMsg);
                    // return Promise.reject(errorMsg);
                }
                console.log('respond', respond);
            },
            (err) => {
                console.log(err);
            },
        );

    return respond;
};

export default useSendEmail;
