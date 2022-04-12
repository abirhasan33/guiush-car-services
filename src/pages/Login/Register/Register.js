import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const navigetLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.target.email, event.target.name);
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="serivces-titel">Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            required
            className="py-3"
          />
          <Form.Text className="text-muted">
            We'll never share your Name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            className="py-3"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="py-3"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        <small>Alredy an account? </small>{" "}
        <Link to="/login" className="text-danger" onClick={navigetLogin}>
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
