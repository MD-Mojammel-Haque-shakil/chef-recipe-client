import React from 'react';
import './Section2.css'
const Section2 = () => {
    return (
        <div className='container mb-5'>
            <h3 className='text-center text-decoration-underline text-success mb-3'>Our Health Promises</h3>
            <div className='main-container'>
            <div className='div-1'>
               <h4>Promise#1: <span className='fs-5 text-success'>vegetable-fed chickens.</span></h4>
               <p>At ..... Kitchen, chickens are raised on feed that do not contain any MBM or Meat and Bone Meal (also simply known as 'slaughterhouse waste'). That is why our chickens do not run the risk of containing any harmful bacteria.</p>
            </div>
            <div className='div-1'>
                <h4>Promise #2: <span className='fs-5 text-success'>No Harmful Preservatives.</span></h4>
                <p>Preservatives used in food products can be severely harmful for human health. Kazi Farms Kitchen products do not contain any harmful preservatives.</p>
            </div>
             <div className='div-1'>
                <h4>Promise #3: <span className='fs-5 text-success'>No Antibiotic Residue.</span></h4>
                <p>Chickens on farms are sometimes given antibiotics to treat bacterial infections. When people eat farmed chickens or products made from those chickens, they unknowingly consume "residual" antibiotics, which may still have been in the chicken's body at the time of slaughter. </p>
            </div>
            <div className='div-1'>
                <h4>Promise #4: <span className='fs-5 text-success'> No Tasting Salt.</span> </h4>
                Food additives like tasting salt (also known as MSG or monosodium glutamate) can cause headache and high blood pressure. Kazi Farms Kitchen products are completely free of tasting salt.
         </div>
            </div>
        </div>
    );
};

export default Section2;