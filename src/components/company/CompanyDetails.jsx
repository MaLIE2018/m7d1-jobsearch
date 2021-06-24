import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import JobList from "../JobList";
const CompanyDetails = ({ match, history }) => {
  const { isLoading, error, data } = useQuery(
    ["company", match.params.company_name],
    () =>
      fetch(
        "https://remotive.io/api/remote-jobs?company_name=" +
          match.params.company_name
      ).then((res) => res.json())
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
    <>
      <Row>
        <Col>
          <h1>Company</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <JobList jobs={data.jobs} />
        </Col>
      </Row>
    </>
  );
};

export default CompanyDetails;
