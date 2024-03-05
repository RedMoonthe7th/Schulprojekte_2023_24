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
        <div className='grid grid-rows-4 w-full'>
                {clubs.map((element) => {
                    return <FootballClubsItem name={element.teamName} imageUrl={element.teamIconUrl} />
                })}
            </div>
    )
}