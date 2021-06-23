import React from "react";
import { ListGroup } from "react-bootstrap";

import JobItem from "./JobItem";

const JobList = ({ jobs }) => {
  console.log("jobs:", jobs);
  return (
    <ListGroup>
      {jobs ? (
        jobs.map((job) => <JobItem key={job.id} job={job} />)
      ) : (
        <div>"Nothing to show"</div>
      )}
    </ListGroup>
  );
};

export default JobList;
