import React from "react";
/*import Proptypes from 'prop-types' */

export const PlayerItem=({player})=>{
    return(
          <>
        <ul>
          <li>{player.firstname}</li>
          <li>{player.surname}</li>
          <li>{player.position}</li>
          <li>{player.team}</li>
          <li>{player.conference}</li>
          <li>{player.division}</li>
        </ul>
        </>
    )
}
/* PlayerItem.propTypes={
    firstname:Proptypes.string.isRequired,
    surname:Proptypes.string.isRequired,
    position:Proptypes.string.isRequired,
    team:Proptypes.string.isRequired,
    conference:Proptypes.string.isRequired,
    division:Proptypes.string.isRequired,
} */