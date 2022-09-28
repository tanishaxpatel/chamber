import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-center">
          <div className="brand-logo">
            <h2>welcome to chamber</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="brand-email">
                <input
                  type="email"
                  placeholder="example@test.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="brand-pwd">
                <input
                  type="password"
                  placeholder="Min 6 charaters long"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="sign-up-btn">
              <button>Log In</button>
            </div>
          </form>
          <div className="google-btn">
            <GoogleButton
              type="dark"
              className="g-btn"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="signup-bottom">
            Don't Have An Account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
