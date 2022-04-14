import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Heder/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRaef = useRef("");
  const passwordRaef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(loading || sending){
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmut = (event) => {
    event.preventDefault();
    const email = emailRaef.current.value;
    const password = passwordRaef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  const navigetRegister = (event) => {
    navigate("/Register");
  };

  const resetPassword = async  () => {
    const email = emailRaef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('pleace enter your email address')
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="serivces-titel">Login</h1>
      <Form onSubmit={handleSubmut}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRaef}
            type="email"
            placeholder="Enter email"
            required
            className="py-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRaef}
            type="password"
            placeholder="Password"
            className="py-3"
            required
          />
        </Form.Group>
        <Button variant="primary w-75 d-block mx-auto my-3 py-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-center">
        <small>New to Genius Car? </small>{" "}
        <Link to="/register" className="text-primary" onClick={navigetRegister}>
          Please Register
        </Link>
      </p>

      <p className="text-center">
        <small>Forget to Password? </small>{" "}
        <button className="text-primary btn btn-link" onClick={resetPassword}>
          Reeet Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
