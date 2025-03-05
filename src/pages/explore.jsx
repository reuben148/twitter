import { useState } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "../components/rightsidebar";
import Footer from "../components/footer";
import Whotofollow from "../components/whotofollow";

const trends = [
  { category: "Trending in Nigeria", title: "#HNGi11", tweets: "25.3K Tweets" },
  { category: "Sports", title: "Cristiano Ronaldo", tweets: "120K Tweets" },
  { category: "Entertainment", title: "New Wizkid Album", tweets: "80K Tweets" },
  { category: "Tech", title: "AI Revolution", tweets: "60K Tweets" },
];

const Explore = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Explore (Middle Section) */}
      <div className="w-[700px] overflow-y-auto p-4">
      <div className="sticky top-0 bg-black z-10 p-3">
  {/* Search Bar + Gear Icon Container */}
  <div className="flex items-center justify-between bg-black">
    {/* Search Bar */}
    <div className="flex items-center bg-gray-800 p-3 rounded-full w-full">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent text-white outline-none"
      />
    </div>

    {/* Gear Icon */}
    <i className="fa-solid fa-gear text-gray-400 text-xl cursor-pointer ml-3 hover:text-white"></i>
  </div>

  {/* Navigation Tabs */}
  <div className="flex justify-around border-b border-gray-700 mt-3">
    <p className="border-b-4 border-blue-500 cursor-pointer">For You</p>
    <p className="pb-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">Trending</p>
    <p className="pb-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">Sport</p>
    </div>
   </div>
      
      {/* IMAGE EXPLORE */}
        <div>
          <img src="bybit.jpg" alt="" className="w-full"/>
        </div>

        <div className="text-2xl mb-[50px] mt-[-80px]">
        <p className="font-bold">Fashion weeks women wear FW25/26</p>
        <p className="text-xl">LIVE</p>
       </div>


        {/* Trending Topics */}
        <div className="mt-4">
          <h2 className="text-xl font-bold px-3">Today's News</h2>
          <div className="mt-2 space-y-4">
            {trends.map((trend, index) => (
              <div key={index} className="p-3 hover:bg-gray-900 rounded-lg cursor-pointer">
                <p className="text-gray-500 text-sm">{trend.category}</p>
                <h3 className="text-lg font-semibold">{trend.title}</h3>
                <p className="text-gray-500 text-sm">{trend.tweets}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
     {/* <div className="w-[300px] hidden lg:block border-l border-gray-700 p-4">
  <Whotofollow />
  <div className="mt-4">
    <Footer />
  </div>
</div> */}
</div>
  );
};

export default Explore;
