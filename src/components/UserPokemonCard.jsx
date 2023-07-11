import { useEffect, useState } from 'react'
import axios from 'axios'

const UserPokemonCard = ({newPokemonSearch})=>{
    const [ isError, setIsError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)




    //User Pokemon ----------------------------------
const [ userPokemon, setUserPokemon ] = useState('')
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemonSearch}`)
    .then(({data})=>{
        console.log(data, '<--- User Choice')
        setUserPokemon(data)
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err, '<---userPokemon error')
        setIsError(true)
    })
}, [newPokemonSearch])


if (isError) {
    return <p>We got an error yo</p>
}

if (isLoading) {
    return <p>loading...</p>
}



const userPokemonImageURL = userPokemon.sprites.other.dream_world.front_default
const weight = userPokemon.weight
const name = userPokemon.name

    return <div id="user-card" className='user-card'>
        <h3>{name}</h3>

        <img src={userPokemonImageURL}></img>
        <p>{name} has a weight of {weight}</p>
    </div>
}

export default UserPokemonCard;