import React, { useState } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import './style.css';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Aside = ({props}) => {
  const[showtab, setShowtab]= useState(1); 



    return ( <div>
    <div
        className={Aside?"sidebar sidebar--open ":"sidebar"}>
        <div>
        <li value="problem" > problem solving </li>
        <li value="Math" > Math </li>
        <li value="Science"> Science </li>
        <li value="tech" > Technology </li>
        </div>
        </div>
     
    </div> );
}
 
export default Aside;