import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [error, setError] = useState('');

    const {user, createUser} = useContext(AuthContext);
    // console.log(user)
  
      const handleRegister = event =>{
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const photoUrl = form.photourl.value;
          console.log(name, email, password, photoUrl)
          
          createUser(email, password)
          .then(result =>{
            const loggedUser = result.user;

            updateProfile(loggedUser, {
                displayName: name, photoURL: photoUrl
              }).then(() => {
                 alert('registation completed')
              }).catch((error) => {
               console.log(error)
              });
              
            console.log(loggedUser)
            form.reset()
          })
          .catch(error=>{
            console.log(error)
          })
      }
    return (
        <div>
         <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleRegister}>
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
                <input type="text" name='photourl' id='' required />
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