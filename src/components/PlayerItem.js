import React from "react"
import Proptypes from 'prop-types'

export const PlayerItem=({firstname,surname,position,team,conference,division})=>{
    return(
        <ul>
          <li>{firstname}</li>
          <li>{surname}</li>
          <li>{position}</li>
          <li>{team}</li>
          <li>{conference}</li>
          <li>{division}</li>
        </ul>
    )
}
PlayerItem.propTypes={
    firstname:Proptypes.string.isRequired,
    surname:Proptypes.string.isRequired,
    position:Proptypes.string.isRequired,
    team:Proptypes.string.isRequired,
    conference:Proptypes.string.isRequired,
    division:Proptypes.string.isRequired,
}