import React, { useState } from "react";

/// StyleSheet import ///
import "../../Styles/auth.css";

/// Icons Or Images import ///
import AuthImage from "../../img/login.png";


const AuthContainer = ({mainheading, subheading, componentform}) => {

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 login-left">
          <img src={AuthImage} alt="" />
        </div>
        <div className="col-md-6 login-right">
          <div className="py-5 px-lg-5 d-flex align-items-center w-100 justify-content-center h-100">
            <div className="w-100">
              <h1 className="text-center bold pb-3">{mainheading}</h1>
              <h2 className="text-center fs-20 pb-5">{subheading}</h2>

            {componentform}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
