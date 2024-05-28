import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../css/login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingState, setLoadingState] = useState('none');

    const validateInputs = () => {
        if (!email) {
            toast.error('Email or Username is required');
            return false;
        }
        if (!password) {
            toast.error('Password is required');
            return false;
        }
        return true;
    };

    const authenticateUser = async () => {
        if (!validateInputs()) {
            return;
        }

        setLoadingState('block');
        const userData = {
            "email": email,
            "password": password
        };

        try {
            const response = await axios.post('http://localhost:5000/grantshopwe/api/authenticate', userData);
            setLoadingState('none');
            console.log(userData);
            console.log(response.data);
            if (response.data.response === 'No user') {
                toast.warning('You don\'t have any account associated with this email or username!');
            } else if (response.data.response === 'Invalid password') {
                toast.warning('Invalid password!');
            } else if (response.data.response === 'Authentication successful') {
                toast.success('Login successful!');
                // Navigate to the dashboard or homepage after successful login
                navigate('/'); // Adjust the path as needed
            }
        } catch (error) {
            setLoadingState('none');
            toast.error('Error logging in');
        }
    };

    return (
        <div>
            <div className={style.content}>
                <div className={style['flex-div']}>
                    <div className={style['name-content']}>
                        <h1 className={style.logo}>GrantShopWe</h1>
                        <p>Find your perfect watch from millions of collections.</p>
                    </div>
                    <div className={style.formBodyOuter}>
                        <div className={style.loadingMask} style={{ display: loadingState }}>
                            <div className={style.loader}></div>
                        </div>
                        <div className={style.formBody}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="email"
                                    placeholder="Email or Username"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                />
                                <label htmlFor="email"><i className="bi bi-at me-2"></i>Email / Username</label>
                            </div>
                            <div className="position-relative">
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control shadow-none"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="password"><i className="bi bi-key me-2"></i>Password</label>
                                </div>
                                <i className="bi bi-eye me-2 position-absolute top-0 end-0 text-light mt-3 me-4"></i>
                            </div>
                            <Link to="#" className='mb-3'>Forgot Password?</Link>
                            <div className={style.loginBtnContainer}>
                                <button disabled={!loadingState} onClick={authenticateUser} className={style.login}>
                                    {loadingState === 'block' ? 'Loading...' : 'Log In'}
                                </button>
                            </div>
                            <div className="createNewAcc">
                                <br />
                                <small className={style.createAccText}>
                                    <Link to={'/register'}>Create</Link> your own <b>GrantShopWe</b> account.
                                </small>
                            </div>
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
};

export default Login;
