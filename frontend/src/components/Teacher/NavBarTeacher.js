import { useState, useEffect,useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import AuthContext from "../../context/AuthContext";

export const NavBarTeacher = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  let [class_room_code, setClass_room_code] = useState("");
  let {authTokens, logoutUser} = useContext(AuthContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const submitCode = async () => {
    const result = await fetch('http://3.87.56.10:8000/game/join_class/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'JWT ' + String(authTokens.access)
      },
     
      body: JSON.stringify({class_room_code})
     
   
    })
    // console.log(JSON.String({class_room_code}));

    // const resultInJson = await result.json()
    // setClass_room_code(prev => [...prev, resultInJson])
  }
    


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
  
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/teacher">
            <h2 style={{color:"white"}}>STEAMHUB</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
        
            <Nav className="ms-auto">
          
            </Nav>
            
            <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a> */}
              </div>
              <HashLink to='/guide'>
                <button className="vvd" ><span>Guide</span></button>
              </HashLink>
              <HashLink to='#connect'>
                <button className="vvd" onClick={handleShow}><span>Create class</span></button>
              </HashLink>
            </span>
            <Modal show={show} onHide={handleClose} style={{marginTop:"14%"}}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>Create class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <label style={{color:"black"}}>Enter your name</label>
          <input type="text" name="studentName" /> */}
          <label style={{color:"black"}}>Enter class name</label>
          <input type="text" name="code" onChange={(e)=>setClass_room_code(e.target.value)} />
          <label style={{color:"black"}}>upload picture</label>
          <input type="file" name="code" onChange={(e)=>setClass_room_code(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={submitCode}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}
