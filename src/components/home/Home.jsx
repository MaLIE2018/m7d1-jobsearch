import React from "react";
import { Row, Spinner, Col } from "react-bootstrap";
import { useQuery } from "react-query";

import JobList from "../JobList";
const Home = ({ queryWord, category }) => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["jobs", queryWord],
    () =>
      fetch("https://remotive.io/api/remote-jobs?search=" + queryWord).then(
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
