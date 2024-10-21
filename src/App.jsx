import React from 'react'
import BarraLate from './components/BarraLate'
import Reproductor from './components/Reproductor'
import Mostrar from './components/Mostrar'
import Album from './components/Album'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <BarraLate/> 
          <Mostrar/> 
        
      </div>
      <Reproductor/>
    </div>
  )
}

export default App
