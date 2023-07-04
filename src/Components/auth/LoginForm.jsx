import React from "react";

/// StyleSheet import ///
import "../../Styles/auth.css";

/// Icons Or Images import ///
import Emailicon from "../../img/icon/email.svg";
import PasswordIcon from "../../img/icon/key.svg";


const LoginForm = () => {
  return (
    <>
      <form action="" class="signup-form px-lg-5">
        <div class="form-field mb-3">
          <label for="" class="fs-12 d-block pb-1">
            E-mail
          </label>
          <div class="position-relative">
            <img
              src={Emailicon}
              alt=""
              class="position-absolute ms-3 mt-3 pt-1"
            />
            <input
              type="text"
              placeholder="Mobile Number or Email Address"
              class="ps-5"
              value="abc123@gmail.com"
            />
          </div>
        </div>

        <div class="form-field mb-3">
          <label for="" class="fs-12 d-block pb-1">
            Password
          </label>
          <div class="position-relative">
            <img
              src={PasswordIcon}
              alt=""
              class="position-absolute ms-3 mt-3 pt-1"
            />
            <input
              type="password"
              placeholder="Mobile Number or Email Address"
              className="ps-5 valid-password"
              value="btrhtyjy"
            />
          </div>
        </div>

        <div class="form-field mb-4">
          <div className="d-flex align-items-center justify-content-between ">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                id="remember"
                className="align-middle"
                checked
              />
              <label for="remember" className="fs-12 ">
                Remember me
              </label>
            </div>
            <a href="#" className="forgot-link fs-10 text-decoration-underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="custom-btn fs-20 border-0 rounded-pill w-100 py-3 mt-3 mb-3"
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
