import React from 'react';
import { NavBar } from '../NavBar';
import { Banner } from "../Banner";
import { Skills } from "../Skills";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { Footer } from "../Footer";

const Landing = () => {
    return ( <div>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

    </div> );
}
 
export default Landing;