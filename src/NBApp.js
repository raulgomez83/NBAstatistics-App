import React ,{useState} from 'react'
import {PlayerGrid} from './components/PlayerGrid'
import { SelectPage } from './components/SelectPage'


export const NBApp = () => {
    const [page, setPage] = useState("")

    return (
        <div>
            <h1>NBA</h1>
            <p>Page: {page}</p>
            <SelectPage setPage={setPage} />
            <hr></hr>
            <PlayerGrid page={page}/>
        </div>
    )
            }


