import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import mainModel from "../assets/img/placeholder.png";

export const Project = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>The Project</h2>
                        <p>Our innovative, smart and robust solution for solar panel cleaning invovles a single axis cleaning mechanism which travels along the length of solar
                          panels. Mounted brushes effectively clean dust and debris off of the solar panel, improving solar panel efficiency. Our technology leverages
                          bidirectional cleaning, a robust frame, and a desktop application allows clients to remotely manage and clean their solar panels.</p>
                        <img src={mainModel} class="mainModelPic"></img>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
