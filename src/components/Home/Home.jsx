import React from 'react';
import Banner from '../Banner/Banner';
import ChefsInfo from '../ChefsInfo/ChefsInfo';
import Section from '../../MoreHomeSection/Section1/Section';
import Section2 from '../../MoreHomeSection/Section2/Section2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsInfo></ChefsInfo> 
            <Section></Section> 
            <Section2></Section2>
        </div>
    );
};

export default Home;