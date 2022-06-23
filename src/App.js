import React, { useEffect, useState } from "react";
import "./App.css";
import MainApp from "./app/index"
import Dashboard from "./app/routes/Dashboard";
import Preferences from "./app/routes/Preferences";
import NoContentView from "./app/routes/Errors/NoContent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from "react-router-dom";

function App(props) {

  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route path="app" element={<MainApp />} >
              <Route
                path="dashboard"
                element={<Dashboard />}
              />
              <Route
                path="preferences"
                element={<Preferences />}
              />
            </Route>
              <Route path="*" element={<NoContentView />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
