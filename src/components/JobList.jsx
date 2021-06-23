import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import JobItem from "./JobItem";

const JobList = ({ jobs }) => {
  const favs = useSelector((state) => state.favorites.favorites);
  return (
    <ListGroup>
      {jobs ? (
        jobs.map((job) => {
          return (
            <JobItem
              key={job.id}
              job={job}
              fav={favs.includes(job) ? true : false}
            />
          );
        })
      ) : (
        <div>"Nothing to show"</div>
      )}
    </ListGroup>
  );
};

export default JobList;
