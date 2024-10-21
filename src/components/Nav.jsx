import React, { useState } from 'react'
import { assets, songsData } from '../assets/assets'
import { useForm } from 'react-hook-form';



const Nav = () => {
    const [formPremium, setFormPremium] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()

      const handleExploreClick = () => {
        setFormPremium(true);
    };

    const onSubmit = (data) =>{
      alert("Formulario enviado con eexito")
    }
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
          <div className='flex items-center gap-2'>
              <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
              <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
          </div>
          <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer' onClick={handleExploreClick}>Explore Premium KodigoMusic</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Instale la App KodigoMusic</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>JB</p>
          </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl'>Todo</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>

      {formPremium && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-black w-[30%] p-8 rounded-lg">
                 <h2 className="text-xl text-yellow-200 font-bold mb-4">Suscríbete a Premium</h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-4">
                          <label className="block py-3 text-gray-700">Nombre:</label>
                          <input
                              className="w-full p-2 border rounded text-black"
                              type="text"
                              placeholder="Ingresa tu nombre" 
                              {...register('nombre', { required: 'El nombre es obligatorio' })}/>
                              {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                      </div>
                      <div className="mb-4">
                          <label className="block py-3 text-gray-700">Correo electrónico:</label>
                          <input
                              className="w-full p-2 border text-black rounded"
                               type="email"
                               placeholder="Ingresa tu correo"
                               {...register('email', {
                                  required: 'El correo es obligatorio',
                                   pattern: {
                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                       message: 'Correo no válido'
                                      }
                                    })}/>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                                Suscribirse
                            </button>
                  </form>
                  <button
                        className="mt-4 text-red-500"
                        onClick={() => setFormPremium(false)}>
                        Cerrar
                  </button>
              </div>
          </div>
            )}
    </>
  )
}

export default Nav
