import React from 'react'
import Nav from '../components/Nav'
import { albumsData, songsData } from '../assets/assets'
import Album from './Album'
import ElementoCanc from './ElementoCanc'


const VisualizacionInic = () => {
  return (
    <>
      <Nav/>
      <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Graficos Destacados en KodigoMusic</h1>
          <div className='flex overflow-auto'>
          {albumsData.map((item, index)=>(<Album key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
          </div>
      </div>
      <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Los Mejores Exitos Salvadoreños</h1>
          <div className='flex overflow-auto'>
          {songsData.map((item, index)=>(<ElementoCanc key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>) )}
          </div>
      </div>
    </>
  )
}

export default VisualizacionInic
