import React from "react";
import rocket from "./img/rocket.svg";
import register from "./img/register.svg";
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
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
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
              <a href="#" className="social-icon">
                <i>
                  <FacebookOutlined />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <TwitterOutlined />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <GoogleOutlined />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <LinkedinOutlined />
                </i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
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
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i>
                <LockOutlined />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i>
                  <FacebookOutlined />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <TwitterOutlined />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <GoogleOutlined />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i>
                  <LinkedinOutlined />
                </i>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={rocket} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Login;
