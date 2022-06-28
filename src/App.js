import React, { useEffect, useState } from "react";
import "./App.css";
import MainApp from "./app/index";

//Employee CRUD
import Dashboard from "./app/routes/Dashboard";
import NewEmployee from "./app/routes/Create";
import ViewEmployee from "./app/routes/View";
import EditEmployee from "./app/routes/Edit";


import Preferences from "./app/routes/Preferences";
import NoContentView from "./app/routes/Errors/NoContent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route path="employees" element={<MainApp />}>
              <Route index element={<Dashboard />} />
              <Route exact path="create" element={<NewEmployee />} />
              <Route exact path=":id" element={<ViewEmployee />} />
              <Route exact path=":id/edit" element={<EditEmployee />} />
            </Route>
            <Route path="*" element={<NoContentView />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
