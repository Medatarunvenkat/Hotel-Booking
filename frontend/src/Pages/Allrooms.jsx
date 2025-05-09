import React from 'react'
import {roomsDummyData} from "../assets/assets"
import {useNavigate} from 'react-router-dom'

const Allrooms = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24'>
     <div className='flex flex-col items-start text-left'>
        <h1 className='text-4xl md:text-[40px]'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories.</p>
     </div>

     {roomsDummyData.map((room)=>{
        <div>
            <img onClick={()=>Navigate(`/rooms/${room._id}`)} src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
            <div className='md:w-1/2 flex flex-col gap-2'>
                <p className='text-gray-500'>{room.hotel.city}</p>
                <p className=''>{room.hotel.name}</p>
                <div className='flex items-center'>
                <p className='text-yellow-500 text-lg'>★★★★★</p>
                    <p className='ml-2'>
                        200+ reviews
                    </p>
                </div>
            </div>
        </div>
     })}
    </div>
  )
}

export default Allrooms
