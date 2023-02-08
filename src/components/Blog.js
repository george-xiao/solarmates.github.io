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
                <h4>January 27<sup>th</sup>, 2023</h4>
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
        <br></br>
        <Row>
          <Col size={50}>
            <div>
                <h4>February 3<sup>rd</sup>, 2023</h4>
                <h6>Parts have LANDED! Hi all, welcome to Week 2 of our build blog. This week the majority of the parts needed to build our prototype have arrived. This includes the aluminum square tubing, connectors, bearings, nuts/bolts, motors, and other electronic components. 

The aluminum square tubing and connectors are being used to make up the box framework of the device. So, our first step this week has been to cut the aluminum square tubing into the sizes we want, and start drilling holes in them for mounting to other pieces. On the electronics side, now that we have received the motors we have started looking into interfacing with them from our microcontroller.</h6>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col size={50}>
            <div>
                <h4>February 10<sup>th</sup>, 2023</h4>
                <h6>Development is UNDERWAY! Welcome to Week 3 of our build blog!
                  This week, we have finished manufacturing the individual pieces of our device's framework.
                  To do this, we finished drilling the remaining holes needed in the aluminum square tubing and have ensured the dimensions are all accurate.
                  The next step we have started on is making brackets for mounting our electronic components to the framework. Once this is done, we will be ready for assembly.
                  On the electronics side, we have finished soldering wires to all of our electrical components so that they can be connected to our microcontroller. 
                  Now, we are working on writing software to interface with our sensors, and conduct speed control with our motors.
                  </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
