import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export default function Filter(props) {
  const [isAvailable, setIsAvailable] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (isAvailable) {
      props.getSugarHandler("/?isAvailable=true");
      console.log("getting isAvailable sugar");
    } else {
      props.getSugarHandler();
      console.log("getting all sugar");
    }
  };

  const handleChange = () => {
    console.log("checked");
    setIsAvailable(true);
  };
  const handleClear = () => {
    console.log("clearing");
    setIsAvailable(false);
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
            onChange={handleChange}
            label="isAvailable"
            checked={isAvailable}
          />
        </Form.Group>
        <Form.Group controlId="formisExpiredCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleChange}
            label="isExpired"
            disabled
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
