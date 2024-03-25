import React, { useState } from "react";
import Footer from "./Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const alertSubmit = () => {
    alert("Your Information was Submitted Successfully");
  };

  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    // Reset shaking after the animation duration (in milliseconds)
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };

  return (
    <div id="contact">
      <Container className="ctn">
        <h1>Contact Us</h1>
        <Row>
          <div className="col-4">
            <div>
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +23465874309
            </div>
          </div>
          <div className="col-4">
            <div>
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +23465874309
            </div>
          </div>
          <div className="col-4">
            <div>
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +23465874309
            </div>
          </div>
        </Row>

        <Row>
          <Col md={6} className="ct">
            <p className="ctns mx-3">
              Contact us by sending an email to{" "}
              <span className="cct">hq1@gmail.com</span> or use the contact form
              below
            </p>
            <Form className="forms mx-3">
              <p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </p>
              <p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </p>
              <p>
                <input
                  type="organization"
                  className="form-control"
                  placeholder="Organization"
                  required
                />
              </p>
              <p>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </p>
              <p>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="How can we help you?"
                ></textarea>
              </p>

              <div className={`shake-container ${isShaking ? "shake" : ""}`}>
                <Button
                  onClick={(handleShake, alertSubmit)}
                  type="submit"
                  className="btnn mt-4"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>

          <Col md={6} className="ctt mt-5">
            <iframe
              title="google map"
              className="map mt-5 mx-5"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1702354562341!5m2!1sen!2sng"
              width={450}
              height={415}
              border={0}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
