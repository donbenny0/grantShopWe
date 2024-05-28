import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import style from '../css/login.module.css'
const Login = () => {
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState('none');
    return (
        <div>
            <div className={style.content}>
                <div className={style['flex-div']}>
                    <div className={style['name-content']}>
                        <h1 className={style.logo}>GrantShopWe</h1>
                        <p>Find your perfect watchs from millions of collections.</p>
                    </div>
                    <div className={style.formBodyOuter}>
                        {/* <LoadingProgress display={loadingState} /> */}
                        <div className={style.loadingMask} style={{ display: loadingState }}>
                        </div>
                        <div className={style.formBody}>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control shadow-none" id="email" placeholder="name@example.com" />
                                <label htmlFor="email"><i className="bi bi-at me-2"></i>Email / Username</label>
                                {/* <small className={`text-danger ${style.errorText} ${style.errorTextEmail}`}>Error</small> */}

                            </div>
                            <div className="position-relative">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control shadow-none" id="password" placeholder="name@example.com" />
                                    <label htmlFor="password"><i className="bi bi-key me-2"></i>Password</label>
                                    {/* <small className={`text-danger ${style.errorText} ${style.errorTextPassword}`}>Error</small> */}

                                </div>
                                <i className="bi bi-eye me-2 position-absolute top-0 end-0 text-light mt-3 me-4"></i>
                            </div>
                            <Link to="#" className='mb-3'>Forgot Password ?</Link>
                            <div className={style.loginBtnContainer}>
                                <button className={style.login} >Log In</button>
                            </div>
                            <div className="createNewAcc">
                                <br />
                                <small className={style.createAccText}><Link to={'/register'}>Create</Link> your own <b>GrantShopWe</b> account.</small>
                            </div>
                            {/* <div className="mt-2 d-flex align-items-center gap-3">
                                <hr className={style.sideLine} />
                                <span className='text-secondary'>OR</span>
                                <hr className={style.sideLine} />
                            </div>
                            <button className={`${style["g-account"]}`} ><i className="bi bi-google me-2"></i>Login with Google</button> */}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login