import React ,{useState} from 'react'
import {PlayerGrid} from './components/PlayerGrid'
import { SelectPage } from './components/SelectPage'


export const NBApp = () => {
    const [page, setPage] = useState("")

    return (
        <div className="todo">
            <div className="logo" ></div>
            <h1>Player List</h1>
        
         {/*    <img src="./images/nba.png" alt="nba logo"/>  */}
            <p>Page: {page} of 33</p>
            <SelectPage setPage={setPage} />
            <hr></hr>
            <PlayerGrid page={page}/>
        </div>
    )
            }


