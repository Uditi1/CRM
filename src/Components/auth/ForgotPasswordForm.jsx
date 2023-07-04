import React from "react";

/// StyleSheet import ///
import "../../Styles/auth.css";

/// Icons Or Images import ///
import NumberIcon from "../../img/icon/number.svg";


const ForgotPasswordFrom = () => {
  return (
    <>
      <form action="" class="signup-form px-lg-5">
        <div class="form-field mb-3">
          <label for="" class="fs-12 d-block pb-1">
            Enter Mobile Number
          </label>
          <div class="position-relative">
            <img
              src={NumberIcon}
              alt=""
              class="position-absolute ms-3 mt-3 pt-1"
            />
            <input
              type="text"
              placeholder="Mobile Number or Email Address"
              class="ps-5"
              value="+91 7493739290"
            />
          </div>
        </div>

        <button
          type="submit"
          class="custom-btn fs-20  rounded-pill w-100 py-3 mt-3 mb-2"
        >
          Generate OTP
        </button>
        <button
          type="submit"
          class="custom-btn border-bl-btn fs-20 rounded-pill w-100 py-3 mt-3 mb-3"
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordFrom;
