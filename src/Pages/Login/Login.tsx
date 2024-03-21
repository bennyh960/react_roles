import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-form-wrapper">
        <div className="login_title">
          <div className="login_title_primary">
            <span>
              <img
                width={50}
                height={50}
                alt="boi_logo"
                src="https://www.boi.org.il/media/fb5ghk1h/logo-bank-of-israel-2-color.png"
              />
            </span>
            <span>
              <h1>BOI</h1>
            </span>
          </div>
          <div className="login_title_secondary">BOI Sandbox</div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
