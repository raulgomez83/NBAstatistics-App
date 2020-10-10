import React from 'react';
import { PlayerItem } from './PlayerItem';
import { useState,useEffect } from "react"
import {getDataPlayers} from '../helpers'


export const PlayerGrid = () => {
    const [players, setPlayers] = useState({data:[]});
    useEffect(()=>{
    getDataPlayers().then((info)=>{
        setPlayers({data:info});
    })
},[]);

const results=players.data


    return (
        <>
            <h3>Player</h3>
            <div>
            { results.map((result)=>{
            return(
                <PlayerItem key={result.surname} player={result}/>)
            })}
            </div>
        </>
    )

        }