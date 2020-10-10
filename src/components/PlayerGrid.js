import React from 'react';
import { PlayerItem } from './PlayerItem';
import { useState, useEffect } from "react"
import {getDataPlayers} from '../helpers'


export const PlayerGrid = ({page}) => {
    const [players, setPlayers] = useState([]);
    useEffect( ()=>{ 
    getDataPlayers(page).then((info)=>{
        setPlayers(info);
    })
},[page]);
    return (
        <>
            <h3>Players</h3>
            <div>
            { players.map((player)=>{
            return(
                <PlayerItem key={player.id} player={player}/>)
            })}
            </div>
        </>
    )

        }