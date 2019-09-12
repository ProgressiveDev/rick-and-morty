import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

interface FilterProps {
  filterCharacters(): void;
  removeFilter(): void;
  filterOptions: string[]
}

export const CharacterFilter: React.FC<FilterProps> = ({ filterCharacters, removeFilter, filterOptions }) => {

  return (
    <Container>
      <Row className="d-flex justify-content-start align-items-center mt-5">
        <Col className="col-md-auto">
          Filter:
        </Col>
        <Col>
          {
            filterOptions.map((item) => {
              return <Button variant="link" onClick={filterCharacters}>{item}</Button>
            })
          }
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col className="d-flex" style={{ flexDirection: "row" }}>
          <Badge pill variant="info" style={{ maxWidth: 80, marginRight: 10 }} className="d-flex justify-content-around align-items-center">
            Info
              <Button className="close" aria-label="Close" onClick={removeFilter} style={{ fontSize: "1rem", marginLeft: 5 }}>
              <span style={{ fontSize: "1rem", height: "auto" }} aria-hidden="true">&times;</span>
            </Button>
          </Badge>
          <Badge pill variant="info" style={{ maxWidth: 80, marginRight: 10 }} className="d-flex justify-content-around align-items-center">
            Info
              <Button className="close" aria-label="Close" onClick={removeFilter} style={{ fontSize: "1rem", marginLeft: 5 }}>
              <span style={{ fontSize: "1rem", height: "auto" }} aria-hidden="true">&times;</span>
            </Button>
          </Badge>
        </Col>
      </Row>
    </Container>
  );
};
