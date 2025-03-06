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
          <div className="flex gap-3">
          <h1 className="text-2xl font-bold mt-4">Reuben_dev</h1>
          <div className="flex items-center">
        <button className="mt-5 font-bold border w-[140px] rounded-[20px] flex items-center justify-center gap-2 ">
    Get Verified
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
    </svg>
  </button>
         </div>

          </div>
          <p className="text-gray-400">@reubenluka555</p>
          <p className="mt-3 text-gray-300">Web Developer | Tech Enthusiast | Open Source Contributor</p>
          <div className="flex items-center text-gray-400 mt-3">
            <i className="fas fa-calendar-alt mr-2"></i> Joined February 2024
          </div>
          <div className="flex space-x-4 mt-3">
            <span><strong>0</strong> Following</span>
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
