import React from "react";

/// StyleSheet import ///
import "../../Styles/auth.css";

/// Icons Or Images import ///
import NumberIcon from "../../img/icon/number.svg";


const ForgotPasswordFrom = () => {
  return (
    <>
      <form action="" className="signup-form px-lg-5">
        <div className="form-field mb-3">
          <label for="" className="fs-12 d-block pb-1">
            Enter Mobile Number
          </label>
          <div className="position-relative">
            <img
              src={NumberIcon}
              alt=""
              className="position-absolute ms-3 mt-3 pt-1"
            />
            <input
              type="text"
              placeholder="Mobile Number or Email Address"
              className="ps-5"
              value="+91 7493739290"
            />
          </div>
        </div>

        <button
          type="submit"
          className="custom-btn fs-20  rounded-pill w-100 py-3 mt-3 mb-2"
        >
          Generate OTP
        </button>
        <button
          type="submit"
          className="custom-btn border-bl-btn fs-20 rounded-pill w-100 py-3 mt-3 mb-3"
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordFrom;
