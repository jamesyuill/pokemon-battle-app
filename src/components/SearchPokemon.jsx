import { useState } from 'react'



const SearchPokemon = ({ newPokemonSearch, setNewPokemonSearch })=>{

const [ currentInput, setCurrentInput ] = useState('')

    function handleChange(event){
        setCurrentInput(event.target.value)
    }


function handleSubmit(event){
    setNewPokemonSearch(currentInput || 'mew')
    event.preventDefault()
    setCurrentInput('')
}


    return <form className="search-pokemon" id="search-pokemon" onSubmit={handleSubmit}>
        <label htmlFor="search">pokémon: </label>
        <input name="searchpokemon" id="search" type="text" value={currentInput} onChange={handleChange}></input>
        <button className='search-button'>search!</button>
    </form>
}

export default SearchPokemon;