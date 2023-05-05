import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError]= useState ('');

    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
         if(password.length < 6){
          return setError('please at least set password gather then 6 charecter');
        }
        if (email.length < 1){
          return setError('please enter your email')
        }
        // event.target.reset()

         signIn(email, password)
         .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          if(loggedUser.email !=email){
            alert('please verify your email')
        }
          // form.reset()
         })
         .catch(error=>{
         setError(error.message)
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
                <input type="email" name='email' id=''  />
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
            <p>{error}</p>
            <input className='btn-submit' type="submit" value='Login' />
            </form>
          
             <button onClick={handleGoogleLogin} className='btn-submit'>Login with Google</button>
             <button onClick={handleGithubLogin} className='btn-submit'>Github Login</button>
             <p><small>new to teasty Food Zone? <Link to='/signup'>Create an account</Link> </small></p>
        </div>
        </div>
    );
};

export default Login;