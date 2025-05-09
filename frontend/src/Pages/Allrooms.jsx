import React from 'react'
import { assets, facilityIcons, roomsDummyData } from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Allrooms = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-24 px-4 md:px-10 lg:px-16'>
      {/* Heading */}
      <div className='flex flex-col items-start text-left mb-10'>
        <h1 className='text-3xl md:text-[32px] font-semibold'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-1 max-w-2xl'>
          Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories.
        </p>
      </div>

      {/* Rooms */}
      <div className='flex flex-col gap-10'>
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className='flex flex-col md:flex-row items-start gap-6 border-b border-gray-300 pb-8'
          >
            {/* Image */}
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title='View Room Details'
              className='w-full md:w-[300px] h-[220px] rounded-lg shadow-md object-cover cursor-pointer'
            />

            {/* Details */}
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500 text-sm'>{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className='text-gray-800 text-2xl font-semibold cursor-pointer'
              >
                {room.hotel.name}
              </p>

              <div className='flex items-center text-base'>
                <p className='text-yellow-500'>★★★★★</p>
                <p className='ml-2 text-gray-600'>200+ reviews</p>
              </div>

              <div className='flex items-center gap-2 text-gray-500 mt-1 text-sm'>
                <img src={assets.locationIcon} alt="location" className='w-4 h-4' />
                <span>{room.hotel.address}</span>
              </div>

              {/* Amenities */}
              <div className='flex flex-wrap items-center mt-3 mb-4 gap-3'>
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 px-3 py-1.5 rounded bg-[#F5F5FF]/70'
                  >
                    <img src={facilityIcons[item]} alt={item} className='w-4 h-4' />
                    <p className='text-sm'>{item}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className='text-lg font-semibold text-gray-700'>
                ${room.pricePerNight}/night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allrooms;
