import UserPokemonCard from './UserPokemonCard';
import CompPokemonCard from './CompPokemonCard';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Gym = ()=>{

//User Pokemon ----------------------------------
const [ userPokemon, setUserPokemon ] = useState('bulbasaur')
useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(({data})=>{
        console.log(data.name)
        setUserPokemon(data)
    })
}, [])

//Computer Pokemon ----------------------------------
const [ compPokemon, setCompPokemon ] = useState([])
const randomPokemon = Math.round(Math.random() * 1281)
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(({data})=>{
        console.log(data.name)
        setCompPokemon(data)
    })
}, [])



    return <div className='gym-div'>
        <UserPokemonCard userPokemon={userPokemon}/>
        <div className='versus'>VS</div>
        <CompPokemonCard compPokemon={compPokemon}/>
        </div>
}

export default Gym;