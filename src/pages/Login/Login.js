import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";




const Login = () => {

    const emailRaef = useRef('');
    const passwordRaef = useRef('');
    const navgate = useNavigate();

    const handleSubmut = event => {
        event.preventDefault();
        const email = emailRaef.current.value;
        const password = passwordRaef.current.value;
        console.log(email, password);
    } 

    const navigetRegister = event => {
        navgate('/Register')
    }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="serivces-titel">Login</h1>
      <Form onSubmit={handleSubmut}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRaef} type="email" placeholder="Enter email" required className="py-3" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRaef} type="password" placeholder="Password" className="py-3" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p><small>New to Genius Car? </small> <Link to='/register' className="text-danger" onClick={navigetRegister}>Please Register</Link></p>
    </div>
  );
};

export default Login;
