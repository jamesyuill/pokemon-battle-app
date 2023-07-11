import UserPokemonCard from './UserPokemonCard';
import CompPokemonCard from './CompPokemonCard';
import RevealStatsBtn from './RevealStats';
import FooterBar from './FooterBar';


const Gym = ({ revealStats, newPokemonSearch })=>{
    
    return <div className='gym-div'>
        <UserPokemonCard newPokemonSearch={newPokemonSearch}/>
        <div className='versus'>VS</div>
        <CompPokemonCard revealStats={revealStats}/>
        
        </div>
}

export default Gym;