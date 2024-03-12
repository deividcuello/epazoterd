import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;


export const checkLogin = () => {
  return axios.get("http://localhost:8000/api/auth/user");
};

export const getUsers = () => {
  return axios.get("http://localhost:8000/api/auth/users");
};

export const getUser = (id) => {
  return axios.get(`http://localhost:8000/api/auth/users/${id}`);
};

export const deleteUser = (id) => {
  return fetch(`http://localhost:8000/api/auth/users/${id}/`, {
      credentials: 'include',
      headers: {"X-CSRFToken": Cookies.get("csrftoken")},
      method: "DELETE",
    }).then(res => window.location.reload(false))
}

export const sendEmail = (url_parameters) => {
  if(url_parameters.code){
      return axios.get(`http://localhost:8000/api/email/send/?subject=${url_parameters.subject}&text=${url_parameters.text}&recipient_list=${url_parameters.recipientList}&code=${url_parameters.code}`)
  }
  return axios.get(`http://localhost:8000/api/email/send/?subject=${url_parameters.subject}&text=${url_parameters.text}&recipient_list=${url_parameters.recipientList}`)
}

export const getBooking = () => {
  return axios.get("http://localhost:8000/api/booking");
};

export const deleteBooking = (id) => {
  return fetch(`http://localhost:8000/api/booking/${id}/`, {
      credentials: 'include',
      headers: {"X-CSRFToken": Cookies.get("csrftoken")},
      method: "DELETE",
    })
}