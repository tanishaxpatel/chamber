import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="signup-container">
        <div className="signup-center">
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
              <button>Sign Up</button>
            </div>
          </form>
          <div className="signup-bottom">
            Already have an account? <Link to="/">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
