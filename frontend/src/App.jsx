import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Allrooms from "./Pages/Allrooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";

const App = () => {
  const isownerpath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isownerpath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allrooms />} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />
          <Route path="/my-bookings" element={<MyBookings/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
