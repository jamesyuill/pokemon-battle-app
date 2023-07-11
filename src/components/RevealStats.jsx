

const RevealStatsBtn = ({ revealStats, setRevealStats })=>{


    function handleClick(){
        if (revealStats) {
            setRevealStats(false)
        }   else {
            setRevealStats(true)
        }
    }


    return <button className='reveal-stats-btn' onClick={handleClick}>reveal stats</button>
}

export default RevealStatsBtn;