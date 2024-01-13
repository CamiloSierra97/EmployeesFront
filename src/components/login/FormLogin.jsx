import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ setIsLogged }) => {
  const [showError, setShowError] = useState({
    visibility: "hidden",
  });
  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const passwordValidation = () => {
    setShowError({
      visibility: "hidden",
    });
  };

  const submit = (data) => {
    const URL = "https://employees-service-hnlj.onrender.com/api/v1/auth/login";
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/me");
        setIsLogged(true);
      })
      .catch((err) => {
        setShowError({
          visibility: "visible",
          fontSize: "0.6rem",
          fontWeight: "100",
        });
      });
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login__container">
      <form onSubmit={handleSubmit(submit)} className="login__form">
        <h3 className="login__title">
          Welcome! Enter your email and password to continue
        </h3>
        <div className="login__div-email">
          <label className="login__label" htmlFor="email">
            Enter you email
          </label>
          <input
            {...register("email")}
            className="login__input"
            type="email"
            id="email"
          />
        </div>
        <div className="login__div-password">
          <label className="login__label" htmlFor="password">
            Enter your password
          </label>
          <input
            {...register("password")}
            className="login__input"
            type="password"
            id="password"
          />
          <small style={showError}>Wrong or invalid credentials</small>
        </div>
        <button className="login__btn" onClick={passwordValidation}>
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
