import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Pro = () => {
  const alertBuy = () => {
    alert("Your Order was Received. Thank You");
  };

  return (
    <div id="ord">
      <Container className="price pb-5 pt-4 px-5">
        <h1>
          Order{" "}
          <span>
            {" "}
            <FontAwesomeIcon icon={faCoffee} />
          </span>
        </h1>

        <Row className="teas">
          <Col md={6}>
            <div className="boxShadaw bg-light p-4">
              <h5 className="mb-4 pb-2">
                <b>Combo Price List</b>
              </h5>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Cappussino :</h6>
                <span>$90</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Espresso (2) :</h6>
                <span>$210</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Latte :</h6>
                <span>$200</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h6 className="fw-normal">Americano (2) :</h6>
                <span>$300</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h6 className="fw-normal">Tax :</h6>
                <span>$100</span>
              </div>
              <div
                className="d-flex justify-content-between fw-bold border-bottom- 1px solid #f4ecec
"
              >
                <h6>Total Price :</h6>
                <span>$900</span>
              </div>
              <Button
                variant="dark"
                size="md"
                className="tea mt-4 w-100"
                onClick={alertBuy}
              >
                Buy Now
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="boxShadaw bg-light p-4">
              <h5 className="text-left mb-4 pb-2">
                <b>New Price List</b>
              </h5>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Cappussino :</h6>
                <span>$100</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Espresso :</h6>
                <span>$150</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Latte :</h6>
                <span>$200</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h6 className="fw-normal">Americano :</h6>
                <span>$150</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h6 className="fw-normal">Tax :</h6>
                <span>$100</span>
              </div>
              <div
                className="d-flex justify-content-between fw-bold border-bottom- 1px solid #f4ecec
"
              >
                <h6>Total Price :</h6>
                <span>$700</span>
              </div>
              <Button
                variant="dark"
                size="md"
                className="tea mt-4 w-100"
                onClick={alertBuy}
              >
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={4} sm={12}>
            <img
              src="Images/cof80.jpg"
              className="img-fluid w-100 h-90 mb-2"
              alt=""
            />
          </Col>
          <Col md={4} sm={12}>
            <img
              src="Images/cof80.jpg"
              alt=""
              className="img-fluid w-100 h-90 mb-2"
            />
          </Col>
          <Col md={4} sm={12}>
            <img
              src="Images/cof80.jpg"
              alt=""
              className="img-fluid w-100 h-90 mb-2"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pro;
