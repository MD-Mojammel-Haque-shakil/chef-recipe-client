import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const [show, setShow] = useState(false);
    
    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        event.target.reset()

         signIn(email, password)
         .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset()
         })
         .catch(error=>{
          console.log(error)
         })
         
    }

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin =()=>{
          signInWithPopup(auth, googleProvider)

          .then(result=>{
            const user =result.user;
            console.log(user);
          })

          .catch(error=>{
            console.log(error)
          })
    }

    const githubProvider = new GithubAuthProvider();
    const handleGithubLogin =()=>{
        signInWithPopup(auth, githubProvider)

          .then(result=>{
            const user =result.user;
            console.log(user);
          })

          .catch(error=>{
            console.log(error)
          })
    }
    return (
        <div>
              <div className='form-container'>
            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>
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
             <button onClick={handleGoogleLogin} className='btn-submit'>Login with Google</button>
             <button onClick={handleGithubLogin} className='btn-submit'>Github Login</button>
             <p><small>new to ema-john <Link to='/signup'>Create an account</Link> </small></p>
        </div>
        </div>
    );
};

export default Login;