import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Container className='d-flex justify-content-around mt-3'>
            <div>
                <h1 className='mt-4 mb-3'>Lets Start <br /> <span className='text-warning'>Cooking With</span> <br /> Popular Recipes</h1>
                <p>want to learn cook but confused how to start? <br /> <span className='text-warning'>No need to worry again!</span> </p>
                <Button variant="success">Get Started</Button>
            </div>

            <div>
                <img className='banner-img img-fluid mb-4 mt-3 rounded' src="https://img.freepik.com/free-photo/fried-meat-with-potato-tomatoes_140725-4017.jpg?w=360&t=st=1683088658~exp=1683089258~hmac=c94c9a8cc3ba10832f03cca9072937a5430ffb4cabc6c758283f0bd5287fdd91" alt="" />
            </div>
        </Container>
    );
};

export default Banner;