import React, {useState} from 'react'
import { PlayerGrid } from './PlayerGrid';

export const NBApp = () => {

    const [players, setPlayers] = useState(["jordan","bird"]);
    
    return (
        <div>
            <h1>NBA</h1>
            <ul>
                {
                players.map(player=>(
                    <PlayerGrid key={player} player={player} />
                ))
                }
            </ul>
        </div>
    )
            }