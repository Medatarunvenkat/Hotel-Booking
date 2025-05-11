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
                  <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e=>setimages({...images,[key]:e.target.files[0]})} />
              </label>
            ))}
        </div>

        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='flex-1 max-w-48'>
                <p className='text-gray-800 mt-4'>Room Type</p>
                <select value={inputs.roomType}
                onChange={e=>setinputs({...inputs,roomType:e.target.value})}
                className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                    <option value="">Select Room Type</option>
                    <option value="singlebed">Single Bed</option>
                    <option value="doublebed">Double Bed</option>
                    <option value="luxurybed">Luxury Bed</option>
                    <option value="familysuite">Family Suite</option>
                </select>
            </div>
            <div>
              
            </div>
        </div>
    </form>
  )
}

export default Addroom
