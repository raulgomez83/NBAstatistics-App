import React from 'react';
import { PlayerItem } from './PlayerItem';
import { useState, useEffect } from "react";
import {getDataPlayers} from '../helpers';
import {SelectPlayer} from "./SelectPlayer";
import photoPlayer from '../images/nba.png'


export const PlayerGrid = ({page}) => {

    const [players, setPlayers] = useState([]);
    useEffect( ()=>{
    getDataPlayers(page).then((info)=>{
        info.map((player)=>player.photo=photoPlayer);
        setPlayers(info);
    })
},[page]);

const [filteredPlayer, setFilteredPlayer] = useState("");
const handleFilterChange = (event) => {
    setFilteredPlayer(event.target.value)};

const resultFilteredPlayers=players.filter(player=>{
        return player.surname.toLowerCase().includes(filteredPlayer.toLowerCase()) ||
               player.firstname.toLowerCase().includes(filteredPlayer.toLowerCase())||
               player.team.toLowerCase().includes(filteredPlayer.toLowerCase()) ||
               player.conference.toLowerCase().includes(filteredPlayer.toLowerCase())||
               player.division.toLowerCase().includes(filteredPlayer.toLowerCase()) 
    });

console.log(resultFilteredPlayers);
    return (
        <>
            <SelectPlayer handleFilterChange={handleFilterChange} filteredPlayer={filteredPlayer}/>
            <ul>
            <li className="names">Photo</li>
            <li className="names">Player</li>
            <li className="names">Team</li>
            <li className="names">Conference</li>
            <li className="names">Division</li>
          </ul>
            <div>
            { resultFilteredPlayers.map((player)=>{
            return(
                <PlayerItem key={player.id} player={player}/>)
            })}
            </div>
        </>
    )

        }