import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Allrooms from "./Pages/Allrooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";
import HotelReg from "./Components/HotelReg";
import Layout from "./Pages/HotelOwner/Layout"
import Dashboard from "./Pages/HotelOwner/Dashboard";
import Addroom from "./Pages/HotelOwner/Addroom";
import Listroom from "./Pages/HotelOwner/ListRoom";
const App = () => {
  const isownerpath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isownerpath && <Navbar />}
      { false && <HotelReg/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allrooms />} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />
          <Route path="/my-bookings" element={<MyBookings/>} />
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="add-room" element={<Addroom/>}/>
              <Route path="ist-room" element={<Listroom/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
