import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footers pt-4 pb-3">
        <Row>
          <Col>
            <div className="d-flex justify-content-center ">
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} className="mx-3 " />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin} className="mx-3 " />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faWhatsapp} className="mx-3 " />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} className="mx-3 " />
              </a>
            </div>
            <p style={{ fontSize: "13px" }}>
              <b>&copy; Copyright 2023 HQ Group. All rights reserved.</b>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
