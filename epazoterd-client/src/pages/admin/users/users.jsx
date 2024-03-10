import React from 'react'
import { useState, useEffect } from 'react'
import { getUsers, deleteUser } from '../../../api'
import { FaChevronCircleLeft } from "react-icons/fa";
import Cookies from 'js-cookie';

function Users() {
  const [users, setUsers] = useState([])
  const [isUserModal, setIsUselModal] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    async function getUsersList() {
      const res = await getUsers()
      const usersData = res.data.users
      setUsers(usersData)
    }

    getUsersList()
  }, [])

  async function submitUser(e){
    e.preventDefault()
    if(username && email && password.length >= 8 && password == confirmPassword){
      try {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("isDelete", true);
        formData.append("adminAccount", true);
        formData.append("status", 'INTERNAL');
    
        let newUser = fetch('http://localhost:8000/api/auth/register', {
          credentials: "include",
          headers: { "X-CSRFToken": Cookies.get("csrftoken") },
          method: "POST",
          body: formData,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <section className=''>
      <div className='container mx-auto'>
        <div>
          <button onClick={() => setIsUselModal(true)} className='bg-blue-500 px-2 py-1 font-semibold text-blackBodyBg rounded-xl mt-1'>Crear interno</button>
        </div>
        <h2 className='mt-5'>Usuarios</h2>
        <div>
          <table className='mt-5'>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
              <td>{user.id}</td>
              <td className='max-w-[14rem] overflow-x-auto'>
                <span className='p-[0.5rem]'>
                  {user.username}
                </span>
                </td>
              
                <td className='max-w-[20rem] overflow-x-auto'>
                <span className='p-[0.5rem]'>
                  {user.email}
                </span>
                </td>
              
                <td className='max-w-[10rem] overflow-x-auto'>
                <span className='p-[0.5rem]'>
                  {user.status}
                </span>
                </td>
              <td>
                <div className='flex gap-3 items-center justify-between'>
                  <button className='bg-green-500 p-1 rounded-xl text-blackBodyBg font-semibold'>Editar</button>
                  <button onClick={() => deleteUser(user.id)} className='bg-red-500 p-1 rounded-xl text-blackBodyBg font-semibold'>Eliminar</button>
                </div>
              </td>
            </tr>
            ))}
          </table>
        </div>
      </div>
      {isUserModal && <div className='bg-customBlack absolute top-0 bottom-0 right-0 left-0'>
        <button onClick={() => setIsUselModal(false)} className='container mx-auto mt-5'>
          <FaChevronCircleLeft size={'2rem'}/>
        </button>
        <form onSubmit={(e) => submitUser(e)} className='flex flex-col gap-2 max-w-[30rem] p-5 rounded-2xl'>
          <h2>Crear usuario <span className='text-xs bg-secondaryColor px-2 py-[0.1rem] text-customBlack rounded-xl'>Interno</span></h2>
          <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} name="" id="" placeholder='Usuario' className='w-full p-2 rounded-xl bg-blackBodyBg'/>
          </div>
          <div>
            <input type="email" onChange={(e) => setEmail(e.target.value)}  name="" id="" placeholder='Correo' className='w-full p-2 rounded-xl bg-blackBodyBg'/>
          </div>
          <div>
            <input type="text" name="" id="" placeholder='Codigo' className='w-full p-2 rounded-xl bg-blackBodyBg'/>
            <span className='text-sm'>Enviar codigo a:</span>
          </div>
          <div>
            <input type="password"  onChange={(e) => setPassword(e.target.value)}  name="" id="" placeholder='Contraseña' className='w-full p-2 rounded-xl bg-blackBodyBg'/>
          </div>
          <div>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}  name="" id="" placeholder='Confirmar ontraseña' className='w-full p-2 rounded-xl bg-blackBodyBg'/>
          </div>
          <input type="submit" value='Crear' className='p-1 cursor-pointer bg-mainColor rounded-2xl font-semibold text-customBlack'/>
        <span className='text-secondaryColor text-xs mt-3'>Nota: Los usuarios creados seran usuarios internos, por lo que tendran acceso de administrador, para crear un usuario no interno, debe de realizarlo desde la pagina de registro fuera de /admin</span>
        </form>
      </div>}
    </section>
  )
}

export default Users