import React ,{useState} from 'react'
import {PlayerGrid} from './components/PlayerGrid'
import { SelectPage } from './components/SelectPage'
import logo from './images/nba.png'


export const NBApp = () => {
    const [page, setPage] = useState("1");
    return (
        <div className="todo">
            <img src={logo} alt="nba logo" className="logo"/>
            <h1>Player List</h1>
            <p>Page: {page} of 33</p>
            <SelectPage setPage={setPage} />
            <hr></hr>
            <PlayerGrid page={page} />
        </div>
    )
            }


