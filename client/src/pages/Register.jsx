import React, { useState } from 'react';
import style from '../css/register.module.css';
import axios from 'axios';
import { CircularLoader } from '../components/CircularLoader';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validateInputs = () => {
        if (!name) {
            toast.error("Name is required");
            return false;
        }
        if (!email) {
            toast.error("Email is required");
            return false;
        }
        if (!validateEmail(email)) {
            toast.error("Invalid email format");
            return false;
        }
        if (!password) {
            toast.error("Password is required");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }
        return true;
    };

    const createUser = async () => {
        if (!validateInputs()) {
            return;
        }

        setLoading(true);
        const userData = {
            name,
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:5000/grantshopwe/api/createuser', userData);
            setLoading(false);
            if (response.data.response === 'User already exists') {
                toast.warning('User already exists!');
            } else {
                toast.success('User added successfully!');
            }
        } catch (error) {
            setLoading(false);
            toast.error('Error adding user');
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
                            <label htmlFor="name"><i className="bi bi-person me-2"></i>Your name</label>
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
                            <label htmlFor="email"><i className="bi bi-envelope me-2"></i>Email</label>
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
                            <label htmlFor="password"><i className="bi bi-lock me-2"></i>Password</label>
                        </div>
                        <div className={style.buttonContainer}>
                            <button disabled={loading} onClick={createUser}>
                                {loading ? <CircularLoader stroke="white" radius="12" /> : "Let's go!"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}

export default Register;
