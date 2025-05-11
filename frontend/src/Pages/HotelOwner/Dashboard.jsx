import React, { useState } from 'react'
import Title from "../../Components/Title"
import {assets, dashboardDummyData} from "../../assets/assets"
const Dashboard = () => {

    const [dashboarddata,setdashboarddata]=useState(dashboardDummyData)
  return (
    <div>
      <Title align='left' font='outfit' title='DashBoard' subtitle='Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.'/>

      <div className='flex gap-4 my-8'>
          <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
              <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10'/>
              <div className='flec flex-col sm:ml-4 font-medium'>
                  <p className='text-blue-500 text-lg'>Total Bookings</p>
                  <p className='text-neutral-400 text-base'>{dashboarddata.totalBookings}</p>
              </div>
          </div>

          <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
              <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10'/>
              <div className='flec flex-col sm:ml-4 font-medium'>
                  <p className='text-blue-500 text-lg'>Total Revenue</p>
                  <p className='text-neutral-400 text-base'>${dashboarddata.totalRevenue}</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
