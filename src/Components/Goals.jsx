import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Goals = () => {
  return (
    <div id="goals">
      <Container className="goal">
        <h2 className=" mb-2">
          <b>Company's Goal</b>
        </h2>

        <h5 className="mt-3 mb-3">
          <b>Our Mission</b>
        </h5>
        <p style={{ lineHeight: "27px" }}>
          Neque sodales ut etiam sit amet nisl purus. Lacus luctus accumsan
          tortor posuere. Suspendisse interdum consectetur libero id faucibus
          nisl tincidunt eget nullam. Sed viverra ipsum nunc aliquet bibendum
          enim facilisis. Diam vel quam elementum pulvinar etiam non quam lacus
          suspendisse. Egestas integer eget aliquet nibh. Feugiat in ante metus
          dictum at tempor commodo ullamcorper. Vulputate mi sit amet mauris
          commodo quis imperdiet massa tincidunt. Vitae proin sagittis nisl
          rhoncus. Aenean et tortor at risus. Lacus luctus accumsan tortor
          posuere. Donec enim diam vulputate ut pharetra sit. Phasellus egestas
          tellus rutrum tellus pellentesque eu. At urna condimentum mattis
          pellentesque id nibh tortor. Scelerisque felis imperdiet proin
          fermentum leo vel. Nisl condimentum id venenatis a condimentum vitae
          sapien pellentesque habitant.
        </p>

        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img src="Images/cof50.jpg" className="d-block w-100" alt="..." />
            <MDBCarouselCaption>
              <h5 className="text-warning">
                <b>Cappussino</b>
              </h5>
              <p className="text-warning">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <img src="Images/clo2.jpg" className="d-block w-100" alt="..." />
            <MDBCarouselCaption>
              <h5 className="text-danger">
                <b>Espresso</b>
              </h5>
              <p className="text-danger">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
            <img src="Images/cof50.jpg" className="d-block w-100" alt="..." />
            <MDBCarouselCaption>
              <h5 className="text-warning">
                <b>Cappussino</b>
              </h5>
              <p className="text-warning">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
        {/* <img src="" alt="" width={1110} height={400} /> */}
        <h5 className="mt-5 mb-3">
          <b>Our Vision</b>
        </h5>
        <p style={{ fontSize: "14px", lineHeight: "27px" }}>
          Neque sodales ut etiam sit amet nisl purus. Lacus luctus accumsan
          tortor posuere. Suspendisse interdum consectetur libero id faucibus
          nisl tincidunt eget nullam. Sed viverra ipsum nunc aliquet bibendum
          enim facilisis. Diam vel quam elementum pulvinar etiam non quam lacus
          suspendisse. Egestas integer eget aliquet nibh. Feugiat in ante metus
          dictum at tempor commodo ullamcorper. Vulputate mi sit amet mauris
          commodo quis imperdiet massa tincidunt. Vitae proin sagittis nisl
          rhoncus. Aenean et tortor at risus. Lacus luctus accumsan tortor
          posuere. Donec enim diam vulputate ut pharetra sit. Phasellus egestas
          tellus rutrum tellus pellentesque eu. At urna condimentum mattis
          pellentesque id nibh tortor. Scelerisque felis imperdiet proin
          fermentum leo vel. Nisl condimentum id venenatis a condimentum vitae
          sapien pellentesque habitant.
        </p>
      </Container>

      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <img src="Images/cof1.jpg" alt="" className="img-fluid" />
          </Col>

          <Col md={6}>
            <p style={{ lineHeight: "27px" }}>
              Egestas integer eget aliquet nibh. Feugiat in ante metus dictum at
              tempor commodo ullamcorper. Donec enim diam vulputate ut pharetra
              sit. Phasellus egestas tellus rutrum tellus pellentesque eu. At
              urna condimentum mattis pellentesque id nibh tortor. Scelerisque
              felis imperdiet proin fermentum leo vel. Nisl condimentum id
              venenatis a condimentum vitae sapien pellentesque habitant.
              Vulputate mi sit amet mauris commodo quis imperdiet massa
              tincidunt. Vitae proin sagittis nisl rhoncus. Aenean et tortor at
              risus. Lacus luctus accumsan tortor posuere. Donec enim diam
              vulputate ut pharetra sit. Phasellus egestas tellus rutrum tellus
              pellentesque eu. At urna condimentum mattis pellentesque id nibh
              tortor. Scelerisque felis imperdiet proin fermentum leo vel.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Goals;
