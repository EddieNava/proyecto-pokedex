import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import BannerPrincipal from '../../assets/BannerPrincipal.jpg'


const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemons)

  return (
   
    <div>
      <header>
        <img src={BannerPrincipal}/>
      </header>
      <h1>Pokedex</h1>
      <h2>Hola {nameUser}, Bienvenid@ a la Pokedex </h2>
      <div className='gridpok'>
      {
        pokemons?.map(pokemon => (
          <PokeCard 
            key={pokemon.url}
            url={pokemon.url}
          />
        ))
      }
      </div>
    </div>
    
  )
}

export default PokedexScreen