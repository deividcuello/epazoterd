import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function submitUser(e){
        e.preventDefault()
        if(username && email && password && password == confirmPassword){
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
            }).then(res => res.ok ? toast.success(`Usuario ${username} creado`, {
                position: "top-center"
              }) : toast.error(`El usuario o correo ya existe`, {
                position: "top-center"
              }))
          } catch (error) {
            toast.error(`Hubo un error`, {
                position: "top-center"
              })
          }
        } else{
            toast.error(`Hubo un error`, {
                position: "top-center"
              })
        }
      }

    return (
        <section className='container mx-auto min-h-[calc(100vh-141.97px-38.73px)] pb-5 mt-5'>
            <div className='flex flex-col items-center'>
                <h2 className='mb-4'>Registrate</h2>
                <div className='bg-customBlack max-w-[35rem] rounded-2xl px-4'>
                    <form onSubmit={(e) => submitUser(e)} className='flex flex-col gap-2 max-w-[30rem] p-5 rounded-2xl'>
                        <img src="/logo.png" alt="" className=' w-36 mx-auto' />
                        <div>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} name="" id="" placeholder='Usuario' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='Correo' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="text" name="" id="" placeholder='Codigo' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                            <span className='text-sm text-red-500'>Enviar codigo a:</span>
                        </div>
                        <div>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder='Contraseña' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} name="" id="" placeholder='Confirmar ontraseña' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <input type="submit" value='Crear' className='p-1 cursor-pointer bg-mainColor rounded-2xl font-semibold text-customBlack' />
                    </form>
                </div>
                <Link to='/login' className='text-sm py-1 px-2 text-blue-500 font-semibold rounded-xl'>Ir a Iniciar sesion</Link>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Register