import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user)

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
}
    return (
    <div className=''>
       <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand text-white" href="#">Chicken & Pizza </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Blog</Link>
        </li>
        <li className="nav-item">
        <Link to='/' className="nav-link active text-white" aria-current="page" href="#">About</Link>
        </li>
        <li className="nav-item">
        <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Contact</Link>
        </li>
      </ul>
      <div className="d-flex align-items-center" role="search">
       {
        user? <>
          <li className='text-white'>{user.email}</li>
          <img title={user.displayName} style = {{width:50, height:50}} src={user.photoURL} alt="" />
          <button onClick={handleLogOut} className="btn btn-outline-success text-white" type="submit">sign out</button>
        </>
        :<Link to ='/login'><button className="btn btn-outline-success text-white" type="submit">login</button></Link>
       }

       
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;