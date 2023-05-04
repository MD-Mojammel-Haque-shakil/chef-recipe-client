import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <div className='container'>
       <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand text-white" href="#">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Disabled</a>
        </li>
      </ul>
      <div className="d-flex align-items-center" role="search">
      <Link to ='/login'><button className="btn btn-outline-success text-white" type="submit">login</button></Link>
       
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;