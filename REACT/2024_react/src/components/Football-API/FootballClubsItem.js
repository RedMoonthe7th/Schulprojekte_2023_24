import React from 'react';
export default function FootballClubsItem({name, imageUrl}) {
    return (
        <div className='shadow '>
            <div className='w-full'>
                <img src={imageUrl} alt='clubLogo' className='object-cover w-full h-full'></img>
            </div>
            <h2 className='font-bold text-xl'>{name}</h2>

        </div>
    )
}