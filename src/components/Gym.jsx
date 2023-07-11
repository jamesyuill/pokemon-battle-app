import UserPokemonCard from './UserPokemonCard';
import CompPokemonCard from './CompPokemonCard';
import { useState } from 'react';



const Gym = ({ revealStats, newPokemonSearch})=>{
    const [ userWeight, setUserWeight ] = useState('')
    const [ compWeight, setCompWeight ] = useState('')

    
    return <div className='gym-div'>
        <UserPokemonCard userWeight={userWeight} setUserWeight={setUserWeight} newPokemonSearch={newPokemonSearch}/>
        <div className='versus'>VS</div>
        <CompPokemonCard userWeight={userWeight} compWeight={compWeight} setCompWeight={setCompWeight} revealStats={revealStats}/>
        
        </div>
}

export default Gym;