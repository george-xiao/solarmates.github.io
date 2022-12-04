import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

import keshav from "../assets/img/keshav.jpeg";
import noah from "../assets/img/noah.jpeg";
import parizeh from "../assets/img/parizeh_temp.jpg";
import george from "../assets/img/george.jpg";
import 'react-multi-carousel/lib/styles.css';


export const Team = () => {
  return (
    <section className="project" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>The Team</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Keshav</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Noah</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Parizeh</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">George</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <img src={keshav} alt="Keshav Pandey" className="teamImages center"/>
                    <p>Keshav is a 4th year Mechatronics Engineering student that's passionate about solving difficult problems and helping society overcome issues that are prominent today. He's very excited to work on a solution for solar panels that helps tackle the significant challenge presented by global climate change.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <img src={noah} alt="Noah Gillespie-Friesen" className="teamImages center"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <img src={parizeh} alt="Parizeh Asaf Rahman" className="teamImages center"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img src={george} alt="George Xiao" className="teamImages center"/>
                    <p>George is a 4th year Mechatronics student who enjoys learning about climate science and all things programming. When not programming, he enjoys grabbing food with friends and playing volleyball (poorly).</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
