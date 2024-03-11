import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cookies from 'js-cookie'
import { getUsers } from './api.js'
import { useLocation } from 'react-router-dom';

async function checkAdmin() {
  const location = useLocation()
  try {
    const res = await getUsers()
    if(res.data.count == 0){
      let formData = new FormData();
      formData.append("email", 'epazote-admin@gmail.com');
      formData.append("username", 'epazote');
      formData.append("password", 'adminadmin');
      formData.append("isDelete", false);
      formData.append("adminAccount", true);
      formData.append("status", 'INTERNAL');
  
      let newUser = fetch('http://localhost:8000/api/auth/register', {
        credentials: "include",
        headers: { "X-CSRFToken": Cookies.get("csrftoken") },
        method: "POST",
        body: formData,
      })
    }
  } catch (error) {
    console.log('error')
  }
}


checkAdmin()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
