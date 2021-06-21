import React, { createRef } from "react";
import {
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
  Spinner,
  Form,
} from "react-bootstrap";

import { BsArrowDownRight } from "react-icons/bs";
const SearchBar = ({ setQueryWord, history }) => {
  const input = createRef();

  return (
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
          <Button onClick={() => setQueryWord(input.current.value)}>
            Search
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
