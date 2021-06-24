import React, { useState } from "react";
import { useEffect } from "react";
import { Row, Spinner, Col, Pagination } from "react-bootstrap";
import { InView, useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../actions";
import JobList from "../JobList";

const Home = ({ category }) => {
  const searchWord = useSelector((state) => state.searchWord);
  const [pageParam, setOffset] = useState(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
  });

  const dispatch = useDispatch();
  const next = useSelector((state) => state.next);
  const {
    isLoading,
    error,
    data,
    isFetchingNextPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["jobs"],
    ({ pageParam = 0 }) =>
      fetch(
        "https://fake-careers.herokuapp.com?search=" +
          searchWord +
          "&offset=" +
          pageParam
      ).then((res) => {
        return res.json();
      }),
    {
      getPreviousPageParam: (pages) => {
        return pages.navigation?.prev?.split("=")[2] ?? false;
      }, //;
      getNextPageParam: (pages) =>
        pages.navigation?.next?.split("=")[2] ?? false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (hasNextPage && entry?.isIntersecting) {
      fetchNextPage();
      dispatch(getJobs(next, searchWord));
    }
  }, [entry?.isIntersecting]);

  return (
    <>
      <Row>
        <Col>
          <h1>Jobs</h1>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Col>
            <Spinner animation='grow' />
          </Col>
        ) : error ? (
          <Col>"An error has occurred: " + {error.message}</Col>
        ) : (
          <Col>
            {data.pages.map((page) => (
              <JobList jobs={page.jobs} />
            ))}
            <div ref={ref}>
              {" "}
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load Newer"
                : "Nothing more to load"}
            </div>
          </Col>
        )}
      </Row>
      <Row className='mt-4 d-flex justify-content-center'>
        {/* <Pagination>
          {Array.from({ length: Math.ceil(data.num_jobs / 10) }).map((v, i) => {
            return (
              <Pagination.Item key={i} onClick={() => setOffset(i * 10)}>
                {i + 1}
              </Pagination.Item>
            );
          })}
        </Pagination> */}
      </Row>
    </>
  );
};

export default Home;
