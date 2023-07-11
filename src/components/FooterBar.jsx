import NewBattle from './NewBattle';
import RevealStatsBtn from './RevealStats';

const FooterBar = ({ revealStats, setRevealStats })=>{
    return <footer>
        <RevealStatsBtn revealStats={revealStats} setRevealStats={setRevealStats}/>
        <NewBattle />
    </footer>
}

export default FooterBar;