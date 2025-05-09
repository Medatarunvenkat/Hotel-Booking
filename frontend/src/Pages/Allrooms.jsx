import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

// Capitalized component names (best practice)
const Checkbox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const Radiobutton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input
        type="radio"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const Allrooms = () => {
  const navigate = useNavigate();
  const [openfilters, setopenfilters] = useState(false);

  const roomtypes = [
    "Single Bed", "Double Bed", "Luxury Room", "Family Suite",
  ];
  const priceranges = [
    '10000-20000', '20000-30000', '30000-40000', '40000-50000'
  ];
  const sortoptions = [
    "Price Low to High", "Price High to Low", "Newest First"
  ];

  return (
    <div className='pt-24 px-4 md:px-10 lg:px-16'>
      {/* Heading */}
      <div className='flex flex-col items-start text-left mb-10'>
        <h1 className='text-3xl md:text-[32px] font-semibold'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-1 max-w-2xl'>
          Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories.
        </p>
      </div>

      {/* Rooms and Filters Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Rooms List */}
        <div className='flex flex-col gap-10 flex-1'>
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

        {/* Filters Sidebar */}
        <div className='bg-white w-full max-w-xs border border-gray-300 text-gray-600 h-fit lg:sticky top-24'>
          <div className={`flex items-center justify-between px-5 py-2.5 border-b border-gray-300`}>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-pointer'>
              <span className='lg:hidden' onClick={() => setopenfilters(!openfilters)}>
                {openfilters ? 'HIDE' : 'SHOW'}
              </span>
              <span className='hidden lg:block cursor-pointer'>Clear</span>
            </div>
          </div>

          <div className={`${openfilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
            <div className='px-5 pt-5'>
              <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
              {roomtypes.map((room, index) => (
                <Checkbox key={index} label={room} />
              ))}
            </div>

            <div className='px-5 pt-5'>
              <p className='font-medium text-gray-800 pb-2'>Price Range</p>
              {priceranges.map((range, index) => (
                <Checkbox key={index} label={`$ ${range}`} />
              ))}
            </div>

            <div className='px-5 pt-5 pb-5'>
              <p className='font-medium text-gray-800 pb-2'>Sort By</p>
              {sortoptions.map((option, index) => (
                <Radiobutton key={index} label={option} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allrooms;
