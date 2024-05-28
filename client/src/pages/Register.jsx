import React, { useState } from 'react';
import style from '../css/register.module.css';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const createUser = async () => {
        setLoading(true)
        const userData = {
            "name": name,
            "email": email,
            "password": password
        };

        try {
            const response = await axios.post('http://localhost:5000/grantshopwe/api/createuser', userData);
            console.log('User added successfully:', response.data);
            setLoading(false)

        } catch (error) {
            setLoading(false)

            console.error('Error adding user:', error);
        }
    };

    return (
        <div className={style.bodycontainer}>
            <div className="container d-flex justify-content-center">
                <div className={`row ${style.registrationBox}`}>
                    <div className={`col-4 ${style.regLeftBox}`}></div>
                    <div className={`col-8 p-4 ${style.regRightBox}`}>
                        <div className="starterText mb-5 text-start">
                            <h3>Let's get started &rarr;</h3>
                            <small>Join us and let's get started the journey!</small>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control shadow-none"
                                id="name"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name"><i className="bi bi-at me-2"></i>Your name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control shadow-none"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email"><i className="bi bi-at me-2"></i>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control shadow-none"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password"><i className="bi bi-at me-2"></i>Password</label>
                        </div>
                        <div className={style.buttonContainer}>
                            <button onClick={createUser}>{loading ? "Loading" : "Let's go!"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
