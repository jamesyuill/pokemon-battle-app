import { useEffect, useState } from 'react'
import axios from 'axios'

const CompPokemonCard = ()=>{
    const [ isError, setIsError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)



//Computer Pokemon ----------------------------------
const [ compPokemon, setCompPokemon ] = useState([])
const randomPokemon = Math.round(Math.random() * 1281)
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(({data})=>{
        console.log(data, '<--Comp Choice')
        setCompPokemon(data)
        setIsLoading(false)
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





const compPokemonImageURL = compPokemon.sprites.other.dream_world.front_default
const weight = compPokemon.weight
const name = compPokemon.name

    return <div id="comp-card" className='comp-card'>
    <h3>{name}</h3>
    <img src={compPokemonImageURL}></img>
    <p>{name} has a weight of {weight}</p>
</div>
}

export default CompPokemonCard;