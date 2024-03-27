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
        <Row className="d-flex justify-content-center">
          <div className="col-3 mx-3">
            <div className="contact_div">
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} className="icons" />
              </span>
              +23465874309
            </div>
          </div>
          <div className="col-3 mx-3">
            <div className="contact_div">
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} className="icons" />
              </span>
              +23465874309
            </div>
          </div>
          <div className="col-3 mx-3">
            <div className="contact_div">
              {" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faPhone} className="icons" />
              </span>
              +23465874309
            </div>
          </div>
        </Row>

        <Row>
          <div className="col-md-6 col-12 ct">
            <p className="ctns mx-3 pt-4">
              Contact us by sending an email to{" "}
              <span className="cct">hq1@gmail.com</span> or use the contact form
              below
            </p>

            <form action="" className="pt-4 pb-3 mx-4">
              <div className="row ">
                <div className=" col-md-4 col-12 ">
                  <input
                    type="text"
                    className=" form-control border-0 mb-2"
                    placeholder="Name"
                    style={{
                      borderRadius: "0px",
                    }}
                  />
                </div>
                <div className="col-md-4 col-12  ">
                  <input
                    type="text"
                    className=" form-control border-0 mb-2"
                    placeholder="Email"
                    style={{
                      borderRadius: "0px",
                    }}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    className="form-control border-0 mb-2"
                    placeholder="Location"
                    style={{
                      borderRadius: "0px",
                    }}
                  />
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    className="form-control border-0 mb-2"
                    placeholder="Organization"
                    style={{
                      borderRadius: "0px",
                    }}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    className="form-control border-0 mb-2"
                    placeholder="Time"
                    style={{
                      borderRadius: "0px",
                    }}
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    className="form-control border-0 mb-2"
                    placeholder="Phone"
                    style={{
                      borderRadius: "0px",
                    }}
                  />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12 ">
                  <textarea
                    type="text"
                    className="form-control pb-5 pt-2 border-0"
                    placeholder="Message"
                    style={{
                      borderRadius: "0px",
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="pt-3" style={{ textAlign: "center" }}>
                <div className={`shake-container ${isShaking ? "shake" : ""}`}>
                  <Button
                    onClick={(handleShake, alertSubmit)}
                    type="submit"
                    className="btnn bg-dark mt-4"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-6 col-12 ctt mt-5">
            <div className="row justify-content-center">
              <iframe
                title="goggle map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1701172451134!5m2!1sen!2sng"
                width="750"
                height="440"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
