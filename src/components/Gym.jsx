import UserPokemonCard from './UserPokemonCard';
import CompPokemonCard from './CompPokemonCard';


const Gym = ({ newPokemonSearch })=>{
    
    return <div className='gym-div'>
        <UserPokemonCard newPokemonSearch={newPokemonSearch}/>
        <div className='versus'>VS</div>
        <CompPokemonCard />
        </div>
}

export default Gym;