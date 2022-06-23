import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const logOut = () => {
    api.logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Dashboard</h1>
          <button className="btn btn-outline-secondary" onClick={logOut}>
            Log out
          </button>
        </div>
        <div className="row">
          <table class="table table-dark table-hover p-4 rounded-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className="ltr">Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
