import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";


const Login = () => {

    const emailRaef = useRef('');
    const passwordRaef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
           navigate(from, { replace: true });
      }

      let errorElement;
  if (error) {
    errorElement = <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
  }

    const handleSubmut = event => {
        event.preventDefault();
        const email = emailRaef.current.value;
        const password = passwordRaef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    } 

    const navigetRegister = event => {
        navigate('/Register')
    }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="serivces-titel">Login</h1>
      <Form onSubmit={handleSubmut}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRaef} type="email" placeholder="Enter email" required className="py-3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRaef} type="password" placeholder="Password" className="py-3" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary w-25" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p><small>New to Genius Car? </small> <Link to='/register' className="text-danger" onClick={navigetRegister}>Please Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
