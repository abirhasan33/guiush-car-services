import React from "react";
import logo from "../../../images/logo-1/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
import fackbook from "../../../images/logo-1/Facebook.png";
import github from "../../../images/logo-1/github_.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Heder/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;
  if(loading || loading1 || loading2){
    return <Loading></Loading>
  }
  if (error || error1 || error2) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1 || user2) {
    navigate("/home");
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
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img style={{ width: "33px" }} src={logo} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>

      <div>
        <button onClick={()=> signInWithFacebook()} className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "33px" }} src={fackbook} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>

      <div>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-3"
        >
          <img style={{ width: "33px" }} src={github} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
