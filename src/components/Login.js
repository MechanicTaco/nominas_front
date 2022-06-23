import React, { useEffect } from "react";
import storage from "../storage";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login(props) {
  const {
    register,
    handleSubmit,
    errors,
    watch,
    setValue,
    getValues,
    control,
  } = useForm({
    defaultValues: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const data = {
      ...values,
      remember_me: true,
    };
    const response = await api.login(data);
    if (response.success)
      return navigate("/app/preferences", { replace: true });
  };

  return (
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column" >
        <div class="input-group flex-nowrap my-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="addon-wrapping"
            name="email"
            {...register("email")}
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
          <i className="bi bi-lock-fill"></i>
          </span>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="addon-wrapping"
            name="password"
            {...register("password")}
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <button className="btn btn-link" onClick={() => navigate("/signup", { replace: true })}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
