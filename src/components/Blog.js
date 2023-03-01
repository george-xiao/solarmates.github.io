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
        <br></br>
        <Row>
          <Col size={50}>
            <div>
                <h4>February 17<sup>th</sup>, 2023</h4>
                <h6>Error 404! Week 4 has brought the inevitable speed bumps that come with moving from design to implementation. 
                  Our original microcontroller has seen some heavy use since 2018 and it finally quit on us last week. 
                  This means we've had to pivot to an STM32 microcontroller. This also means that we have had to order a new camera that will be compatible with 
                  the new microcontroller. Additionally, some of the mechanical parts that arrived needed to be slightly altered to meet specifications. 
                  This includes using a lathe to very slightly decrease the diameter of our cleaning rod so that it will fit in our purchased bearings. 
                  On the electrical side of things, motor testing and tuning has been progressing well. 
                  They've been running up to speed when connected to our power source and now we are working on integrating them with the mechanical system!
                  </h6>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col size={50}>
            <div>
                <h4>February 24<sup>th</sup>, 2023</h4>
                <h6> Reading week is HERE! This week gives the team some much needed rest as midterms approach, but that doesn't mean progress slows down.
                  Amidst midterm preparation, some final parts were added to the mechanical design to accommodate for the camera, and to address several 
                  other hiccups that were encountered previously. Mechanical design and construction should be complete within the very near future!

                  On the electrical and software side, the appropriate motors are being worked with to enable intergration into the mechanical system, and the code
                  for the movement of the device along the solar panels as well as the rotation of the shaft is being written. The camera — as previously mentioned —
                  was tested in order to determine an optimal placement on the device, and code is being written to enable the gathering and processing of still images.
                  These will be used to calibrate the speed of our device, and a simple image processing algorithm is in the works.
                  </h6>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col size={50}>
            <div>
                <h4>March 3<sup>rd</sup>, 2023</h4>
                <h6> The end is NEAR! Preparations for the demo are upon us, and progress is going well. 

                  On the mechanical front, the system is complete! The construction and assembly of all the parts is finished, and now the goal is to integrate the
                  electronics and software. Mounts for the camera and ultrasonic sensors have been added, and an issue with the wheel shaft assembly was resolved
                  through some of Keshav and Noah's mechanical ingenuity. Cloths are yet to be added, and are the only remaining part of the assembly.

                  On the software and electrical front, motors have been fully tested and are beginning to be integrated into the mechanical assembly. Once fully built,
                  an algorithm to control the motors written in C++ will be tested. The image processing using the on-board camera is in progress, and some memory issues
                  may arise depending on the resolution we plan to use. 
                  </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
