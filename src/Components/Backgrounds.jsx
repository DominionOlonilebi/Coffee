import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Backgrounds = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after the component mounts
    setFadeIn(true);
  }, []);

  return (
    <>
      <section fluid className="bg">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div className={`fade-in-text h1 ${fadeIn ? "fade-in" : ""}`}>
                <div className="slide-left-container h1">
                  <div className="slide-left-box h1">
                    <h1>
                      <b>
                        Welcome To <span className="pan">HQ</span> Coffee Shop
                      </b>
                    </h1>
                  </div>
                </div>
                <div className="slide-left-container h2">
                  <div className="slide-left-box h2">
                    <h2>It's Your Favorite Coffee Tea</h2>
                  </div>
                </div>
                <div className="slide-left-container h3">
                  <div className="slide-left-box h3">
                    <h3>Premium Quality & Rich Flavor</h3>
                  </div>
                </div>

                <h4>
                  <i>Best When Served Hot...</i>
                </h4>

                <div className="jiggle-container">
                  <div className="jiggle-box">
                    <a href="#ord">
                      <Button className="now">
                        <b>Order Now</b>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Backgrounds;
