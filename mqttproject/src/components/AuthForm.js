import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "./../util/auth.js";

function AuthForm(props) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);

  // State for all inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Whether to show errors
  // We set to true if they submit and there are errors.
  // We only show errors after they submit because
  // it's annoying to see errors while typing.
  const [showErrors, setShowErrors] = useState(false);

  // Error array we'll populate
  let errors = [];

  // Function for fetching error for a field
  const getError = field => {
    return errors.find(e => e.field === field);
  };

  // Function to see if field is empty
  const isEmpty = val => val.trim() === "";

  // Add error if email empty
  if (["signin", "signup", "forgotpass"].includes(props.type)) {
    if (isEmpty(email)) {
      errors.push({
        field: "email",
        message: "Please enter an email"
      });
    }
  }

  // Add error if password empty
  if (["signin", "signup", "changepass"].includes(props.type)) {
    if (isEmpty(pass)) {
      errors.push({
        field: "pass",
        message: "Please enter a password"
      });
    }
  }

  // Add error if confirmPass empty or
  // if it doesn't match pass.
  // Only for signup and changepass views.
  if (["signup", "changepass"].includes(props.type)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: "confirmPass",
        message: "Please confirm password"
      });
    } else if (pass !== confirmPass) {
      errors.push({
        field: "confirmPass",
        message: `This doesn't match your password`
      });
    }
  }

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return auth.signin(email, pass).then(user => {
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then(user => {
        props.onAuth(user);
      });
    },
    forgotpass: ({ email }) => {
      return auth.sendPasswordResetEmail(email).then(() => {
        props.onStatus({
          type: "success",
          message: "Password reset email sent"
        });
      });
    },
    changepass: ({ pass }) => {
      return auth.confirmPasswordReset(pass).then(() => {
        props.onStatus({
          type: "success",
          message: "Your password has been changed"
        });
      });
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      setPending(true);
      // Call submit handler for auth type
      submitHandlersByType[props.type]({
        email,
        pass
      })
        .catch(error => {
          props.onStatus({
            type: "error",
            message: error.message
          });
        })
        .finally(() => {
          setPending(false);
        });
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {["signup", "signin", "forgotpass"].includes(props.type) && (
        <Form.Group controlId="formEmail">
          <FormField
            size={props.inputSize}
            value={email}
            type="email"
            placeholder="Email"
            required={true}
            error={showErrors && getError("email")}
            onChange={e => setEmail(e.target.value)}
          ></FormField>
        </Form.Group>
      )}

      {["signup", "signin", "changepass"].includes(props.type) && (
        <Form.Group controlId="formPassword">
          <FormField
            size={props.inputSize}
            value={pass}
            type="password"
            placeholder="Password"
            required={true}
            error={showErrors && getError("pass")}
            onChange={e => setPass(e.target.value)}
          ></FormField>
        </Form.Group>
      )}

      {["signup", "changepass"].includes(props.type) && (
        <Form.Group controlId="formConfirmPass">
          <FormField
            size={props.inputSize}
            value={confirmPass}
            type="password"
            placeholder="Confirm Password"
            required={true}
            error={showErrors && getError("confirmPass")}
            onChange={e => setConfirmPass(e.target.value)}
          ></FormField>
        </Form.Group>
      )}

      <Button
        variant="primary"
        block={true}
        size={props.inputSize}
        type="submit"
        disabled={pending ? true : false}
      >
        {!pending && <span>{props.typeValues.buttonText}</span>}

        {pending && (
          <Spinner
            animation="border"
            size="sm"
            role="status"
            aria-hidden={true}
            className="align-baseline"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Button>
    </Form>
  );
}

export default AuthForm;
