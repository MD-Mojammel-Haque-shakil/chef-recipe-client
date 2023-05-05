import React from 'react';
import './Error.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Error = () => {
    return (
       <>
       <Header></Header>
        <div className='error'>
           <img className='errorImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk74G6dqh9xBo1D77JfeN-UlzUUR9V9SgQkQ&usqp=CAU" alt="" />
        </div>
        <Footer></Footer>
       </>
    );
};

export default Error;