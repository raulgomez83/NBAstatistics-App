import React from "react";
import Proptypes from 'prop-types' 

export const PlayerItem=({player})=>{
    return(
          <>
        <ul>

          <li>{player.firstname} {player.surname}</li>
          <li>{player.team}</li>
          <li>{player.conference}</li>
          <li>{player.division}</li>
        </ul>
        </>
    )
}
 PlayerItem.propTypes={
    player:Proptypes.object.isRequired
} 