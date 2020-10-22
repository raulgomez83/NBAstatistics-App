import React from 'react';


export const SelectPlayer = ({filteredPlayer,handleFilterChange}) => {
    return (
        <div>
            <form>
                <input type="search"
                placeholder="Search a player..."
                value={filteredPlayer}
                onChange={handleFilterChange}
               ></input>
            </form>
        </div>
    )
}
