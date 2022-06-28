import React, { useEffect, useState } from "react";
import Form from "../../../components/EmployeeForm";
import employeeApi from "../../../services/employees.js";
import { useParams } from "react-router-dom";

const NewEmployee = (props) => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await employeeApi.getSingleEmployee(id);
    if (!!response) {
      setData(response);
    }
  };

  const onSubmit = async (values) => {
    const _data = {
        ...values,
        active: data.active
    }
    const response = await employeeApi.updateEmployee(_data, id);
    if (!!response) {
      console.log("Success");
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-start">
            <h1>Edit EEmployee</h1>
            <a className="btn btn-link" href="/employees">
              Go Back
            </a>
          </div>
          <button className="btn btn-outline-secondary">Log out</button>
        </div>
        {!!data && (
          <div className="row card mt-4">
            <Form data={data} onSubmit={onSubmit} />
          </div>
        )}
      </div>
    </>
  );
};

export default NewEmployee;
