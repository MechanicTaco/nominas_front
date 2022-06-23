import React, { useEffect, useState } from "react";
import storage from '../storage'
import { useForm } from "react-hook-form";
import './styles.css'
import api from '../services/api'
import { useNavigate } from "react-router"; 

export default function Login() {
  
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: "",
  });

  const [errors, setErrors] = useState({});

  const onSubmit = async (values) => {
    setErrors({});
    const data = {
      ...values,
    }
    if(data.c_password === data.password){
      const response = await api.signup(data);
      if(response.success) return navigate('/login', {replace: true});
    } else {
      setErrors({password: "Password doesn't match"})
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="input-group flex-nowrap my-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="bi bi-person"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="name"
            {...register("name")}
          />
        </div>
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
        <div class="input-group flex-nowrap my-2">
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
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
          <i className="bi bi-lock-fill"></i>
          </span>
          <input
            type="password"
            class="form-control"
            placeholder="Confirm password"
            aria-label="Confirm password"
            aria-describedby="addon-wrapping"
            name="c_password"
            {...register("c_password")}
          />
        </div>
        {!!errors.password && <p>{errors.password}</p>}
        <div className="mt-4">
          <button className="btn btn-outline-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
