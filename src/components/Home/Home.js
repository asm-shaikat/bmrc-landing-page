import React from 'react';
import Navbar from '../navbar/Navbar';
import Carousel from './carousel/Carousel';
import Header from './header/Header';
import Cources from '../cources/Cources';
import Activities from '../activities/Activities';
import AdvisorMessge from '../advisorMessege/AdvisorMessege';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Activities></Activities>
            <Carousel></Carousel>
            <Cources></Cources>
            <AdvisorMessge></AdvisorMessge>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;