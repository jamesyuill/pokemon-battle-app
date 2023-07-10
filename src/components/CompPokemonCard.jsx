const CompPokemonCard = ({compPokemon})=>{
// const compPokemonImageURL = compPokemon.sprites.other.dream_world.front_default


    return <div id="comp-card" className='comp-card'>
    <h3>{compPokemon.name}</h3>
    {/* <img src={compPokemonImageURL}></img> */}
</div>
}

export default CompPokemonCard;