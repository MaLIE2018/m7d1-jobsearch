import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import JobList from "../JobList";
const Favs = (props) => {
  const data = useSelector((state) => state.favorites);
  return (
    <>
      <Row>
        <Col>
          <h1>Favorites</h1>
        </Col>
      </Row>
      <Row>
        <JobList jobs={data.favorites} />
      </Row>
    </>
  );
};

export default Favs;