import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Explore from './pages/explore';
import Notification from './pages/notification';
import Messages from './pages/messages';
import Grok from './pages/grok';
import Profile from './pages/profile';
import More from './pages/more';


function App() {
  return (<BrowserRouter>
  
  <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-[250px] flex flex-col bg-[#ffffff] p-4 border-r border-gray-300">
          <i className="fa-brands fa-x-twitter text-3xl  mb-8"></i>

          <nav className="flex flex-col gap-6 font-serif">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-house text-xl text-gray-600"></i>
              <Link className="text-xl text-gray-800 hover:text-blue-500" to="/">Home</Link>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-magnifying-glass text-xl text-gray-600"></i>
              <Link className="text-xl text-gray-800 hover:text-blue-500" to="/explore">Explore</Link>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-bell text-xl text-gray-600"></i>
              <Link className="text-xl text-gray-800 hover:text-blue-500" to="/notification">Notifications</Link>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-xl text-gray-600"></i>
              <Link className="text-xl text-gray-800 hover:text-blue-500" to="/messages">Messages</Link>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-user text-xl text-gray-600"></i>
              <Link className="text-xl text-gray-800 hover:text-blue-500" to="/profile">Profile</Link>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-ellipsis-h text-xl text-gray-600"></i>
              <Link className="text-xl text-gray-800 hover:text-blue-500" to="/more">More</Link>
            </div>
          </nav>

          <button className="w-full h-12 mt-6 rounded-full bg-black text-white font-serif text-lg mt-[20px] transition">
            Post
          </button>

          <div className='flex  mt-[60px] gap-3'>
    <img className='w-[45px] h-[45px]  rounded-[20px] ' src="profile.jpeg" alt="" />

   <div>
      <p className='font-serif'>Reuben_dev</p>
      <p className='font-serif text-slate-500'>@reubenluka555</p>
    </div>
    <div className='mt-[10px] ml-[10px]'>
    <i class="fa-solid fa-ellipsis "></i>
    </div>
    </div>

        </div>

        {/* Main Content (Middle Section) */}
        <div className="flex-1 bg-[#f8f9fa] p-4">
          {/* Header */}
          <div className="flex items-center justify-around mb-4">
            <h1 className=" font-serif text-gray-900">For you</h1>
            <h1 className=" font-serif text-gray-900">Following</h1>
          </div>
          <hr/>

          {/* Post Feed */}
          <div className="space-y-4 mt-[20px]">
            {/* Example Post */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full" src="profile.jpeg" alt="User" />
                <div>
                  <p className="font-semibold text-gray-900">Reuben_dev</p>
                  <p className="text-sm text-gray-500">@reubenluka555 · 2h ago</p>
                </div>
                <i className="fa-solid fa-ellipsis-h text-gray-600 text-lg ml-auto"></i>
              </div>
              <p className="text-lg text-gray-800 mt-2">
                Just posting my first tweet! This is exciting! #FirstTweet
              </p>
              <div className="flex gap-6 mt-3 text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-comment"></i>
                  <span>12</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-retweet"></i>
                  <span>5</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-heart"></i>
                  <span>28</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-share"></i>
                  <span>3</span>
                </div>
              </div>
            </div>

            {/* Another Example Post */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full" src="insta.jpeg" alt="User" />
                <div>
                  <p className="font-semibold text-gray-900">JaneDoe</p>
                  <p className="text-sm text-gray-500">@janedoe · 4h ago</p>
                </div>
                <i className="fa-solid fa-ellipsis-h text-gray-600 text-lg ml-auto"></i>
              </div>
              <p className="text-lg text-gray-800 mt-2">
                Had a great day at the beach! The sun is shining, and the water is perfect. 🌊☀️ #BeachDay
              </p>
              <div className="flex gap-6 mt-3 text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-comment"></i>
                  <span>8</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-retweet"></i>
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-heart"></i>
                  <span>20</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <i className="fa-solid fa-share"></i>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Trending/Profile Section) */}
        <div className="w-[350px] p-4">
          {/* Trending Topics */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Subscribe to Premium</h3>
            <div className="space-y-2">
              <div className="flex flex-col">
                <p className="text-gray-800 font-serif">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
              </div>
              <div className="flex flex-col">
              <button className="w-[120px] h-12 mt-6 rounded-full bg-blue-600 text-white text-lg transition">
            Subscribe
          </button>
              </div>
            </div>
          </div>




          {/* Who to Follow */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="font-semibold text-2xl text-gray-900 mb-4">Who to follow</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 ">
                <img className="w-10 h-10 rounded-full" src="insta.jpeg" alt="User" />
                <div>
                  <p className="text-gray-900 font-semibold justify-between">Mano.dev</p>
                  <p className="text-sm text-gray-500">@manoahluka</p>
                </div>
                <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full ml-[70px]">Follow</button>
              </div>
              <div className="flex items-center gap-3 ">
                <img className="w-10 h-10 rounded-full" src="profile.jpeg" alt="User" />
                <div>
                  <p className="text-gray-900 font-semibold">reuben_dev</p>
                  <p className="text-sm text-gray-500">@reubenluka555</p>
                </div>
                <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full ml-[50px]">Follow</button>
              </div>
              <div className="flex items-center gap-3 ">
                <img className="w-10 h-10 rounded-full" src="tesla.jpeg" alt="User" />
                <div>
                  <p className="text-gray-900 font-semibold">dev_jaytee</p>
                  <p className="text-sm text-gray-500">@Jethroirmiya</p>
                </div>
                <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full ml-[70px]">Follow</button>
              </div>
              <div className='flex text-blue-500 font-serif'>
                <p>show more</p>
              </div>
            </div>
          </div>
        </div>
      </div>



     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/explore' element={<Explore />}/>
       <Route path='/notification' element={<Notification />}/>
       <Route path='/messages' element={<Messages />}/>
       <Route path='/grok' element={<Grok />}/>
       <Route path='/profile' element={<Profile />}/>
       <Route path='/more' element={<More />}/>
     </Routes>
     
  </BrowserRouter>


   
 
  )
}

export default App
