import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarTeacher } from './NavBarTeacher';
import {Footer} from '../Footer'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Profile from './profile';
import MapCard from './mapCard';
import Aside from './aside';



const Teacher = () => {
    return ( 
    <div >
      <NavBarTeacher  />
     
      <br />
      <br />
      <br />
      <div  >
      <Aside />
        <Profile />
        
      </div>
      <div>
      <MapCard />
      </div>
      <div>
      <Footer />
      </div>
 
    </div> 
    );
}
 
export default Teacher;