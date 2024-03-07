import React from 'react';
export default function FootballClubsItem({name, imageUrl}) {
    return (
        <div className='shadow-md flex m-5 bg-white hover:bg-slate-300'>
            <div className='h-28'>
                <img src={imageUrl} alt='clubLogo' className='object-cover w-full h-full'></img>
            </div>
            <h2 className='self-center ml-4 font-semibold text-xl'>{name}</h2>
        </div>
    )
}