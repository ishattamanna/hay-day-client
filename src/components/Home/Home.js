import React from 'react';
import Card from './Card/Card';
import Carosul from './Carosul/Carosul';
import IntroBanner from './IntroBanner/IntroBanner';
import Services from './Services/Services';
import { useTitle } from 'react-use';


const Home = () => {
    useTitle(`${document.title}-home`)
    return (

        <div>
            <IntroBanner></IntroBanner>
            <Carosul></Carosul>
            <Card></Card>
            <Services></Services>
        </div>

    );
};

export default Home;