import React from "react";
import { useNavigate } from "react-router-dom";

const NoAuth = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/login', {replace: true})
    }

  return (
    <>
      <div>NoAuth</div>
      <p>You must be logged in to see this page</p>
      
      <button onClick={handleOnClick}>Go to Login</button>
    </>
  );
};

export default NoAuth;
