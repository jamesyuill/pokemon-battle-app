const NewBattle = ()=>{
    function handleClick(event){
        window.location.reload()
    }



    return <button className='new-battle-btn' onClick={handleClick}>new battle!</button>
}

export default NewBattle;