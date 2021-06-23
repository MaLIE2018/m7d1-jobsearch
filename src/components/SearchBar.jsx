import React, { createRef } from "react";
import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { BsArrowDownRight } from "react-icons/bs";
import { set } from "../actions/index.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = ({ setQueryWord, history, location }) => {
  const input = createRef();
  const dispatch = useDispatch();
  return (
    <>
      <Row>
        <Col md={1} className='d-flex justify-content-end'>
          <BsArrowDownRight style={{ width: "30px", height: "30px" }} />
        </Col>
        <Col md={11}>
          <InputGroup className='mb-3'>
            <FormControl
              ref={input}
              placeholder='Type your search'
              aria-label='searchField'
              onFocus={() => history.push("/")}
            />
            <Button onClick={() => dispatch(set(input.current.value))}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {location.pathname !== "/favorites" ? (
            <Link to='/favorites'>Go to Favorites</Link>
          ) : (
            <Link to='/'>Go back</Link>
          )}
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
