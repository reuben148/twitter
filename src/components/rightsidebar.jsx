import React from "react";

const RightSidebar = () => {
  const trends = [
    { id: 1, topic: "ReactJS", category: "Technology", tweets: "120K" },
    { id: 2, topic: "Web3", category: "Crypto", tweets: "90K" },
    { id: 3, topic: "Elon Musk", category: "Trending", tweets: "1.2M" },
  ];

  const people = [
    { id: 1, name: "Elon Musk", username: "elonmusk", avatar: "/elon.jpg" },
    { id: 2, name: "Sundar Pichai", username: "sundarpichai", avatar: "/sundar.jpg" },
    { id: 3, name: "MrBeast", username: "mrbeast", avatar: "/mrbeast.jpg" },
  ];

  return (
    <div className="w-[350px] p-4 hidden lg:block">
      {/* 🔍 Search Bar */}
      <div className="bg-[#202327] p-3 rounded-full flex items-center gap-2 px-4 shadow-sm">
        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 0 1 5.29 13.71l4.58 4.58-1.42 1.42-4.58-4.58A8 8 0 1 1 10 2z" />
        </svg>
        <input
          type="text"
          className="bg-transparent text-white placeholder-gray-500 px-3 focus:outline-none w-full"
          placeholder="Search X"
        />
      </div>

      {/* 🔥 Trending Section */}
      <div className="bg-[#16181C] p-4 mt-5 rounded-2xl shadow-sm">
        <h2 className="text-xl font-extrabold text-white mb-3">Trends for you</h2>
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="flex justify-between items-center text-gray-500 hover:bg-[#1D1F23] p-3 rounded-lg cursor-pointer transition duration-200"
          >
            <div>
              <p className="text-xs text-gray-400">{trend.category} · Trending</p>
              <p className="text-white font-semibold text-[15px]">#{trend.topic}</p>
              <p className="text-xs text-gray-500">{trend.tweets} posts</p>
            </div>
            <svg className="w-5 h-5 text-gray-500 hover:text-white" viewBox="0 0 24 24">
              <path d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
          </div>
        ))}
        <p className="text-blue-400 text-sm mt-3 cursor-pointer hover:underline">Show more</p>
      </div>

      {/* 👥 Who to Follow Section */}
      <div className="bg-[#16181C] p-4 mt-5 rounded-2xl shadow-sm">
        <h2 className="text-xl font-extrabold text-white mb-3">Who to follow</h2>
        {people.map((person) => (
          <div key={person.id} className="flex justify-between items-center hover:bg-[#1D1F23] p-3 rounded-lg transition duration-200">
            <div className="flex gap-3 items-center">
              <img className="w-10 h-10 rounded-full" src={person.avatar} alt={person.name} />
              <div>
                <p className="text-white font-semibold text-[15px]">{person.name}</p>
                <p className="text-xs text-gray-500">@{person.username}</p>
              </div>
            </div>
            <button className="px-4 py-1 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-300 transition duration-200">
              Follow
            </button>
          </div>
        ))}
        <p className="text-blue-400 text-sm mt-3 cursor-pointer hover:underline">Show more</p>
      </div>

      {/* 📝 Footer */}
      <div className="flex text-gray-500 text-xs mt-5">
        <p className="hover:underline cursor-pointer">Terms of Service</p>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
        <p className="hover:underline cursor-pointer">Cookie Policy</p>
        <p className="hover:underline cursor-pointer">Ads info</p>
        <p className="hover:underline cursor-pointer">More · © 2024 X Corp.</p>
      </div>
    </div>
  );
};

export default RightSidebar;
