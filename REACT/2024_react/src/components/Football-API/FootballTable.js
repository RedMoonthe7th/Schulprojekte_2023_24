import React, { useEffect, useState } from 'react'
import FootballTableItem from './FootballTableItem';

// Alt + Shift + F

export default function FootballTable() {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => result.json().then((data) => {
            setClubs(data);
            console.log("Hat funktioniert Teil 1")

        }));
    }, [])

    return (
        <div className='mt-26'>
            <div>Funktioniert </div>
            {clubs.map((element) => {
                return <FootballTableItem imageUrl={element.teamIconUrl} name={element.teamName}  />
            })}
        </div>
    )
}
