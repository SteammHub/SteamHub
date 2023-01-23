import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const MapCard = () => {
  
  // handleBtn=(e)={
     //   if(e.target.value==="problem"){

  //   }


  // }
    return ( 
      <Container style={{marginBottom:"4rem"}}>
        
      <br />
      <br />
      <br />
      <br />
      <br />
    
    <Row>
      <Col>
      <Card style={{ width: '18rem' }} className="map-card" >
    <Card.Img variant="top" src="https://steamsplay.com/wp-content/uploads/2022/03/The-Planet-Crafter-Full-Map-Guide-World-Map-Spoiler-Free-05A59B6-steamsplay-com.jpg" />
    <Card.Body>
      <Card.Title >Map1 </Card.Title>
      <Card.Text >
        Math
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href="/LeaderBoard" style={{color:"white"}}>view</Card.Link>
      <Card.Link href="#" style={{color:"white"}}>edit</Card.Link>
    </Card.Body>
  </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }} className="map-card">
    <Card.Img variant="top" src="https://steamsplay.com/wp-content/uploads/2022/03/The-Planet-Crafter-Full-Map-Guide-World-Map-Spoiler-Free-05A59B6-steamsplay-com.jpg" />
    <Card.Body>
      <Card.Title >Map1 </Card.Title>
      <Card.Text >
       Science
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href="#" >view</Card.Link>
      <Card.Link href="#" >edit</Card.Link>
    </Card.Body>
  </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }} className="map-card">
    <Card.Img variant="top" src="https://steamsplay.com/wp-content/uploads/2022/03/The-Planet-Crafter-Full-Map-Guide-World-Map-Spoiler-Free-05A59B6-steamsplay-com.jpg" />
    <Card.Body>
      <Card.Title >Map1 </Card.Title>
      <Card.Text >
       Technology
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href="#" >view</Card.Link>
      <Card.Link href="#" >edit</Card.Link>
    </Card.Body>
  </Card>
      </Col>
    </Row>
    <Row style={{marginTop:"4rem"}}>
      
      <Col>
      <Card style={{ width: '18rem'}} className="map-card">
    <Card.Img variant="top" src="https://steamsplay.com/wp-content/uploads/2022/03/The-Planet-Crafter-Full-Map-Guide-World-Map-Spoiler-Free-05A59B6-steamsplay-com.jpg" />
    <Card.Body>
      <Card.Title >Map1 </Card.Title>
      <Card.Text >
       Science
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href="#" style={{color:"white"}}>view</Card.Link>
      <Card.Link href="#" style={{color:"white"}}>edit</Card.Link>
    </Card.Body>
  </Card>
      </Col>
   
      <Col>
      <Card style={{ width: '18rem' }} className="map-card">
    <Card.Img variant="top" src="https://steamsplay.com/wp-content/uploads/2022/03/The-Planet-Crafter-Full-Map-Guide-World-Map-Spoiler-Free-05A59B6-steamsplay-com.jpg" />
    <Card.Body>
      <Card.Title >Map1 </Card.Title>
      <Card.Text >
      Math
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href="#" style={{color:"white"}}>view</Card.Link>
      <Card.Link href="#" style={{color:"white"}}>edit</Card.Link>
    </Card.Body>
  </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }} className="map-card">
    <Card.Img variant="top" src="https://steamsplay.com/wp-content/uploads/2022/03/The-Planet-Crafter-Full-Map-Guide-World-Map-Spoiler-Free-05A59B6-steamsplay-com.jpg" />
    <Card.Body>
      <Card.Title >Map1 </Card.Title>
      <Card.Text >
        Math
      </Card.Text>
    </Card.Body>
    {/* <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup> */}
    <Card.Body>
      <Card.Link href="#" style={{color:"white"}}>view</Card.Link>
      <Card.Link href="#" style={{color:"white"}}>edit</Card.Link>
    </Card.Body>
  </Card>
      </Col>
    </Row>
  </Container>
     );
}
 
export default MapCard;