import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets } from '../../assets/assets'

const Addroom = () => {

    const[images,setimages]=useState({
      1:null,
      2:null,
      3:null,
      4:null
    })

    const[inputs,setinputs]=useState({
      roomType:'',
      pricePerNight:0,
      amenities:{
        'Free WiFi':false,
        'Free BreakFast':false,
        'Room Service':false,
        'Mountain View':false,
        'Pool Access':false
      }
    })

  return (
    <form>
        <Title align='left' font='outfit' title='Add Room' subtitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience.'/>
        <p className='text-gray-800 mt-10'>Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key)=>(
              <label htmlFor={`roomImage${key}`} key={key}>
                  <img className='max h-13 cursor-pointer opacity-80' src={images[key]? URL.createObjectURL(images[key]):assets.uploadArea} alt="" />
                  <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e=>} />
              </label>
            ))}
        </div>
    </form>
  )
}

export default Addroom
