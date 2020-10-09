

export const getData= async() =>{
    const url=`https://www.balldontlie.io/api/v1/players`;
    const res= await fetch(url);
    const result= await res.json();
    }
getData()