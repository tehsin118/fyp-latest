import React from "react";
import { Link } from "react-router-dom";
import { MailIcon, LoginImage, Users1 } from "../../EntryFile/imagePath";
import { useState } from "react";
const Register = () => {
  const [eye, seteye] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };
  return (
    <div>
      <div className="main-wrapper">
        {/* <Helmet>
          <title>SignUp - GoShoppIn</title>
          <meta name="description" content="SignUp page" />
        </Helmet> */}
        <div className="account-content">
          <div className="login-wrapper">
            <div className="login-content">
              <div className="login-userset">
                <form>
                  <div className="login-logo">
                    {/* <img src={Logo} alt="img" /> */}
                  </div>
                  <div className="login-userheading">
                    <h3>Create an Account</h3>
                  </div>
                  <div className="form-login">
                    <label>Full Name</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        className={`  "is-invalid" : ""}`}
                        placeholder="Enter your full name"
                      />
                      <img src={Users1} alt="img" />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Email</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        className={`   "is-invalid" : ""}`}
                        placeholder="Enter your email address"
                      />
                      <img src={MailIcon} alt="img" />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={eye ? "password" : "text"}
                        className={`   "is-invalid" : ""}`}
                        placeholder="Enter your password"

                        // className="pass-input"
                      />
                      <span
                        onClick={onEyeClick}
                        className={`fas toggle-password ${
                          eye ? "fa-eye-slash" : "fa-eye"
                        } `}
                      />
                    </div>
                  </div>
                  <div className="form-login">
                    <button type="submit" className="btn btn-login">
                      Sign Up
                    </button>
                  </div>
                  <div className="signinform text-center">
                    <h4>
                      Already a user?{" "}
                      <Link to="/login" className="hover-a">
                        Sign In
                      </Link>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
            <div className="login-img">
              <img src={LoginImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
