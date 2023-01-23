import React, { useState } from 'react';
import './style.css';

const Aside = ({Aside}) => {
    return ( <div 
        className={Aside?"sidebar sidebar--open":
    "sidebar"}>
    
        <li>Home</li>
        <li>My Maps</li>
        <li>My Creators</li>
       <a href="/teacher"> <li >Become Creator</li></a>
        {/* <li>About Us</li> */}
       
    </div> );
}
 
export default Aside;