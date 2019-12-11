import React from "react";
import { Form, Button } from "react-bootstrap";
export default function Filter(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.getSugarHandler();
    console.log("getting sugar");
  };
  return (
    <div>
      <Form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="isAvailable" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="isExpired" disabled />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="primary" type="submit">
          Clear
        </Button>
      </Form>
    </div>
  );
}
