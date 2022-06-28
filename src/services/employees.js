import api from './api'
import { sendRequest } from "./utils";

const getEmployees = async () => {
    const { headers } = api.authorizationHeader();
    const route = '/employees'
    const request = {
      method: "GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
      },
    };
    console.log(request);
    return await sendRequest(route, request);
}

const createEmployee = async (data) => {
  data = JSON.stringify(data);
  const { headers } = api.authorizationHeader();
  const route = '/employees'
  const request = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
    body: data
  };
  return await sendRequest(route, request);
} 

const updateEmployee = async (data, id) => {
  data = JSON.stringify(data);
  const { headers } = api.authorizationHeader();
  const route = `/employees/${id}`
  const request = {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
    body: data
  };
  return await sendRequest(route, request);
} 

const getSingleEmployee = async (id) => {
  const { headers } = api.authorizationHeader();
  const route = `/employees/${id}`
  const request = {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
  };
  return await sendRequest(route, request);
} 

const manageStatus = async (id, data) => {
  data = {
    ...data,
    status: data.status === "active" ? "inactive" : "active"
  }
  const { headers } = api.authorizationHeader();
  const route = `/employees/${id}`
  const request = {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
    body: JSON.stringify(data)
  };
  return await sendRequest(route, request);
} 

const deleteEmployee = async (id) => {
  const { headers } = api.authorizationHeader();
  const route = `/employees/${id}`
  const request = {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
  };
  return await sendRequest(route, request);
} 

export default {
    getEmployees,
    createEmployee,
    getSingleEmployee,
    updateEmployee,
    manageStatus,
    deleteEmployee
}