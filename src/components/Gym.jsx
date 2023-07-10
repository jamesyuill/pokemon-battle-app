import UserPokemonCard from './UserPokemonCard';
import CompPokemonCard from './CompPokemonCard';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Gym = ({ newPokemonSearch })=>{
    
const [ isError, setIsError ] = useState(false)
const [ isLoading, setIsLoading ] = useState(true)

//User Pokemon ----------------------------------
const [ userPokemon, setUserPokemon ] = useState('')
console.log(newPokemonSearch, '<---new pokemon search')
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemonSearch}`)
    .then(({data})=>{
        console.log(data.name)
        setUserPokemon(data)
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err, '<---userPokemon error')
        setIsError(true)
    })
}, [newPokemonSearch])

//Computer Pokemon ----------------------------------
const [ compPokemon, setCompPokemon ] = useState([])
const randomPokemon = Math.round(Math.random() * 1281)
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(({data})=>{
        console.log(data.name)
        setCompPokemon(data)
    }).catch((err)=>{
        console.log(err, '<---compPokemon error')
        setIsError(true)
    })
}, [])

if (isError) {
    return <p>We got an error yo</p>
}

if (isLoading) {
    return <p>loading...</p>
}

    return <div className='gym-div'>
        <UserPokemonCard userPokemon={userPokemon}/>
        <div className='versus'>VS</div>
        <CompPokemonCard compPokemon={compPokemon}/>
        </div>
}

export default Gym;