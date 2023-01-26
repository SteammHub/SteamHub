import React, {useState,useEffect,useContext}from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import './style.css';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import AuthContext from "../../context/AuthContext";
import axios from 'axios';


const Materials = (props) => {
  const[showtab, setShowtab]= useState(1); 
  const[material,setMetrial]=useState([]);
  let {authTokens, logoutUser} = useContext(AuthContext)


  const handletab = (e)=>{
    setShowtab(e);
    }
    useEffect(() => {

    axios.get('http://3.87.56.10:8000/game/get_my_class/',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'JWT ' + String(authTokens.access)
      }
  })
  
  .then(response => {
      setMetrial(response.data);
      console.log(material)
      console.log(response.data)
  })
  .catch(error => {
      console.log(error);
  });
}, [])

let newMaterial=material.filter((product)=>{
  if(props.filterValue=='math'){
    return product.name=='math'
  }
})

function filterValueChanged(e){
  console.log(e.target.value);
  props.filterValueSelected(e.target.value)
}

    return (   
        <div className='material-container'>
         <Container>
         <div className="row">
        <div className="col-sm-12 bg-drak">      
              
       <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist" style={{marginLeft:"30%"}}>
         {material.map(item => (
        <div key={item.id}>
          <li class="nav-item" role="presentation" >
          <button  className= {showtab===item.id ? "nav-link active ques-btn": "nav-link ques-btn" } value={item.name} style={{backgroundColor:'white',color:"black",marginRight:"1rem"}}  onClick={()=>setShowtab(item.id)}>{item.name}</button>
          </li>
          <div class="tab-content text-dark" id="pills-tabContent" style={{backgroundColor:"#121212"}}>
          <div  className= { showtab===1 ? "tab-pane fade show active": "tab-pane fade"} style={{backgroundColor:"#121212"}} >
         
           
      </div>
 


</div>
          
        </div>

      ))}
    </ul>
    </div>
    </div>
      <Container />
     <div />
     <br />
     <br />
    
       <React.Fragment>
         <Container>
             
                     
      <div className="row">
        <div className="col-sm-12 bg-drak">      
              
  

      <div class="tab-content text-dark" id="pills-tabContent" style={{backgroundColor:"#121212"}}>

           {/* start tab 1*/} 
           <div  className= { showtab===1 ? "tab-pane fade show active": "tab-pane fade"} style={{backgroundColor:"#121212"}} >
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      
      <Grid item xs={6}>
        <Item>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.training.com.au/wp-content/uploads/science-stem-feature.png" />
      <Card.Body>
        <Card.Title>{material.id===1?'problem solving':material.id===2?'math':'Science'}</Card.Title>
        <Card.Text>
  
        </Card.Text>
   
      </Card.Body>
    </Card>
           </Item>

           <Item>
       
           </Item>
        
      </Grid>
      </Grid>
      </div>
          {/* close tab 1*/} 


         {/* start tab 2*/} 
         <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} style={{backgroundColor:"#121212"}} >
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      
      <Grid item xs={6}>
        <Item>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/16/1c/ca/161cca17bd8c423f845916ee0ec2b8f7.jpg" />
      <Card.Body>
        <Card.Title>Math-Mr.Ammar</Card.Title>
        <Card.Text>
  
        </Card.Text>
       
      </Card.Body>
    </Card>
           </Item>

           <Item>
       
           </Item>
        
      </Grid>
      </Grid>
      </div>
       
          {/* close tab 2*/} 


           {/* start tab 3*/} 
           <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} style={{backgroundColor:"#121212"}} >
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      
      <Grid item xs={6}>
        <Item>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSs9vLlkspWZvovYSm7XbzJhlWFUMMPw6bgLHizXxjcHYRuyeyX5apBhBbyhtLc1YhsY&usqp=CAU" />
      <Card.Body>
        <Card.Title>Math-Mr.Bilal</Card.Title>
        <Card.Text>
  
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
           </Item>

           <Item>
       
           </Item>
        
      </Grid>
      </Grid>
      </div>
          {/* close tab 3*/} 
           {/* start tab 4*/} 
           <div  className= { showtab===4 ? "tab-pane fade show active": "tab-pane fade"} style={{backgroundColor:"#121212"}} >
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      
      <Grid item xs={6}>
        <Item>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/employee-working-office-thinking-solutions-problem-solving-business-theme_1150-37473.jpg?w=2000" />
      <Card.Body>
        <Card.Title>problem solving-Mr.Ahmad</Card.Title>
        <Card.Text>
  
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
           </Item>

           <Item>
         
       
           </Item>
        
      </Grid>
      </Grid>
      </div>
          {/* close tab 3*/} 


     </div>

   </div>     
</div>
            </Container>

        </React.Fragment>
    </Container>

    </div> 
    
     );
}
 
export default Materials;