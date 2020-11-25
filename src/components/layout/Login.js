import React from "react";
import rocket from "./img/rocket.png";
import register from "./img/register.png";
import {
  UserOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  LockOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./Login.css";
function Login() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sing In</h2>
            <div className="input-field">
              <i>
                <UserOutlined />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <LockOutlined />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <FacebookOutlined />
              </a>
              <a href="/" className="social-icon">
                <TwitterOutlined />
              </a>
              <a href="/" className="social-icon">
                <GoogleOutlined />
              </a>
              <a href="/" className="social-icon">
                <LinkedinOutlined />
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sing Up</h2>
            <div className="input-field">
              <i>
                <UserOutlined />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <MailOutlined />
              </i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i>
                <LockOutlined />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <FacebookOutlined />
              </a>
              <a href="/" className="social-icon">
                <TwitterOutlined />
              </a>
              <a href="/" className="social-icon">
                <GoogleOutlined />
              </a>
              <a href="/" className="social-icon">
                <LinkedinOutlined />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem consectetur adipisicing elit. Velit necessitatibus officiis
              repudiandae est deserunt?
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign Up
            </button>
            </div>
            <img src={rocket} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem consectetur adipisicing elit. Velit necessitatibus officiis
              repudiandae est deserunt?
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign Up
            </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
      </div>
    </div>
  );
}
export default Login;
