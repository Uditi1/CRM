import React from "react";
import Header from "../../Components/auth/Header";
import AuthContainer from "../../Components/auth/AuthContainer";
import EnterOtpForm from "../../Components/auth/EnterOtpForm";

const EnterOtp = () => {
  return (
    <div className="wrapper login-bg position-relative">
      <Header />
      <AuthContainer
        mainheading="Forgot password?"
        subheading="Reset it Now!"
        componentform={<EnterOtpForm />}
      />
    </div>
  );
};

export default EnterOtp;
