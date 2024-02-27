import React from 'react'

export default function FootballClubs() {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((result) => {
            setClubs(data);
            console.log("Hat funktioniert Teil 1")
        })
    }, [])

    return (
        <div className='grid'>
                {clubs.map(element => {
                    return <Card name={element.name} description={element.description} imageUrl={element.avatar}/>
                })}
            </div>
    )
}