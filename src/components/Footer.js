import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon2 from "../assets/img/git.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
           <h2>Rajesh S</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rajesh-s-539876155"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/rajesh-ss"><img src={navIcon2} alt="Icon" /></a>
            
            </div>
            <p>Contact information</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
