import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import './style.css'
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import {Footer } from '../Footer'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return ( <div>
          <NavBar />
         <div className='background'>
         <div className="form">
            <h3 className='form-h3' >Sign In</h3>
            <form onSubmit={loginUser} className="input-container">
                <input type="text" name="username" placeholder="Enter email" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit" /> 
                <p>
                        Need an Account?<br />
                        <span className="line" >
                            {/*put router link here*/}
                            <a href="/Signup">Sign Up</a>
                        </span>
                    </p>
            </form>
        </div>
        
        </div>
       
        
        <Footer />
        </div>
    )
};

export default LoginPage;
