import React, { useEffect, useState } from 'react'
import FootballClubsItem from './FootballClubsItem';

export default function FootballClubs() {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((result) => result.json().then((data) => {
            setClubs(data);
            console.log("Hat funktioniert Teil 1")

        }));
    }, [])

    return (
        <div className='m-5'>
            <div className='font-bold text-2xl'>Clubsübersicht</div>
            <div className='text-slate-400 text-sm'>Saison</div>
            <div>2023-2024</div>
            <div className='grid grid-cols-3 '>
            {clubs.map((element) => {
                return <FootballClubsItem name={element.teamName} imageUrl={element.teamIconUrl} />
            })}
        </div>

        </div>
        
    )
}