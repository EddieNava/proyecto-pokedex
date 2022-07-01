import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import RouteFather from './components/RouteFather'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokeInfo from './components/PokeInfo'
import BannerPrincipal from './img/BannerPrincipal.jpg'
import Footer from './components/Footer'
import PokeFilter from './components/PokeFilter'


function App() {

  return (
    <div className="App">
      <header className='headerApp'>
       <img src={BannerPrincipal} alt="Banner Principal" />
      </header>
      <nav className='NavBar'>
        <ul>
          <li><Link className='navtext' to='/'><i class="fa-solid fa-house"></i></Link></li>
        </ul>
      </nav>
      <Routes>
          <Route element={ <RouteFather/> }>
            <Route path='/' element={ <Home/> } />
            <Route path='/pokedex' element={ <Pokedex/> } />
            <Route path='/pokedex/:id' element={ <PokeInfo/> } />
            <Route path='/pokefilter/:type' element={ <PokeFilter/> }/>
          </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
