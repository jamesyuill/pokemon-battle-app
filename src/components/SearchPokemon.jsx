


const SearchPokemon = ({ newPokemonSearch, setNewPokemonSearch })=>{

    function handleChange(event){
        setNewPokemonSearch(event.target.value)
    }


function handleSubmit(event){
    setNewPokemonSearch(newPokemonSearch)
    console.log(newPokemonSearch, 'handleSubmit newPokemonSearch')
    event.preventDefault()
}


    return <form id="search-pokemon" onSubmit={handleSubmit}>
        <label htmlFor="search">pokémon: </label>
        <input name="searchpokemon" id="search" type="text" value={newPokemonSearch} onChange={handleChange}></input>
        <button>search!</button>
    </form>
}

export default SearchPokemon;