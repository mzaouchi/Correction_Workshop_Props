import player from "../player"
import PlayerCard from "./PlayerCard"

const PlayerList=()=>{
    return(
        <div>
            <h2>List Player</h2>
            {
                player.map((el,i,t)=> <PlayerCard key={i} el={el}/>)
            }
        </div>
    )
}

export default PlayerList