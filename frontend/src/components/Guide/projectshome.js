import React , { useState,useRef,useEffect }from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import money from '../../assets/img/money.jpg';
import main from '../../assets/img/maincraft.jpg';
import mario from '../../assets/img/mario.jpg';
import jars from '../../assets/img/jars.jpg';
import Sushi from '../../assets/img/sushi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import 'react-html5video/dist/styles.css';
import stars from '../../assets/img/stars.mp4'
import {Footer} from '../Footer';




const Prpjectshome = () => {
    const projects = [
        {
          title: "Play it now",
          description: "",
          imgUrl: "https://cdna.artstation.com/p/assets/images/images/002/087/020/large/saleh-ahmed-grnislandmap-allb.jpg?1457038776",
        },
        {
          title: "Play it now",
          description: "",
          imgUrl:"https://thumbs.dreamstime.com/b/set-level-maps-assets-gui-map-screen-forest-winter-summer-forest-game-elements-game-map-casual-game-high-quality-188683134.jpg",
        },
        {
          title: "Play it now",
          description: "",
          imgUrl: "https://cdna.artstation.com/p/assets/images/images/002/087/020/large/saleh-ahmed-grnislandmap-allb.jpg?1457038776",
        },
       
      
       
      ];

      const [maps, setMaps] = useState([])
      useEffect(() => {
        const fetchData = async () => {
          const result = await fetch('http://3.87.56.10:8000/game/map_list/')
          const jsonResult = await result.json()
          setMaps(jsonResult);
          
        }
    
        fetchData()
      }, [])
      console.log(maps)

    
    return (   <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            
              <p> Levels</p>
          
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
            
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        maps.map((project,index) => {
                          return (
                            <ProjectCard 
                              // key={index}
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

    {/* <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            
              <p> My Levels</p>
          
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
             
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
    </Container> */}
 
   <Footer />
  
  </section> );
}
 
export default Prpjectshome;