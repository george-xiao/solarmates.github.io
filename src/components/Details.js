import { Container, Row, Col, Carousel } from "react-bootstrap";
import 'animate.css';
import 'react-multi-carousel/lib/styles.css';

export const Details = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="contact" id="details">
      <Container>
        <Row className="align-items-center">
          <h2>The Details</h2>
          <Carousel>
            <Carousel.Item>
              <ul class="bullet-list constraints-font">
                <li>Protect solar panels in a solar farm from dust/debris that can accumulate and block the solar cells from receiving the sun's energy</li>
              </ul>
              <Carousel.Caption class="carousel-caption">
                <h3>What's the goal?</h3>
                <p>Protect solar panels in a solar farm from dust/debris that can accumulate and block the solar cells from receiving the sun's energy</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ul class="bullet-list constraints-font">
                <li>Capability to function remote environments with little resources (i.e. deserts)</li>
                <li>Waterless cleaning solution (reduce water waste)</li>
              </ul>
              <Carousel.Caption class="carousel-caption">
                <h3>What are the constraints?</h3>
                <p>Constraints help define the requirements for a viable solution</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ul class="bullet-list criteria-font">
                <li>Area that a single cleaner can cover​</li>
                <li>Time spent by cleaning mechanism to remove all obstructions from its area​</li>
                <li>Robustness to minimize maintenance​</li>
                <li>Lifespan of the devices to further reduce operating costs​</li>
                <li>Ability to be controlled remotely by an application​, and scaled appropriately</li>
                <li>Indifference to solar panel tilt to enable effective cleaning in all positions​</li>
                <li>Initial and operational costs​</li>
                <li>Environmental consciousness</li>
              </ul>
              <Carousel.Caption class="carousel-caption">
                <h3>What are the criteria?</h3>
                <p>Criteria help define metrics to compare viable solutions in order to determine the best option</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ul class="bullet-list constraints-font">
                <li>Consume less than 100W of power during operation
                  {/* <ul>
                    <li>This helps us avoid needing certification for operation</li>
                  </ul> */}
                </li>
                <li>Solar panel sizing: 60-cell panels: 39″ x 66″ (3.25 feet x 5.5 feet)
                  {/* <ul>
                    <li>We plan to support 60-cell panels (more common) rather than 72 cell panels</li>
                  </ul> */}
                </li>
                <li>Cleaning material: microfiber cloth or non-abrasive material
                  {/* <ul>
                    <li>Abrasive materials can cause damage to the solar cells -- not good!</li>
                  </ul> */}
                ​</li>
              </ul>
              <Carousel.Caption class="carousel-caption">
                <h3>What are some problem specifications?</h3>
                <p>Problem specifications are specific characteristics of the problem you are working with</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  )
}
