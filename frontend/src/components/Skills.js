import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Learning from '../assets/img/Learningpng.png';
import friends from '../assets/img/friends.png';
import Skills2 from '../assets/img/skills.png';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <br />
                  <br />
                    <div className="skill-bx wow zoomIn">
                        <h2>Tell Your Story with SteamHub </h2>
                        <p>STEAM Hub opens for you the door to learn about STEAM, 
                          {/* <br />challenge your friends, and to build great skills. */}
                          </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Learning} alt="Image" />
                                <h5>Learn STEAM</h5>
                            </div>
                            <div className="item">
                                <img src={friends} alt="Image" />
                                <h5>Challenge Friends</h5>
                            </div>
                            <div className="item">
                               <img src={Skills2} alt="Image" />
                                <h5>Build Skills</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
