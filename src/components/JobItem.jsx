import React from "react";
import { Col, ListGroup, Row, Image, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import differenceInDays from "date-fns/differenceInDays";
import { useDispatch } from "react-redux";
const JobItem = (props) => {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const { job } = props;
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <Row>
        <Col>
          {props.location.pathname === "/favorites" ? (
            <Button
              variant='warning'
              onClick={() => {
                dispatch({ type: "REMOVE_FAVORITE", payload: job.id });
              }}>
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant='light'
              disabled={props.fav}
              onClick={() => {
                dispatch({ type: "ADD_FAVORITE", payload: job });
              }}>
              {!props.fav ? "Add to Favorites" : "Added"}
            </Button>
          )}
        </Col>
        <Col>
          <Link to={`/company/${job.hiring_company.name}`}>
            <Image
              src={job.hiring_company.image}
              roundedCircle
              style={{ width: "40px", height: "40px" }}
              alt='CompanyImage'
              className='mr-2'
            />
            {job.hiring_company.name}
          </Link>
        </Col>
        <Col>{job.job_data.title}</Col>
        <Col>{job.job_data.category}</Col>
        <Col>{job.job_data.salary}</Col>
        <Col>
          <ShowMoreText
            /* Default options */
            lines={3}
            more='Show more'
            less='Show less'
            className='content-css'
            anchorClass='my-anchor-css-class'
            onClick={() => executeOnClick}
            expanded={false}
            width={280}>
            <div
              dangerouslySetInnerHTML={{
                __html: job.job_data.description,
              }}></div>
          </ShowMoreText>
        </Col>
        <Col>
          Posted {differenceInDays(new Date(), new Date(job.published))} days
          ago
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default withRouter(JobItem);
