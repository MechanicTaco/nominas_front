import React from "react";
import { useNavigate } from "react-router-dom";

const NoAuth = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/login', {replace: true})
    }

  return (
    <>
      <div>404: No Content</div>
      
      <button onClick={handleOnClick}>Go to Login</button>
    </>
  );
};

export default NoAuth;
