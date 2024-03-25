import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div id="about">
      <Container>
        <div className="abt">
          <h2>
            <b>About Our Company</b>
          </h2>
          <div className={`slide-down-container ${isVisible ? "visible" : ""}`}>
            <p className="slide-down-text" style={{ lineHeight: "27px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
              quisque egestas diam in arcu cursus. Maecenas accumsan lacus vel
              facilisis volutpat est velit egestas. Aliquam vestibulum morbi
              blandit cursus risus. Neque sodales ut etiam sit amet nisl purus.
              Lacus luctus accumsan tortor posuere. Suspendisse interdum
              consectetur libero id faucibus nisl tincidunt eget nullam. Sed
              viverra ipsum nunc aliquet bibendum enim facilisis. Diam vel quam
              elementum pulvinar etiam non quam lacus suspendisse. Egestas
              integer eget aliquet nibh. Feugiat in ante metus dictum at tempor
              commodo ullamcorper. Vulpu proin fermentum leo vel. Nisl
              condimentum id venenatis a condimentum vitae sapien gestas tellus
              rutrum tellus pellentesque eu. At urna condimentum mattis
              pellentesque tempor incididunt ut labore et dolore magna aliqua.
              Congue quisque egestas diam in arcu cursus. Maecenas accumsan
              lacus vel facilisis volutpat est velit egestas. Aliquam vestibulum
              morbi blandit cursus risus. Neque sodales ut etiam sit amet nisl
              purus. Lacus luctus accumsan tortor posuere. Diam vel quam
              elementum pulvinar etiam non quam lacus suspendisse. Egestas
              integer eget aliquet nibh. Sed viverra ipsum nunc aliquet bibendum
              enim facilisis. Diam vel quam elementum pulvinar etiam non quam
              lacus suspendisse. Egestas integer pharetra sit amet aliquam. Ut
              placerat id nibh tortor. Scelerisque felis imperdiet proin
              fermentum leo vel. Nisl condimentum id tate mi sit amet mauris
              commodo quis imperdiet massa tincidunt. Vitae proin sagittis nisl
              rhoncus.
            </p>
          </div>
        </div>

        <Container className="vary">
          <h2 className="mt-5 mb-4">
            <b>Varieties of Coffee</b>
          </h2>
          <MDBCarousel showIndicators showControls slide-out>
            <MDBCarouselItem itemId>
              <Row className="mb-4">
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es2.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Cappussino</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es4.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Americano</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es2.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Espresso</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es3.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Latte</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es4.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Cappussino</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es2.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Americano</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es4.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Espresso</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es3.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Latte</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es2.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Cappussino</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es3.jpg"
                    className="img-fluid w-100 h-75"
                    alt=""
                  />
                  <p>Americano</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es2.jpg"
                    className="img-fluid w-100 h-75 w-100 h-75"
                    alt=""
                  />
                  <p>Espresso</p>
                </div>
                <div className="col-md-3 col-4 mb-2">
                  <img
                    src="Images/es4.jpg"
                    className="img-fluid w-100 h-75 h-75 w-100"
                    alt=""
                  />
                  <p>Latte</p>
                </div>
              </Row>
            </MDBCarouselItem>
          </MDBCarousel>
          <div>
            <p style={{ fontSize: "14px" }}>
              <FontAwesomeIcon icon={faCheck} className="text-danger" />
              &nbsp; &nbsp; &nbsp; &nbsp;Cappussino pellentesque id nibh tortor.
              Scelerisque felis imperdiet proin fermentum leo vel. Nisl
              condimentum id venenatis a condimentum vitae sapien gestas tellus
              rutrum tellus pellentesque eu. At urna condim proin fermentum leo
              vel. Nisl condimentum id venenatis a condimentum vitae sapien
              gestas tellus rutrum tellus pellentesque eu. At urna condimentum
              mattis pellentesque id nibh tortor. Scelerisque felis imperdiet
              proin fermentum leo vel. Nisl condimentum id entum mattis
              pellentesque id nibh tortor.{" "}
            </p>
            <p style={{ fontSize: "14px" }}>
              <FontAwesomeIcon icon={faCheck} className="text-danger" />
              &nbsp; &nbsp; &nbsp; &nbsp;Americano pellentesque id nibh tortor.
              Scelerisque felis imperdiet proin fermentum leo vel. Nisl
              condimentum id venenatis a condimentum vitae sapien gestas tellus
              rutrum tellus pellentesque eu. At urna condim proin fermentum leo
              vel. Nisl condimentum id venenatis a condimentum vitae sapien
              gestas tellus rutrum tellus pellentesque eu. At urna condimentum
              mattis pellentesque id nibh tortor. Scelerisque felis imperdiet
              proin fermentum leo vel. Nisl condimentum id entum mattis
              pellentesque id nibh tortor.{" "}
            </p>
            <p style={{ fontSize: "14px" }}>
              <FontAwesomeIcon icon={faCheck} className="text-danger" />
              &nbsp; &nbsp; &nbsp; &nbsp;Espresso pellentesque id nibh tortor.
              Scelerisque felis imperdiet proin fermentum leo vel. Nisl
              condimentum id venenatis a condimentum vitae sapien gestas tellus
              rutrum tellus pellentesque eu. At urna condim proin fermentum leo
              vel. Nisl condimentum id venenatis a condimentum vitae sapien
              gestas tellus rutrum tellus pellentesque eu. At urna condimentum
              mattis pellentesque id nibh tortor. Scelerisque felis imperdiet
              proin fermentum leo vel. Nisl condimentum id entum mattis
              pellentesque id nibh tortor.{" "}
            </p>
            <p style={{ fontSize: "14px" }}>
              <FontAwesomeIcon icon={faCheck} className="text-danger" />
              &nbsp; &nbsp; &nbsp; &nbsp;Cappussino pellentesque id nibh tortor.
              Scelerisque felis imperdiet proin fermentum leo vel. Nisl
              condimentum id venenatis a condimentum vitae sapien gestas tellus
              rutrum tellus pellentesque eu. At urna condim proin fermentum leo
              vel. Nisl condimentum id venenatis a condimentum vitae sapien
              gestas tellus rutrum tellus pellentesque eu. At urna condimentum
              mattis pellentesque id nibh tortor. Scelerisque felis imperdiet
              proin fermentum leo vel. Nisl condimentum id entum mattis
              pellentesque id nibh tortor.{" "}
            </p>
          </div>
        </Container>

        <section id="secret">
          <Row className="d-flex flex-row justify-content-center">
            <div className="col-md-4 col-4">
              <img
                src="Images/cof4.jpg"
                alt=""
                className="mt-5 mb-2 img-fluid"
              />
            </div>

            <div className="col-md-4 col-8">
              <p className="mt-5 mb-2 mx-3">
                <h3>
                  <b>Our Coffee's Secrets</b>
                </h3>
                Massa vitae tortor dolore magna aliqua. Justo donec enim diam
                vulputate ut pharetra sit amet aliquam. Ut placerat orci nulla
                pellentesque dignissim enim sit amet. Leo vel fringilla est
                ullamcorper Ut pellentesque dignissim enim sit amet. Leo vel
                fringilla est ullamcorper. Nunc id cursus metus aliquam
              </p>
            </div>
          </Row>

          <Row className="d-flex flex-row justify-content-center">
            <div className="col-md-4 col-8">
              <p className="mt-3 mb-2 mx-3">
                <h3>
                  <b>Our Coffee's Secrets</b>
                </h3>
                Massa vitae tortor dolore magna aliqua. Justo donec enim diam
                vulputate ut pharetra sit amet aliquam. Ut placerat orci nulla
                pellentesque dignissim enim sit amet. Leo vel fringilla est
                ullamcorper Ut pellentesque dignissim enim sit amet. Leo vel
                fringilla est ullamcorper. Nunc id cursus metus aliquam
              </p>
            </div>

            <div className="col-md-4 col-4">
              <img src="Images/cof3.jpg" alt="" className="img-fluid" />
            </div>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default About;
