import { useState } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "../components/rightsidebar";
import Footer from "../components/footer";
import Whotofollow from "../components/whotofollow";

const trends = [
  { category: "Trending in USA", title: "Supreme Court Orders Release of $2B in Foreign Aid", tweets: "25.3K Tweets" },
  { category: "News", title: "Trump Honors DJ Daniel: Cancer Survivor Joins Secret Service", tweets: "120K Tweets" },
  { category: "Entertainment", title: "Druckmann on TLOU Part III: 'Don't Bet on It'", tweets: "80K Tweets" },
  { category: "Tech", title: "#TwettleHq", tweets: "60K Tweets" },
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
        <div className="mt-4 border-b border-gray-700">
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
       
       <div className="border-b border-gray-700">
        <Whotofollow />
        </div>
        <div className="mt-[10px] border-b border-gray-700 pb-4">
  <p className="font-bold mb-[10px]">Post for You</p>
  <div className="flex items-center gap-2">
    <img
      src="/bybit.jpg"
      alt="Profile"
      className="w-10 h-10 rounded-full cursor-pointer"
    />
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        <p className="text-lg font-semibold text-white">Bybit</p>
        <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mt-1 items-center" aria-hidden="true">
        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
       </svg>
      </div>
      <p className="text-slate-500">@Bybit_official</p>
      <p className="text-slate-500">·</p>
      <p className="text-sm text-slate-500">2m</p>
    </div>
  </div>

  {/* Tweet Content */}
  <div className="mt-2 text-white">
    <p>🔥 Get Ready for the Bybit AI-DOL SUPERSTAR</p>
    <p>🚀 Stand a chance to win a Share of the $1,000,000 Prize Pool!</p>
    <p className="cursor-pointer text-blue-500 hover:underline">
      👉 Trade. Vote. Win. https://i.bybit.com/26abwpxb
    </p>
    <p className="text-blue-500">#Bybit #TheCryptoArk</p>
  </div>

  {/* Tweet Image */}
  <div className="mt-3">
    <img
      src="/bybit.jpg"
      alt="Bybit Promo"
      className="w-full rounded-lg border border-gray-700"
    />
  </div>

  {/* Tweet Actions */}
  <div className="flex justify-between text-gray-500 mt-3 text-sm">
    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
      <i className="fa-regular fa-comment"></i>
      <span>12</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
      <i className="fa-solid fa-retweet"></i>
      <span>8</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
      <i className="fa-regular fa-heart"></i>
      <span>1.2K</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
      <i className="fa-solid fa-chart-simple"></i>
      <span>24.5K</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
      <i className="fa-solid fa-share"></i>
    </div>
  </div>
</div>

        
<div className="mt-[10px] border-b border-gray-700 pb-4">
  <div className="flex items-center gap-2">
    <img
      src="/barca.jpeg"
      alt="Profile"
      className="w-10 h-10 rounded-full cursor-pointer"
    />
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        <p className="text-lg font-semibold text-white">FC Barcelona</p>
        <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mt-1 items-center" aria-hidden="true">
        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
       </svg>
      </div>
      <p className="text-slate-500">@FCBarcelona</p>
      <p className="text-slate-500">·</p>
      <p className="text-sm text-slate-500">5h</p>
    </div>
  </div>

  {/* Tweet Content */}
  <div className="mt-1 text-white">
    <p>No distractions. Just focus. </p>
    <p className="text-blue-500">#BenficaBarça @ChampionsLeague</p>
  </div>

  {/* Tweet Image */}
  <div className="mt-3">
    <img
      src="/yamal.jpeg"
      alt="Bybit Promo"
      className="w-full rounded-lg border border-gray-700"
    />
  </div>

  {/* Tweet Actions */}
  <div className="flex justify-between text-gray-500 mt-3 text-sm">
    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
      <i className="fa-regular fa-comment"></i>
      <span>12</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
      <i className="fa-solid fa-retweet"></i>
      <span>8</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
      <i className="fa-regular fa-heart"></i>
      <span>1.2K</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
      <i className="fa-solid fa-chart-simple"></i>
      <span>24.5K</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
      <i className="fa-solid fa-share"></i>
    </div>
  </div>
</div>



      </div>

      {/* Right Sidebar */}
      <div className="w-[150px] hidden lg:block border-l border-gray-700 p-4">
  <RightSidebar />
</div> 
</div>
  );
};

export default Explore;
