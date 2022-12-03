import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

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
        </Row>
      </Container>
    </section>
  )
}
