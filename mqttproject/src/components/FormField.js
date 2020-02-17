import React from "react";
import Form from "react-bootstrap/Form";

function FormField(props) {
  const { error, ...inputProps } = props;

  return (
    <>
      <Form.Control
        as={props.type === "textarea" ? "textarea" : "input"}
        isInvalid={error ? true : undefined}
        {...inputProps}
      ></Form.Control>

      {error && (
        <Form.Control.Feedback type="invalid">
          {error.message}
        </Form.Control.Feedback>
      )}
    </>
  );
}

export default FormField;
