import UserPokemonCard from './UserPokemonCard';
import CompPokemonCard from './CompPokemonCard';
import { useState } from 'react';

const Gym = ()=>{

    const [ userPokemon, setUserPokemon ] = useState('bulbasaur')

    



    return <div className='gym-div'>
        <UserPokemonCard />
        <CompPokemonCard />
        </div>
}

export default Gym;