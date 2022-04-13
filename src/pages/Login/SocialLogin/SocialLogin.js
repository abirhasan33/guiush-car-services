import React from "react";
import logo from "../../../images/logo-1/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
import fackbook from "../../../images/logo-1/Facebook.png";
import github from "../../../images/logo-1/github_.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate()
  let errorElement;
  if (error || error1) {
    errorElement = <div>
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
      </div>
  }

  if(user || user1){
    navigate('/home');
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="pt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
        {errorElement}
      
      <div>
        <button onClick={()=> signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto">
          <img style={{ width: "33px" }} src={logo} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>

      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "33px" }} src={fackbook} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>

      <div>
        <button onClick={()=> signInWithGithub()} className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "33px" }} src={github} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
