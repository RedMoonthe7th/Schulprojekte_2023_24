import React from 'react';
export default function FootballTableItem({ imageUrl, name, games, wins, draws, losses, goals, opponentGoals, goalDifference, points }) {
    return (
        <div className='flex m-5 bg-slate-300 justify-between'>
            <div className='flex h-14 self-center'>
                <div className=''>
                    <img src={imageUrl} alt='clubLogo' className='object-cover w-full h-full'></img>
                </div>
                <div className='self-center ml-5'>{name}</div>
            </div>

            <div className='flex self-center mr-5'>
                <div className='w-5 ml-5'>{games}</div>
                <div className='w-5 ml-5'>{wins}</div>
                <div className='w-5 ml-5'>{draws}</div>
                <div className='w-5 ml-5'>{losses}</div>
                <div className='w-5 ml-5'>{goals}</div>
                <div className='w-5'>:{opponentGoals}</div>
                <div className='w-5 ml-5'>{goalDifference}</div>
                <div className='w-5 ml-5'>{points}</div>
            </div>
        </div>
    )
}