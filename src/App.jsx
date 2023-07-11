import Header from './components/Header'
import Gym from './components/Gym'
import './App.css'
import SearchPokemon from './components/SearchPokemon'
import { useState } from 'react';
import FooterBar from './components/FooterBar';
import Instructions from './components/Instructions';

function App() {


  const [ newPokemonSearch, setNewPokemonSearch] = useState('mew')
  const [ revealStats, setRevealStats ] = useState(false)



  return <>
    <Header />
    <SearchPokemon newPokemonSearch={newPokemonSearch} setNewPokemonSearch={setNewPokemonSearch}/>
    <Instructions />
    <Gym revealStats={revealStats} newPokemonSearch={newPokemonSearch}/>
  
    <FooterBar revealStats={revealStats} setRevealStats={setRevealStats}/>
  </>
}

export default App
