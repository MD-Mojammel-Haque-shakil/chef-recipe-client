import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
              <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='' required />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type={show ? "text" : "password"} name='password' id='' required />

                <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span>: <span>Show Password</span>
                        }
                        </small></p>
            </div>
            <input className='btn-submit' type="submit" value='Login' />
            </form>
             <p><small>new to ema-john <Link to='/signup'>Create an account</Link> </small></p>
        </div>
        </div>
    );
};

export default Login;