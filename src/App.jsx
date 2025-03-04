import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar"; 
import RightSidebar from "./components/rightsidebar";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Notification from "./pages/notification";
import Messages from "./pages/messages";
import Grok from "./pages/grok";
import Profile from "./pages/profile";
import More from "./pages/more";
import Communities from "./pages/communities";
import Premium from "./pages/premium";
import Business from "./pages/business";
import Homes from "./components/homes";

function App() {
  return (
    <BrowserRouter>
    <div className="grid grid-cols-1 w-full bg-black">
      <div className="grid grid-cols-5 min-h-screen max-w-[1028px] m-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        {/* <Homes /> */}
        <div className="flex-1 bg-black col-span-3 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/grok" element={<Grok />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/business" element={<Business />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>

        {/* Right Sidebar (Trending, Who to Follow) */}
        
      </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
