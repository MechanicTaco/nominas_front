import SecureLS from "secure-ls";
import { sendRequest } from "./utils";

let ls = new SecureLS({ encodingType: "aes" });

const authUser = () => (ls.get("token") ? true : false);

const getToken = () => (ls.get("token") ? "Bearer " + ls.get("token") : false);

const authorizationHeader = (token) => ({
  headers: {
    Authorization: token || getToken(),
  },
});

const login = async (data) => {
  ls.clear();
  data = JSON.stringify(data);

  const route = `/auth/login`,
    request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
      },
      body: data,
    };
  const response = await sendRequest(route, request);
  if (!!response.access_token) {
    console.log(response.access_token);
    ls.set("token", response.access_token);
  }
  return { success: !!response.access_token };
};

const signup = async (data) => {
  ls.clear();
  data = JSON.stringify(data);

  const route = `/auth/signup`,
    request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
      },
      body: data,
    };
  const response = await sendRequest(route, request);
  return { success: !!response.success };
};

const logout = () => {
  ls.clear();
};

export default {
  authUser,
  getToken,
  authorizationHeader,
  login,
  signup,
  logout,
};
