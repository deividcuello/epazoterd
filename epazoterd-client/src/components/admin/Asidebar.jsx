import React from 'react'
import { NavLink } from 'react-router-dom'


function Asidebar() {

  function submitLogout() {
    return fetch(`http://localhost:8000/api/auth/logout`, {
      credentials: "include",
      method: "POST",
      body: "",
    }).then(res => window.location.href = '/');
  }

  return (
    <aside className='h-screen sticky top-0 w-48'>
      <div className='bg-customBlack h-[calc(100vh-2.5rem)] mt-5 ml-5 p-2 rounded-xl'>
        <div>
          <img src="/logo.png" alt="" className=' w-28 mx-auto'/>
        </div>
        <nav className='mt-5 container mx-auto'>
          <ul>
            <li className='rounded-2xl'><NavLink to='/admin/tablero' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>Tablero</NavLink></li>
            <li className='rounded-2xl'><NavLink to='/admin/usuarios' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>Usuarios</NavLink></li>
              <li className='rounded-2xl'><NavLink to='/admin/reservaciones' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>Reservaciones</NavLink></li>
              <li><button onClick={submitLogout} className='bg-secondaryColor px-2 py-1 rounded-2xl'>Cerrar sesion</button></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Asidebar