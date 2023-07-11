import { useEffect, useState } from 'react'
import axios from 'axios'
import compareResults from '../utils/compareResults.js'

const CompPokemonCard = ({userWeight, compWeight, setCompWeight , revealStats})=>{
    const [ isError, setIsError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)
 

//Computer Pokemon ----------------------------------
const [ compPokemon, setCompPokemon ] = useState([])
const randomPokemon = Math.round(Math.random() * 1000)
useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(({data})=>{
        setCompPokemon(data)
        setCompWeight(data.weight)
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
const name = compPokemon.name
const weightTag = document.getElementById('comp-weight')




    if (revealStats) {
        weightTag.innerText = `I weigh ${compWeight}kg`
        console.log(userWeight,'<--user', compWeight,'<--comp')
        setTimeout(()=>{
            compareResults(userWeight, compWeight)
        }, 2000)
    } else {
        
    }

    return <div id="comp-card" className='comp-card'>
    <h2>{name}</h2>
    <p className='card-p'>computer's pokemon</p>
    <img src={compPokemonImageURL}></img>
    <p className='cardweight-p' id="comp-weight">"you think you're heavy bro?"</p>
    {/* <p className='card-p' id="comp-height"></p> */}
</div>
}

export default CompPokemonCard;