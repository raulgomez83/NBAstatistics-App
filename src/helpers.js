


const getDataPlayers= async() =>{
    const url=`https://www.balldontlie.io/api/v1/players`;
    const res= await fetch(url);
    const {data}= await res.json();

    const player=data.map(statistics=>{
        return{
            firstname:statistics.first_name,
            surname:statistics.last_name,
            position:statistics.position,
            team:statistics.team.full_name,
            conference:statistics.team.conference,
            division:statistics.team.division
        }
    })
    return player;
    }

