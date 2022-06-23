import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const Preferences = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const logOut = () => {
    api.logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <h1>Preferences</h1>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

export default Preferences;
