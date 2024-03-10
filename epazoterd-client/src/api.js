import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// const client = axios.create({
//     baseURL: "http://localhost:8000"
//   })

export const checkLogin = () => {
  return axios.get("http://localhost:8000/api/auth/user");
};

export const getUsers = () => {
  return axios.get("http://localhost:8000/api/auth/users");
};

export const deleteUser = (id) => {
  return fetch(`http://localhost:8000/api/auth/users/${id}/`, {
      credentials: 'include',
      headers: {"X-CSRFToken": Cookies.get("csrftoken")},
      method: "DELETE",
    }).then(res => window.location.reload(false))
}