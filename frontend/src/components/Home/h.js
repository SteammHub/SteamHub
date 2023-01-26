import React ,{ useState } from 'react';
import Aside from './aside';
import NavBarAfter from './navbarafter';
import { NavBarhome } from './NavBarhome';
import Materials from './materials';
import Prpjectshome from './projectshome';
import { Footer } from '../Footer';



const H = () => {
    const [filterTextValue,setFilterTextValue]=useState('');

    function onFilitredValueSelected(filterValue){
        setFilterTextValue(filterValue)
  

    }
    return ( <div>
        <NavBarhome/>
        <Aside />
        <Materials filterValueSelected={onFilitredValueSelected} filterValue={filterTextValue} />
        <br />
        <br />
        <hr />
        <Prpjectshome />
        <Footer />
    </div> );
}
 
export default H;