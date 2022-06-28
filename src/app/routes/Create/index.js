import React from "react";
import Form from "../../../components/EmployeeForm";
import employeeApi from "../../../services/employees.js";

const NewEmployee = () => {
  const onSubmit = async (values) => {
    const data = {
      ...values,
      status: "active",
    };
    const response = await employeeApi.createEmployee(data);
    if (response.success) {
      console.log("Success");
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-start">
            <h1>New Employee</h1>
            <a className="btn btn-link" href="/employees">
              Go Back
            </a>
          </div>
          <button className="btn btn-outline-secondary">Log out</button>
        </div>
        <div className="row card mt-4">
          <Form onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default NewEmployee;
