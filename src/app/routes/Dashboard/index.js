import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import employees from "../../../services/employees";

const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState(null);
  const [informacionActualizada, setInfoActual] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!employeeList && !informacionActualizada) {
      setInfoActual(true);
      getEmployeeList();
    }
  });

  const getEmployeeList = async () => {
    const response = await employees.getEmployees();
    if (!!response) {
      setEmployeeList(response.data);
    }
  };

  const changeStatus = async (id, index) => {
    await employees.manageStatus(id, employeeList[index])
    setInfoActual(false);
    setEmployeeList(null);
  }

  const deleteEmployee = async (id) => {
    await employees.deleteEmployee(id)
    setInfoActual(false);
    setEmployeeList(null);
  }

  const ActionsButton = (props) => {
    const { id, status, index } = props;
    return (
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ...
        </button>
        <div className={`dropdown-menu`} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href={`/employees/${id}`}>
            Details
          </a>
          <a className="dropdown-item" href={`/employees/${id}/edit`}>
            Edit
          </a>
          <a className="dropdown-item" href="#" onClick={() => changeStatus(id, index)}>
            {status === "active" ? "Set as inactive" : "Set as active"}
          </a>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <a className="dropdown-item text-danger" href="#" onClick={() => deleteEmployee(id)}>
            Delete
          </a>
        </div>
      </div>
    );
  };

  const logOut = () => {
    api.logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-start">
            <h1>Dashboard</h1>
            <a className="btn btn-primary" href="/employees/create">
              + Add employee
            </a>
          </div>
          <button className="btn btn-outline-secondary" onClick={logOut}>
            Log out
          </button>
        </div>
        <div className="row rounded-3">
          {!!employeeList && (
            <table className="table table-dark table-hover p-4 text-start mt-4">
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((employee, i) => (
                  <tr key={employee.id}>
                    <th scope="row">{employee.employee_code}</th>
                    <td>{`${employee.name} ${employee.father_family_name} ${employee.mother_family_name}`}</td>
                    <td>{employee.status}</td>
                    <td>
                      <ActionsButton
                        id={employee.id}
                        status={employee.status}
                        index={i}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
