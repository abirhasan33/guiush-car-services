import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }
    if(error){
        console.log(error);
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event?.target?.name?.value;
        const email = event?.target?.email?.value;
        const password = event?.target?.password?.value;

        createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="serivces-titel">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Your Name"
            className="py-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            className="py-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        <Button variant="primary w-25" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        <small>Alredy an account? </small>{" "}
        <Link to="/login" className="text-danger" onClick={navigateLogin}>
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
