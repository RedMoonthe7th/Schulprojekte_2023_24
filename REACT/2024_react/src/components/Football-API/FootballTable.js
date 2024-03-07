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
        <div className='m-10'>
            <div className='font-bold text-2xl'>Tabelle</div>
            <div className='text-slate-400 text-sm'>Saison</div>
            <div>2023-2024</div>

            <div className='flex justify-between'>
                <div className='w-5 invisible '>Name</div>
                <div className='flex self-center mr-5 bg-slate-300'>
                    <div className='w-5 mr-5'>Sp</div>
                    <div className='w-5 mr-5'>S</div>
                    <div className='w-5 mr-5'>U</div>
                    <div className='w-5 mr-5'>N</div>
                    <div className='w-10 mr-5'>Tore</div>
                    <div className='w-5 mr-5'>D</div>
                    <div className='w-5 mr-5'>P</div>
                </div>
            </div>


            {clubs.map((element) => {
                return <FootballTableItem
                    imageUrl={element.teamIconUrl}
                    name={element.teamName}
                    games={element.matches}
                    wins={element.won}
                    draws={element.draw}
                    losses={element.lost}
                    goals={element.goals}
                    opponentGoals={element.opponentGoals}
                    goalDifference={element.goalDiff}
                    points={element.points}
                />
            })}
        </div>
    )
}
