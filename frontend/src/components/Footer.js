import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2>STEAMHUB</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/company/steam-center/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/steamcenterjo"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/steam_center_jo/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>SteamHub is available for free thanks to support from our donors. We are grateful to our Founding Partners <br /> </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
