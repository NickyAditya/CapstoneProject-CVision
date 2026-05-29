import React from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginSection from "../components/sections/LoginSection";
import "../components/sections/LoginSection.css";

function LoginPage() {

  const navigate = useNavigate();

  async function onLoginHandler({ email, password }) {

    console.log({
      email,
      password,
    });

    // simulasi login berhasil
    alert("Login berhasil!");

    navigate("/");
  }

  return (
    <div className="login-page-container">
      <section className="login-page">
        {/* CARD */}
        <div className="login-card">
          <h2>Welcome Back 👋</h2>

          <p className="login-description">
            Login to continue your career
            analysis journey.
          </p>

          <LoginSection
            login={onLoginHandler}
          />

          <p className="back-to-register">
            Don't have an account?
            <Link to="/register">
              {" "}Register here
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;