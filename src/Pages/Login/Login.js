import React from "react";
import Header from "../../Components/auth/Header";
import AuthContainer from "../../Components/auth/AuthContainer";
import LoginForm from "../../Components/auth/LoginForm";

const Login = () => {
  return (
    <div className="wrapper login-bg position-relative">
      <Header />
      <AuthContainer
      mainheading="Login to Better Solutions"
      subheading="Welcome Back!"
      componentform={<LoginForm />}
      />
    </div>
  );
};

export default Login;
