import React,{useState, useEffect, useContext} from 'react';
import { NavBar } from '../NavBar';
import Aside from './aside';
import { BrowserRouter as Router, Routes,Switch, Route,Link } from "react-router-dom";
import './style.css';
import Toolbar from './toolbar';
import Backdrop from './backdrop';
import Creator from './creators';
import H from './h';
import NavBarAfter from './navbarafter';
import AuthContext from '../../context/AuthContext';


const Home = () => {
  let [notes, setNotes] = useState([])
  const[sidebar,setSidebar]=useState(false);
  //  let {authTokens, logoutUser} = useContext(AuthContext)
  

  const toggleSidebar = () =>{
    setSidebar((prevState)=>!prevState)
  }
//   let getNotes = async() =>{
//     let response = await fetch('http://44.210.129.166:8000/game/join_class/', {
//         method:'GET',
//         headers:{
//             'Content-Type':'application/json',
//             'Authorization':'Bearer ' + String(authTokens.access)
//         }
//     })
//     let data = await response.json()

//     if(response.status === 200){
//         setNotes(data)
//     }else if(response.statusText === 'Unauthorized'){
//         logoutUser()
//     }
    
// }
  
    return ( <div>
        {/* <NavBar />
        <Toolbar opensidebar={toggleSidebar} />
        <Backdrop  Aside={Aside} closeSidebar={toggleSidebar}/>
        <Aside sidebar={sidebar} />
        <Creator />
        <H /> */}
        {/* <Router>
        <NavBarAfter />
        <Routes>
          <Route path='/' exact />
        </Routes>
        
        </Router> */}
        <H />



      </div>)}
export default Home;