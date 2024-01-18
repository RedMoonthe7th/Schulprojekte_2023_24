import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        fetch("https://65a637af74cf4207b4ef7cd2.mockapi.io/redMoon/Person").then(res => res.json().then(data =>{
            alert("Success");
            setPeople(data);
        }))

    },[])

    return (
        <div>
            <h1>People</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map(person => {
                    return <Card name={person.name} description={person.description} imageUrl={person.avatar}/>
                })}
            </div>
        </div>
    )
}
