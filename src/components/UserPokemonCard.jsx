import { useEffect, useState } from 'react'
import axios from 'axios'


const UserPokemonCard = ({ userWeight, setUserWeight, newPokemonSearch})=>{
    const [ isError, setIsError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)




    //User Pokemon ----------------------------------
const [ userPokemon, setUserPokemon ] = useState('')
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemonSearch}`)
    .then(({data})=>{
        setUserPokemon(data)
        setUserWeight(data.weight)
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
const name = userPokemon.name



    return <div id="user-card" className='user-card'>
        <h2>{name}</h2>
        <p className='card-p'>your pokemon</p>
        <img src={userPokemonImageURL}></img>
        <p className='cardweight-p'>I weigh precisely {userWeight}kg</p>
        {/* <p className='card-p'>height: {height}ft</p> */}
    </div>
}

export default UserPokemonCard;