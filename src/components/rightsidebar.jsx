import React from "react";

const RightSidebar = () => {
  const trends = [
    { id: 1, topic: "#OPPOReno13Series", category: "Technology", tweets: "120K" },
    { id: 2, topic: "Tems", category: "Music", tweets: "90K" },
    { id: 3, topic: "Elon Musk", category: "Trending", tweets: "1.2M" },
  ];

  const people = [
    { id: 1, name: "Reubenluka555", username: "reuben_dev", avatar: "/reuben.jpeg" },
    { id: 2, name: "Manoahluka", username: "Mano.dev", avatar: "/shark.jpg" },
    { id: 3, name: "Paulluka257", username: "Paul", avatar: "/yamal.jpeg" },
  ];

  return (
    <div className="w-[350px] p-4 hidden lg:block bg-black ">
      {/* 🔍 Search Bar */}
      <div className="bg-[#202327] p-3 rounded-full flex items-center gap-2 px-4 shadow-sm ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </svg>
        <input
          type="text"
          className="bg-transparent text-white placeholder-gray-500 px-3 focus:outline-none w-full"
          placeholder="Search "
        />
      </div>

      {/* ⭐ Subscribe to Premium */}
      <div className="bg-[#16181C] p-4 mt-5 rounded-2xl shadow-sm text-white">
        <h2 className="text-xl font-extrabold">Subscribe to Premium</h2>
        <p className="text-sm text-gray-400 mt-2">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm hover:bg-blue-600 transition duration-200">
          Subscribe
        </button>
      </div>

      {/* 🔥 Trending Section */}
      <div className="bg-[#16181C] p-4 mt-5 rounded-2xl shadow-sm">
      <h2 className="text-xl font-extrabold text-white mb-3">What’s happening</h2>
      {trends.map((trend) => (
        <div
          key={trend.id}
          className="flex justify-between items-center text-gray-500 hover:bg-[#1D1F23] p-3 rounded-lg cursor-pointer transition duration-200"
        >
          <div>
            {trend.image && (
              <img src={trend.image} alt={trend.topic} className="w-14 h-14 rounded-lg mb-2" />
            )}
            <p className="text-xs text-gray-400">{trend.category}</p>
            <p className="text-white font-semibold text-[15px] leading-tight">
              {trend.topic}
            </p>
            {trend.tweets && <p className="text-xs text-gray-500">{trend.tweets} posts</p>}
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
              <img className="w-10 h-10 rounded-full" src='yamal.jpeg' alt={person.name} />
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
