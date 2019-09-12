import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export function Hero() {
  return (
    <Container
      fluid
      style={{ background: "#f1f1f1", minHeight: 200, padding: "5rem" }}
      className="d-flex"
    >
      <Container
        style={{ margin: "auto", display: "flex" }}
        className="justify-content-between"
      >
        <Row style={{ margin: "auto" }}>
          <Col className="hero-text" sm={6}>
            <h1>Welcome to Rick & Morty characters info page!</h1>
            <p>
              Here you can see your favourite characters profiles and a little
              information for each of them by clicking on their profile. You can also filter them by race :)
            </p>
          </Col>
          <Col className="slider" sm={6}>
            <Row>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://designshack.net/wp-content/uploads/background-design-trends.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://designshack.net/wp-content/uploads/background-design-trends.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://designshack.net/wp-content/uploads/background-design-trends.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
