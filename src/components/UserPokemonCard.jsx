


const UserPokemonCard = ({userPokemon})=>{
const userPokemonImageURL = userPokemon.sprites.other.dream_world.front_default





    return <div id="user-card" className='user-card'>
        <h3>{userPokemon.name}</h3>
        <img src={userPokemonImageURL}></img>
    </div>
}

export default UserPokemonCard;