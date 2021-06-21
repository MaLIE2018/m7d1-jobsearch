import React from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import differenceInDays from "date-fns/differenceInDays";

const JobList = ({ jobs }) => {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  return (
    <ListGroup>
      {jobs ? (
        jobs.map((job) => (
          <ListGroup.Item key={job.id}>
            <Row>
              <Col>
                <Link to={`/company/${job.company_name}`}>
                  <Image
                    src={job.company_logo_url}
                    roundedCircle
                    style={{ width: "40px", height: "40px" }}
                    alt='CompanyImage'
                    className='mr-2'
                  />
                  {job.company_name}
                </Link>
              </Col>
              <Col>{job.title}</Col>
              <Col>{job.category}</Col>
              <Col>{job.salary}</Col>
              <Col>{job.job_type.replace("_", " ")}</Col>
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
                      __html: job.description,
                    }}></div>
                </ShowMoreText>
              </Col>
              <Col>
                Posted{" "}
                {differenceInDays(new Date(), new Date(job.publication_date))}{" "}
                days ago
              </Col>
            </Row>
          </ListGroup.Item>
        ))
      ) : (
        <div>"Nothing to show"</div>
      )}
    </ListGroup>
  );
};

export default JobList;
