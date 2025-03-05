import React from 'react'
import RightSidebar from '../components/rightsidebar'

function Home() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Main Content */}
      <div className="w-[75%] border-r border-gray-700">
        <div className='sticky top-0 bg-black p-4 border-b border-gray-700 flex justify-around text-gray-400 text-white border-b-2 border-blue-500'>
          <p className="pb-2 border-b-4 border-blue-500 font-medium text-white cursor-pointer">
            For You
          </p>
          <p className="pb-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">
            Following
          </p>
        </div>

        {/* Tweet Input */}
        <div className="flex p-4 border-b border-gray-700 gap-4">
          <img src="/profile.jpeg" alt="Profile" className="w-12 h-12 rounded-full" />
          <div className="w-full">
            <input
              type="text"
              className="w-full bg-transparent text-white placeholder-gray-500 text-lg focus:outline-none"
              placeholder="What’s happening?!"
            />
            <div className="flex justify-between items-center mt-3">
              {/* Icons */}
              <div className="flex gap-3 text-blue-500">
                {/* GIF ICON */}
                <div className="flex gap-3 text-blue-500">
              {/* GIF ICON */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer">
                <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
              </svg>
              <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
              <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
              </svg>
              <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
             <path d="M2.205 7.423L11.745 21h4.241L6.446 7.423H2.204zm4.237 7.541L2.2 21h4.243l2.12-3.017-2.121-3.02zM16.957 0L9.624 10.435l2.122 3.02L21.2 0h-4.243zm.767 6.456V21H21.2V1.51l-3.476 4.946z"></path>
             </svg>
              <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
              <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
              </svg>
             <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
            <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
            </svg>
            <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
            <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
            </svg>
            </div>
              </div>
              {/* Post Button */}
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium cursor-pointer">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Tweets Section */}
        <div className="p-4 border-b border-gray-700 bg-black">
          {/* Profile Section */}
          <div className="mt-[10px] pb-4">
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
      <span>800</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
      <i className="fa-solid fa-retweet"></i>
      <span>9k</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
      <i className="fa-regular fa-heart"></i>
      <span>2m</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
      <i className="fa-solid fa-chart-simple"></i>
      <span>500K</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
      <i className="fa-solid fa-share"></i>
    </div>
  </div>
</div>
        </div>
        

      {/* Right Sidebar */}
      <div className="w-[25%] hidden md:block">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home
