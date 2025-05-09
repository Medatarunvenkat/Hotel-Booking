import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData } from '../assets/assets'
const RoomDetails = () => {
    const {id}=useParams()
    const[room,setroom]=useState(null)
    const[mainimage,setmainimage]=useState(null)
    useEffect(()=>{
        const room=roomsDummyData.find(room=>room._id===id)
        room && setroom(room)
        room && setmainimage(room.images[0])
    },[])
    return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full '>20% OFF</p>
        </div>


        <div className='flex items-center gap-1 mt-2'>
             <p className='text-yellow-500'>★★★★★</p>
             <p className='ml-2'>200+ Reviews</p>
        </div>

        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
        </div>

        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainimage} alt="" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length>1 && room.images.map((image,index)=>(
                    <img  onClick={()=>setmainimage(image)} key={index} src={image} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainimage===image && 'outline-3 outline-orange-500'}`}/>
                ))}
            </div>
        </div>


    </div>
  )
}

export default RoomDetails
