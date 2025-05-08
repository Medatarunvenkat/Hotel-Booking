import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
const Exclusiveoffers = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <Title align='left' title='Exclusive Offers' subtitle='Take advantage of our limited-offers and special packages to enhance your stay and create unforgettable memories'/>
        <button>View All Offers
            <img src={assets.arrowIcon} alt="" className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>
    </div>
  )
}

export default Exclusiveoffers
