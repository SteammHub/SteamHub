import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes,Link ,Outlet} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LoginPage from './components/Login';
import Landing from './components/landingPage';
import Signup from './Signup';
import Home from './components/Home';
import PrivateRoute from './utils/privateRoute';
import Guide from './components/Guide';
import Teacher from './components/Teacher';
import LeaderBoard from './components/leaderBoard';
import About from './components/about';



function App() {
const test = localStorage.getItem("authTokens")



  return (
    <div className="App">
     {/* <Home /> */}
      {/* <Router>
     <AuthProvider>
      <Routes>
      
          <Route exact path='/login' element={ <LoginPage /> }></Route>  
      </Routes>
      </AuthProvider>
      
    </Router>  */}
    {/* <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      </Routes>
    
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage /> } />
        <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home /> } />
        </Route>
        
      </Routes>
      </AuthProvider>
      <Outlet />
      </Router> */}

 <Router>
 <AuthProvider>
 <Routes>

  <Route path='/' exact element={<Landing />} />
  <Route path='/login'  element={<LoginPage />} />
  <Route path='/About'  element={<About />} />
 
  <Route path='/Signup' element={<Signup />} />
  <Route element={<PrivateRoute />}>
  <Route path='/Home' exact element={<Home />} />
  <Route path='/guide' exact element={<Guide />} />
  <Route path='/teacher' exact element={<Teacher />} />
  <Route path='/leaderboard' exact element={<LeaderBoard />} />
  
 
  </Route>
 
 </Routes>
 </AuthProvider>
 </Router>


  
        
 
    </div>
  );
}

export default App;
