


export const getDataPlayers= async(page) =>{

    const url=`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=100`;

   


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
            division:player.team.division,
            id:player.id
        }
    })
    /* console.log(players) */
    return players;
    }



