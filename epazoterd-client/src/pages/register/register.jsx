import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <section className='container mx-auto min-h-[calc(100vh-141.97px-38.73px)] pb-5 mt-5'>
            <Link to='/' className='bg-blue-500 py-1 px-2 text-blackBodyBg font-semibold rounded-xl'>Ir a homepage</Link>
            <div className='container mx-auto max-w-[35rem] mt-16'>
                <h2 className='px-10 text-center mb-5'>Registrar</h2>
                <div>
                    <form className='[&>*]:w-full w-full [&>*]:mt-2 p-10 rounded-xl bg-customBlack'>
                        <div className='flex justify-center items-center'>
                            <img src="/logo.png" alt="" className='w-60' />
                        </div>
                        <div>
                            <input type="text" placeholder='Nombre' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="text" placeholder='Correo' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="text" placeholder='Codigo de confirmacion' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                            <span className='text-red-500 text-sm'>Enviar codigo a: </span>
                        </div>
                        <div>
                            <input type="password" placeholder='Contraseña' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <div>
                            <input type="password" placeholder='Confirmar contraseña' className='w-full p-2 rounded-xl bg-blackBodyBg' />
                        </div>
                        <input type='submit' value='Registrar' className='bg-yellow w-full text-customBlack p-2 font-bold rounded-xl cursor-pointer' />
                    </form>
                    <Link to='/login' className='text-blue-500 text-sm mt-3 text-end block'>Iniciar sesion</Link>
                </div>
            </div>
        </section>
    )
}

export default Register