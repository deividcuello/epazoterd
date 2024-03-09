import React from 'react'

function Contact() {
  return (
    <section className='container mx-auto min-h-[calc(100vh-141.97px-38.73px)]'>
        <div className='container mx-auto max-w-[50rem] mt-5'>
                <h2>Ponte en contacto con nosotros con un<span className='from-[#01AA55] via-white to-[#F62E2C] bg-gradient-to-r bg-clip-text text-transparent font-dancing-script text-3xl'> EpaMensaje</span> 😋</h2>
                <form className='[&>*]:w-full w-full [&>*]:mt-2'>
                    <div>
                        <input type="text" placeholder='Nombre' className='w-full p-2 rounded-xl bg-customBlack'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Correo' className='w-full p-2 rounded-xl bg-customBlack'/>
                    </div>
                    <div>
                        <textarea placeholder='Mensaje' className='w-full min-h-32 p-2 rounded-xl bg-customBlack resize-none'></textarea>
                    </div>
                    <input type='submit' value='Enviar' className='bg-yellow w-full text-customBlack p-2 font-bold rounded-xl cursor-pointer'/>
                </form>
            </div>
    </section>
  )
}

export default Contact