import React, { useState } from "react";
import { Form, Button, NavItem } from "react-bootstrap";
export default function Filter(props) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("isExpired?", isExpired);
    console.log("isAvail?", isAvailable);
    const sugarOptions =
      "/?" +
      (isAvailable ? "isAvailable=true&" : "") +
      (isExpired ? "isExpired=true" : "");
    props.getSugarHandler(sugarOptions);
    console.log(">>>", sugarOptions);
    // if (isAvailable) {
    //   //props.getSugarHandler("/?isAvailable=true");
    //   console.log("getting isAvailable sugar");
    // } else {
    //   props.getSugarHandler();
    //   console.log("getting all sugar");
    // }
  };

  const handleExpired = () => {
    setIsExpired(!isExpired);
  };

  const handleAvailable = () => {
    setIsAvailable(!isAvailable);
  };
  const handleClear = () => {
    console.log("clearing");
    setIsAvailable(false);
    setIsExpired(false);
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
        <Form.Group controlId="formisAvailableCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleAvailable}
            label="isAvailable"
            checked={isAvailable}
          />
        </Form.Group>
        <Form.Group controlId="formisExpiredCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleExpired}
            label="isExpired"
            checked={isExpired}
            disabled={!isAvailable}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="primary" onClick={handleClear}>
          Clear
        </Button>
      </Form>
    </div>
  );
}
