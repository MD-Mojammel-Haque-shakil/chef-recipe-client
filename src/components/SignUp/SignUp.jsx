import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');
    return (
        <div>
         <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
            <div className='form-control'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='' required />
            </div>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='' required />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='' required />
            </div>
            <div className='form-control'>
                <label htmlFor="photourl">Photo Url</label>
                <input type="url" name='photourl' id='' required />
            </div>
            <input className='btn-submit' type="submit" value='Sign Up' />
            </form>
            <p><small>Already have a account? <Link to='/login'>Please Login</Link> </small></p>
            <p><small>{error}</small></p>
        </div>
        </div>
    );
};

export default SignUp;