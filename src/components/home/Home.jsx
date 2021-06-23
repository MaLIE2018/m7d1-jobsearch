import React from "react";
import { Row, Spinner, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import JobList from "../JobList";
const Home = ({ category }) => {
  const searchWord = useSelector((state) => state.searchWord);

  const { isLoading, error, data, isFetching } = useQuery(
    ["jobs", searchWord],
    () =>
      fetch("https://fake-careers.herokuapp.com?search=" + searchWord).then(
        (res) => res.json()
      ),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return (
      <Row>
        <Col>
          <Spinner animation='grow' />
        </Col>
      </Row>
    );
  }
  if (error)
    return (
      <Row>
        <Col>"An error has occurred: " + {error.message}</Col>
      </Row>
    );

  return (
    <Row>
      <Col>
        <JobList jobs={data.jobs} />
      </Col>
    </Row>
  );
};

export default Home;
