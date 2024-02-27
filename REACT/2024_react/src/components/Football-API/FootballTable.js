import React, { useEffect } from 'react'

// Alt + Shift + F

export default function FootballTable() {
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((result) => {
            console.log("Hat funktioniert Teil 1")
            result.json().then((data) => {

                console.log(data)
            })
        })
    }, [])

    return (
        <div className='grid' id='tabelContent'>
            Football Table
        </div>
    )
}