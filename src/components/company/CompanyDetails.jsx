import React, { useEffect } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import JobList from "../JobList";
const CompanyDetails = ({ match, history }) => {
  const { isLoading, error, data, isFetching } = useQuery("company", () =>
    fetch(
      "https://remotive.io/api/remote-jobs?company_name=" +
        match.params.company_name
    ).then((res) => res.json())
  );

  useEffect(() => {}, []);

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
        {" "}
        <Button onClick={() => history.go(-1)}>Go Back</Button>
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
