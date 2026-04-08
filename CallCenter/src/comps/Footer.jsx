import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "/src/img/BCI/lg111.jpg";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/nav-icon2.svg";
import navIcon3 from "../img/nav-icon3.svg";

export function Footer() {
  return (
    <section className="footer">
    <footer>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/company/100994705/admin/feed/posts/?feedType=following"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="#"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank" href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col> 
        </Row>
      </Container>
    </footer>
    </section>
  )
}