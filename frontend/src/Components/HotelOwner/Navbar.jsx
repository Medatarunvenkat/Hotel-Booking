import React from 'react'
import {Link} from "react-router-dom"
import {assets} from "../../assets/assets"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all'>
        <Link>
        <img src={assets.hotel} alt="logo" />
        </Link>
    </div>
  )
}

export default Navbar
