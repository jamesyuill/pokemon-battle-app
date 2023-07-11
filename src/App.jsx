import Header from './components/Header'
import Gym from './components/Gym'
import './App.css'
import SearchPokemon from './components/SearchPokemon'
import { useState } from 'react';

function App() {


  const [ newPokemonSearch, setNewPokemonSearch] = useState('mew')




  return <>
    <Header />
    <SearchPokemon newPokemonSearch={newPokemonSearch} setNewPokemonSearch={setNewPokemonSearch}/>
    <Gym newPokemonSearch={newPokemonSearch}/>
  
  
  </>
}

export default App
