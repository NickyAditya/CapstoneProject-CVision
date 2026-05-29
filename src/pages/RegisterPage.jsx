import React from "react";
import { Link, useNavigate } from "react-router-dom";

import RegisterSection from "../components/sections/RegisterSection";

import "../components/sections/RegisterSection.css";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(
    userData
  ) {
    console.log(userData);

    /* SIMULASI REGISTER */
    alert("Register berhasil!");

    navigate("/");
  }

  return (
    <div className="register-page-container">
      <section className="register-page">
        {/* CARD */}
        <div className="register-card">
          <h2>Create Account 🚀</h2>

          <p className="register-description">
            Register to access CV analysis and
            personalized career recommendations.
          </p>

          <RegisterSection
            register={onRegisterHandler}
          />

          <p className="back-to-login">
            Already have an account?
            <Link to="/login">
              {" "}Login here
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;