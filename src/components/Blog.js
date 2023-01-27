import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';

import 'react-multi-carousel/lib/styles.css';


export const Blog = () => {
  return (
    <section className="project" id="blog">
      <Container>
        <Row>
          <Col size={50}>
            <div>
                <h2>Build Blog</h2>
                <h4>January 27, 2023</h4>
                <h6>Gearing up to GO!
Hi all, Solar Mates here. Welcome to our journey of the construction of the first ever
Solar Mate cleaner! For those who don't know, Solar Mates is a project to bring solutions
to a years old issue in the solar industry, dust.
Our parts have been ordered and we patiently await them to be able to begin the 
contruction of our device. Some preliminary parts, mainly our ultrasonic sensors,
have already arrived and are allowing us to begin to set up the software elements in the 
device. This means we are able to connect these ultrasonic sensors to the microcontrolling 
device to test their ability to detect objects that are near and relay that information to 
the microcontroller. With this we are able to program what different readings from these 
sensors will mean for the rest of the working device.</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
