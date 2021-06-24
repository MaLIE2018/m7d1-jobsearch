import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import JobList from "../JobList";

const Favs = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <Row>
        <Col>
          <h1>Favorites</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <JobList jobs={favorites} />
        </Col>
      </Row>
    </>
  );
};

export default Favs;
