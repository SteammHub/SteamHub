import React from 'react';
import Aside from './aside';
import NavBarAfter from './navbarafter';
import { NavBarhome } from './NavBarhome';
import Materials from './materials';
import Prpjectshome from './projectshome';
import { Footer } from '../Footer';


const H = () => {
    return ( <div>
        <NavBarhome/>
        <Aside />
        <Materials />
        <br />
        <br />
        <hr />
        <Prpjectshome />
        <Footer />
    </div> );
}
 
export default H;