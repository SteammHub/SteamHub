import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import money from '../assets/img/money.jpg';
import main from '../assets/img/maincraft.jpg';
import mario from '../assets/img/mario.jpg';
import jars from '../assets/img/jars.jpg';
import Sushi from '../assets/img/sushi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useRef,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import {DefaultPlayer as Video2} from 'react-html5video';
import 'react-html5video/dist/styles.css';

import stars from '../assets/img/stars.mp4'
import welcome from '../assets/img/welcomescreen2.png'


export const Projects = () => {
  
  const userRef=useRef();
  const errRef=useRef();

  const [show, setShow] = useState(false);
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");;



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //  const  handleLogin = (
  //   async () => {
  //     try {
  //       const token = await axios.post(`http://192.168.0.187:8000/api/test`, {
  //         user_name: username,
  //         password: password,
  //       });
  //       console.log(token);
  //       const userToken = token.data.message.user.token;
  
  //       localStorage.setItem("token",userToken)
  //       return token.data.message.user;
  //     } catch (error) {
  //       console.log(error.response.data.message);
  //       return (error.response.data.message);
  //     }
  //   }
  // );

  

  // const registerUser =
 
  // async () => {
  //   try {
  //     const token = await axios.post(`${url}/auth/registerUser`, {
  //       username: values.username,
  //       email: values.email,
  //       password: values.password,
  //     });
  //     console.log('==============',token);
  //     const userToken = token.data.message.user.token;

  //     return userToken;
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //     return (error.response.data.message);
  //   }
  // }




  const projects = [
    // {
    //   title: "Robot Name",
    //   description: "",
    //   imgUrl: "https://img.freepik.com/premium-vector/cute-robot-isolated-blue-background_129422-196.jpg?w=2000",
    // },
    // {
    //   title: "scientist Name",
    //   description: "",
    //   imgUrl:"https://i.pinimg.com/originals/9d/8f/d3/9d8fd3046458064ad047e53565061135.jpg",
    // },
    // {
    //   title: "Main Character Name",
    //   description: "",
    //   imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuSPa3_f6A5UTe0olOlLStK2nppI2D8iE9_eJL9fLsNdBYcwoT0fRVsosT-Q1XMRI3q4&usqp=CAU",
    // },
    // {
    //   title: "Super Mario",
    //   description: "",
    //   imgUrl: mario,
    // },
    // {
    //   title: "Hanging Jars",
    //   description: "",
    //   imgUrl: jars,
    // },
    // {
    //   title: "Sushi Kitchen",
    //   description: "",
    //   imgUrl: Sushi,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2  onClick={handleShow}>Let's get know how you'll be playing </h2>
                <p> </p>
                <Video2 poster={welcome} >
               <source src={stars} type="video/webm" className="video-cont"  />
                </Video2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                
                               
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    
      <Modal show={show} onHide={handleClose} style={{marginTop:"20rem"}}>
        <Modal.Header closeButton style={{background:"#121212"}}>
          <Modal.Title style={{color:"white"}}>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"black",backgroundColor:"#9B3D87"}}>
          <div>
          <input type="text" placeholder="email" 
                 id="username"
                 ref={userRef}
                 onChange={(e)=>setUsername(e.target.value)}
                 value={username}
                 required 
          style={{borderRadius:"45px",width:"23rem",height:"2.5rem",marginBottom:"2rem"}} />
          </div>
          <div>
          <input type="password" placeholder="password" 
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  required 
          style={{borderRadius:"45px",width:"23rem",height:"2.5rem",marginBottom:"2rem"}} />
          </div>
        </Modal.Body>
        <Modal.Footer style={{background:"#9B3D87"}} >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" >
            GO
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
