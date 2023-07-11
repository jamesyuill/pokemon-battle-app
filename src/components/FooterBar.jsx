import RevealStatsBtn from './RevealStats';

const FooterBar = ({revealStats, setRevealStats })=>{
    return <footer>
        <RevealStatsBtn revealStats={revealStats} setRevealStats={setRevealStats}/>

    </footer>
}

export default FooterBar;