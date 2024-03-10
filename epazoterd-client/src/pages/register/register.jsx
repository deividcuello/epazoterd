import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleLeft } from 'react-icons/fa'

function Register() {
    return (
        <section className='container mx-auto min-h-[calc(100vh-141.97px-38.73px)] pb-5 mt-5'>
            <Link to='/' className='bg-blue-500 py-1 px-2 text-blackBodyBg font-semibold rounded-xl'>Ir a homepage</Link>
            <div className='flex flex-col items-center'>
                <div className='bg-customBlack max-w-[35rem] rounded-2xl px-4'>
                    <button onClick={() => setIsUselModal(false)} className='container mx-auto mt-5'>
                        <FaChevronCircleLeft size={'2rem'} />
                    </button>
                    <form onSubmit={(e) => submitUser(e)} className='flex flex-col gap-2 max-w-[30rem] p-5 rounded-2xl'>
                        <h2>Crear usuario</h2>
                        <div>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} name="" id="" placeholder='Usuario' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='Correo' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="text" name="" id="" placeholder='Codigo' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                            <span className='text-sm'>Enviar codigo a:</span>
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
            </div>
        </section>
    )
}

export default Register