import { useState } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "../components/rightsidebar";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tweets");

  return (
    <div className="flex justify-center gap-6 w-full max-w-7xl mx-auto p-4 bg-black">
      {/* Left Content (Profile Section) */}
      <div className="w-[90%] max-w-2xl text-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div className="h-48 bg-gray-700"></div>
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 border-4 border-gray-800 rounded-full">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src="/reuben.jpeg"
              alt="Profile"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl p-2 rounded-full hover:bg-gray-600">
              <i className="fas fa-arrow-left"></i>
            </Link>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-semibold">
              Edit profile
            </button>
          </div>
          <h1 className="text-2xl font-bold mt-4">Reuben_dev</h1>
          <p className="text-gray-400">@reubenluka555</p>
          <p className="mt-3 text-gray-300">Web Developer | Tech Enthusiast | Open Source Contributor</p>
          <div className="flex items-center text-gray-400 mt-3">
            <i className="fas fa-calendar-alt mr-2"></i> Joined February 2024
          </div>
          <div className="flex space-x-4 mt-3">
            <span><strong>150</strong> Following</span>
            <span><strong>2M</strong> Followers</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-600 flex text-center">
          {["post", "replies", "Media", "highlights", "articles"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 font-medium capitalize transition duration-200 ${
                activeTab === tab ? "border-b-4 border-blue-500 font-bold text-blue-500" : "text-gray-400 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tweets Section */}
        <div className="p-6">
          {activeTab === "tweets" && <p className="text-center text-gray-400">No tweets yet.</p>}
          {activeTab === "replies" && <p className="text-center text-gray-400">No replies yet.</p>}
          {activeTab === "media" && <p className="text-center text-gray-400">No media yet.</p>}
          {activeTab === "likes" && <p className="text-center text-gray-400">No likes yet.</p>}
        </div>
      </div>

      {/* Right Sidebar with Separator */}
      <div className="hidden lg:flex w-[10%]">
        {/* Vertical Line */}
        <div className="border-l border-gray-700 h-full"></div>

        {/* Sidebar Content */}
        <div className="w-full pl-6">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
