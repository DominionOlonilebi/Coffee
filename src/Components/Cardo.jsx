import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Cardo = () => {
  return (
    <div>
      <Container className="cd">
        <h1 className="cdd">
          <b>Coffee Shop</b>
        </h1>
        <p className="mt-2 mb-4">
          <i>
            Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.
          </i>
        </p>
        <Row>
          <Col md={4} sm={12} className=" pad mb-3">
            <Card
              style={{ width: "100%" }}
              className="position-relative flex-row"
            >
              <Card.Body>
                <img
                  src="Images/c1.jpg"
                  alt=""
                  style={{ width: "100%" }}
                  height={200}
                />
                <div className=" text-center mt-3">
                  <Card.Title>
                    <b>Raw Coffee Beans</b>
                  </Card.Title>
                  <Card.Text>
                    Aliquam vesti etiam sit bulum morbi blan sodales dit cursus
                    risus. Neque sodales ut etiam sit amet nisl purus. Lacus
                    luctus sit vesti accumsan tortor posuere.
                  </Card.Text>
                  <a href="#secret">
                    <Button className="btnn mb-2 py-3 px-5">Read More</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card
              style={{ width: "100%" }}
              className="position-relative flex-row"
            >
              <Card.Body>
                <img
                  src="Images/c2.jpeg"
                  alt=""
                  style={{ width: "100%" }}
                  height={200}
                />
                <div className=" text-center mt-3">
                  <Card.Title>
                    <b>Roasting</b>
                  </Card.Title>
                  <Card.Text>
                    Aliquam vestibulum morbi blandit cursus risus. Neque sodales
                    ut etiam sit amet nisl purus. etiam sit bulum morbi blan
                    sodales Lacus luctus accumsan tortor posuere.
                  </Card.Text>
                  <a href="#secret">
                    <Button className="btnn mb-2 py-3 px-5">Read More</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card
              style={{ width: "100%" }}
              className="position-relative flex-row"
            >
              <Card.Body>
                <img
                  src="Images/c3.png"
                  alt=""
                  style={{ width: "100%" }}
                  height={200}
                />
                <div className=" text-center mt-3">
                  <Card.Title>
                    <b>Grinding</b>
                  </Card.Title>
                  <Card.Text>
                    Aliquam vestibulum morbi blandit cursus risus. Neque sodales
                    ut etiam sit amet nisl purus. etiam sit bulum morbi blan
                    sodales dit luctus accumsan tortor posuere.
                  </Card.Text>
                  <a href="#secret">
                    <Button className="btnn mb-2 py-3 px-5">Read More</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cardo;
