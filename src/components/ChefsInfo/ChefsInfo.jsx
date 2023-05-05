import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Chefsinfo.css'
import {Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsInfo = () => {
    const [chefs, setChefs] = useState([]);
  
  

    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-liard.vercel.app/chef')
        .then(res=> res.json())
        .then(data=> setChefs(data))
        .catch(error=> console.log(error))
    },[])
    return (
        
      <div className='mt-4 mb-4'>
        <h3 className='text-center mb-3'>Here some Details of <span className='text-warning'>OUR TOP</span> chef</h3>
                <Container className='chefs-container'>
            {
                chefs.map(chef=> <div className='ms-4' key={chef.id}>
    <Card style={{ width: '17rem' }}>
      <Card.Img className='w-50 mx-auto mt-2' variant="top" src={chef.Chef_Picture} />
      <Card.Body >
        <Card.Title className='text-center'>Name: {chef.Chef_Name}</Card.Title>
       <div className='d-flex justify-content-around'>
       <p>Experience: {chef.Years_of_experience} years</p>
       <p>Likes: {chef.Likes}</p>
       </div>
        {/* <Link    to = {`/chefs/${id}`}><Button className='w-50 mx-auto ms-5' variant="primary">View Recipes</Button></Link> */}
        <Link to = {`/chef/${chef.id}`}> <Button className='w-50 mx-auto ms-5' variant="primary">View Recipes</Button></Link>
     
      </Card.Body>
    </Card>
                </div>)
            }
        </Container>
      </div>
    );
};

export default ChefsInfo;