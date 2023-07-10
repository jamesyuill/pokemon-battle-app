


const SearchPokemon = ({ newPokemonSearch, setNewPokemonSearch })=>{

    function handleChange(event){
        setNewPokemonSearch(event.target.value)
    }


function handleSubmit(event){
    event.preventDefault()
    // setNewPokemonSearch(event.target.value)
}


    return <form id="search-pokemon" onSubmit={handleSubmit}>
        <label htmlFor="search">pokémon: </label>
        <input id="search" type="text" value={newPokemonSearch} onChange={handleChange}></input>
        <button>search!</button>
    </form>
}

export default SearchPokemon;