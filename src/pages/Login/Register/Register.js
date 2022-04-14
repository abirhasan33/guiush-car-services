import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Heder/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event?.target?.name?.value;
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;
    // const agree = event?.target?.terms?.checked;

      createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      alert('Updated profile');
      console.log('Updet profile');
      navigate("/home");

  };

  if (user) {
    console.log(user);
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="serivces-titel">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            className="py-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="py-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className="py-3"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
          <Form.Check onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms" className={agree ? 'text-primary ps-3' : 'text-danger ps-4'}>Accept Grenius Car Terms and Conditons</label>
        </Form.Group>
        {/* <input className="px-3 my-3" type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Accept Grenius Car Terms and Conditons</label> */}
        <Button disabled={!agree} variant="primary w-75 d-block mx-auto py-2 my-3" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">
        <small>Alredy an account? </small>{" "}
        <Link to="/login" className="text-primary" onClick={navigateLogin}>
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
