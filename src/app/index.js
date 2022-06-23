import React from "react";
import { Outlet } from "react-router-dom";
import api from "../services/api"

import NoAuthView from "./routes/Errors/NoAuth";

const MainApp = (props) => {

  return (
    <div className={`app-container`}>
      <div className="app-main-container">
        {api.authUser() ?
        <Outlet />
        :
        <NoAuthView />
        }
      </div>
    </div>
  );
};

export default MainApp;
