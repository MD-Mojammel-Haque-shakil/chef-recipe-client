
import React from 'react';
import './Section.css'
const Section = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h3 className='text-center mt-4 mb-4'>Our top <span className='text-warning'> SELLING</span> items</h3>
             <div className='d-flex justify-content-around'>
             <div className='single-div'>
               <img src="https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=740&t=st=1683174435~exp=1683175035~hmac=3ac2550a5f7c3aceaeff17dc487d2ed5710170a9d04fd4a4a08d76a3c8055517" alt="" />
               <h4>chicken fry</h4>
               <p className='fs-4'>price: <span className='text-warning'>$</span> 6.00</p>
               <button className='w-50 mx-auto ms-5 btn btn-primary' >Buy Now</button>
            </div>
            <div className='single-div'>
               <img src="https://img.freepik.com/free-photo/fried-chicken-wings-wooden-table_1205-7734.jpg?w=740&t=st=1683174803~exp=1683175403~hmac=983fe4908c2b00a7fe5cf5eb529afe92e4a0b14282ca26e7d9c26a7eef8f7e80" alt="" />
               <h3>chicken wings</h3>
               <p className='fs-4'>price: <span className='text-warning'>$</span> 6.00</p>
               <button className='w-50 mx-auto ms-5 btn btn-primary' >Buy Now</button>
            </div>
            <div className='single-div'>
               <img src="https://img.freepik.com/free-photo/top-view-vegetarian-pizza-with-eggplant-bell-pepper-red-onion-tomato-mushroom_141793-2454.jpg?w=740&t=st=1683175106~exp=1683175706~hmac=37405728d0e09c5d14c63e46cbcc6f08f0b7cc391f2396e9c235735e858a0455" alt="" />
               <h3>chicken pizza</h3>
               <p className='fs-4'>price: <span className='text-warning'>$</span> 6.00</p>
               <button className='w-50 mx-auto ms-5 btn btn-primary' >Buy Now</button>
            </div>
            <div className='single-div'>
               <img src="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=740&t=st=1683175269~exp=1683175869~hmac=0298839bd50527e3f07cf12a38fe678e860bb91a683d3523a3b54b3db9b42ce8" alt="" />
               <h3>vegetable pizza</h3>
               <p className='fs-4'>price: <span className='text-warning'>$</span> 6.00</p>
               <button className='w-50 mx-auto ms-5 btn btn-primary' >Buy Now</button>
            </div>
             </div>
        </div>
    );
};

export default Section;