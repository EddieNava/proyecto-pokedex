import React from 'react'
import entrenador from '../img/entrenador.png'
import pokeball from '../img/pokeball.png'
import InputHome from './InputHome'

const Home = () => {
  return (
    <div className='home'>
      <img src="https://i.gifer.com/KG12.gif"/>
       <h2>Hello trainer!</h2> 
       <p>Write your name before start</p>
       <div className='form'>
          <InputHome />
       </div>
    </div>
  )
}

export default Home