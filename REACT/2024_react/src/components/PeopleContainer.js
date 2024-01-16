import React, { useEffect } from 'react'
import Card from './Card'

export default function PeopleContainer() {

    useEffect(()=>{
        fetch("https://65a637af74cf4207b4ef7cd2.mockapi.io/redMoon/Person").then(res => res.json().then(data =>{
            alert("Success")
        }))
    },[])

    return (
        <div>
            <h1>People</h1>
            <div className='w-40'>
                <Card name="Grimgor Ironhide" description="Da Boss" imageUrl="https://picsum.photos/200/300"/>
                <Card name="Grimgor Ironhide" description="Da Boss" imageUrl="https://picsum.photos/200/300"/>
                <Card name="Grimgor Ironhide" description="Da Boss" imageUrl="https://picsum.photos/200/300"/>
            </div>
        </div>
    )
}
