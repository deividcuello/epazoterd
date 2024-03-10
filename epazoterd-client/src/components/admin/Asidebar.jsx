import React from 'react'
import { NavLink } from 'react-router-dom'

function Asidebar() {
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
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Asidebar