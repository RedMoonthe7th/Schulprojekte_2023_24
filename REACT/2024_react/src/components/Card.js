import React from 'react'

export default function Card({name, description, imageUrl}) {
  return (
    <div className='grid grid-cols-2 h-40'>
        <div className='p-4'>
          <h2 className='font-bold text-xl'>{name}</h2>
          <h4>{description}</h4>
        </div>
        <div className='w-full'>
          <img src={imageUrl} className='object-cover w-full h-full'></img>
        </div>
    </div>
  )
}
