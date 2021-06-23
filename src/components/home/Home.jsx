import React, { useState } from "react";
import { Row, Spinner, Col, Pagination } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import JobList from "../JobList";
const Home = ({ category }) => {
  const searchWord = useSelector((state) => state.searchWord);
  const [offset, setOffset] = useState(0);

  const { isLoading, error, data, isFetching } = useQuery(
    ["jobs", searchWord, offset],
    () =>
      fetch(
        "https://fake-careers.herokuapp.com?search=" +
          searchWord +
          "&offset=" +
          offset
      ).then((res) => res.json()),
    { refetchOnWindowFocus: false, keepPreviousData: true, staleTime: 5000 }
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
          <h1>Jobs</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <JobList jobs={data.jobs} />
        </Col>
      </Row>
      <Row className='mt-4 d-flex justify-content-center'>
        <Pagination>
          {Array.from({ length: Math.ceil(data.num_jobs / 10) }).map((v, i) => {
            return (
              <Pagination.Item key={i} onClick={() => setOffset(i * 10)}>
                {i}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </Row>
    </>
  );
};

export default Home;
