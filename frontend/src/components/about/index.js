import React,{Fragment,useState} from 'react'
import "./style.css";
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Mohannad from '../../assets/img/Mohannad.jpg'
import Farah from '../../assets/img/Farah.jpg'
import Hazem from '../../assets/img/Hazem.jpg'

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
        <NavBar />

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About Us</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Our Game</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Our Team</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>Company</h2>
      <p>This product is powered by STEAM center, and educational center dedicated to preparing students for 21st Century workplace careers by providing high quality educational opportunities in
        science, technology, engineering, art and mathematics (STEM) fields.
        STEAM is an educational approach to learning that uses Science, Technology, Engineering, the Arts and Mathematics as access points for 
        guiding student inquiry, dialogue, and critical thinking. Unlike the traditional way of teaching, in which science fields are taught in isolation,
         STEAM focuses on
        teaching Science, Technology, Engineering, the Arts and Mathematic in an integrated way which teaches students logic to
         creatively solve problems.
        At STEAM hub, we are passionate about creating immersive and engaging video games for players of all ages and skill levels. We strive to push the boundaries of what is possible in the gaming industry and constantly look for new and innovative ways to enhance the player's experience.</p>
       <h2>Our Community</h2>
       <p>We also believe in giving back to the community and use a portion of our profits to support various charitable organizations that promote 
        education and the arts. using this innovative educational platform, We are proud to offer a unique solution that helps teachers create engaging 
        games and stories for their students. By providing teachers with the tools they need to design interactive and multimedia-rich learning experiences, our platform helps to make education more engaging, and inclusive.</p>
        <p>powerd by @STEAM Center</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>We believe that</h2>
      <p> video games have the power to bring people together and create unforgettable experiences,
         and we are dedicated to delivering that kind of experience to our players. Thank you for choosing to play our
          games and we hope you enjoy them as much as we enjoyed creating them.</p>

          <h2>In addition</h2>
         <p>  to creating our own original games, we also work closely with other developers and publishers to bring their ideas to life. 
            We have a wide range of experience in developing games across multiple platforms including PC, consoles, and mobile devices.</p>

            <p>powerd by @STEAM Center</p>

   
    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div class="wrapper">
    <h1>Our Team</h1>
    <div class="our_team">
        <div class="team_member">
          <div class="member_img">
             <img src={Farah} alt="our_team" />
            <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Farah Horani</h3>
      
          <p>Co-Founder of STEAM Center, more than 13 years of experience in STEAM education</p>
        </div>
     
        <div class="team_member">
           <div class="member_img">
             <img src={Hazem} alt="our_team" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Hazem Hamdan</h3>
          
          <p>Founder of STEAM Center, and more than 16 years in STEAM Education</p>
      </div>
        <div class="team_member">
           <div class="member_img">
             <img src={Mohannad} alt="our_team" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Mohannad Shatat</h3>
          <p>Robotics and STEAM coach for more than 6 years of experince , global robotics achievements</p>
      </div>  
    </div>
</div>
    </div>
        
    </div>

    </div>

    </div>

    </section>
    <Footer />
    
    </Fragment>
  )
}

export default About