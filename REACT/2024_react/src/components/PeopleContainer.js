import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(()=>{
        fetch("https://65a637af74cf4207b4ef7cd2.mockapi.io/redMoon/Person").then(res => res.json().then(data =>{
            setPeople(data);
            setFilteredPeople(data)
        }))

    },[])

    const filterPeople = (filter) =>{
        let filtered = people.filter(person => person.name.toLowerCase().includes(filter));
        setFilteredPeople(filtered)
    }

    return (
        <div className=''>
            <div className='fixed border mb-4 bg-white w-full h-28 p-6'>
            <input className='border p-4' type="text" placeholder='Search' onChange={(el)=>{
                filterPeople(el.target.value)
            }} ></input>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
                {filteredPeople.map(person => {
                    return <Card name={person.name} description={person.description} imageUrl={person.avatar}/>
                })}
            </div>
        </div>
    )
}
