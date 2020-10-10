


export const getDataPlayers= async() =>{
    const url=`https://www.balldontlie.io/api/v1/players`;
    const res= await fetch(url);
    const {data}= await res.json();

    /* console.log(data); */

    const players=data.map(player=>{
        return{
            firstname:player.first_name,
            surname:player.last_name,
            position:player.position,
            team:player.team.full_name,
            conference:player.team.conference,
            division:player.team.division
        }
    })
    /* console.log(players) */
    return players;
    }



