import React from 'react';
import { PlayerItem } from './PlayerItem';
import { useState, useEffect } from "react";
import {getDataPlayers} from '../helpers';
import photoPlayer from '../images/nba.png'


export const PlayerGrid = ({page}) => {
    const [players, setPlayers] = useState([]);
    useEffect( ()=>{ 
    getDataPlayers(page).then((info)=>{
        info.map((player)=>player.photo=photoPlayer);
        setPlayers(info);
    })
},[page]);
    return (
        <>

            <ul>
            <li className="names">Photo</li>
            <li className="names">Player</li>
            <li className="names">Team</li>
            <li className="names">Conference</li>
            <li className="names">Division</li>
          </ul>
            <div>
            { players.map((player)=>{
            return(
                <PlayerItem key={player.id} player={player}/>)
            })}
            </div>
        </>
    )

        }