import React from "react";
import Header from "../../Components/auth/Header";
import AuthContainer from "../../Components/auth/AuthContainer";
import ForgotPasswordFrom from "../../Components/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="wrapper login-bg position-relative">
      <Header />
      <AuthContainer
        mainheading="Forgot password?"
        subheading="Reset it Now!"
        componentform={<ForgotPasswordFrom />}
      />
    </div>
  );
};

export default ForgotPassword;
