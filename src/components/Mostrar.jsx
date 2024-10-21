import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VisualizacionInic from './VisualizacionInic'

const Mostrar = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75] lg:ml-0'>
      <Routes>
        <Route path='/' element={<VisualizacionInic/>} />
      </Routes>
    </div>
  )
}

export default Mostrar
