import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/mail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <div className="social-icon">
              <a href="mailto:g5xiao@uwaterloo.ca"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Solar Mates 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
