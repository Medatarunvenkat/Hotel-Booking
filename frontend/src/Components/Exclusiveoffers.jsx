import React from 'react'
import { assets, exclusiveOffers } from '../assets/assets'
import Title from './Title'

const Exclusiveoffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title
          align='left'
          title='Exclusive Offers'
          subtitle='Take advantage of our limited-offers and special packages to enhance your stay and create unforgettable memories'
        />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
          View All Offers
          <img src={assets.arrowIcon} alt="" className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'>
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className='group relative flex flex-col justify-between h-60 px-4 py-6 rounded-xl text-white bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* OFF badge */}
            <p className='px-3 py-1 absolute top-4 left-4 text-sm bg-white text-gray-800 font-semibold rounded-full'>
              {item.priceOff}% OFF
            </p>

            {/* Title & description */}
            <div className='z-10 mt-auto'>
              <p className='text-2xl font-semibold'>{item.title}</p>
              <p className='text-white/90'>{item.description}</p>
              <p className='text-sm text-white/70 mt-3'>Expires {item.expiryDate}</p>
            </div>

            {/* Button */}
            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 z-10'>
              View Offers
              <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exclusiveoffers
