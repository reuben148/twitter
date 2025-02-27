import { Link } from "react-router-dom";

const NavItem = ({ to, iconClass, label }) => (
  <Link 
    to={to} 
    className="flex items-center gap-4 text-white text-xl font-medium px-4 py-3 rounded-full transition hover:bg-gray-900 w-full"
  >
    <i className={`${iconClass} text-2xl`}></i>
    <span>{label}</span>
  </Link>
);

const Sidebar = () => {
  return (
    <div className="w-[275px] flex flex-col bg-black px-6 py-4 border-r border-gray-700 h-screen fixed top-0 left-0">
      {/* X Logo */}
      <div className="mb-6 flex justify-start pl-2">
        <i className="fa-brands fa-x-twitter text-3xl text-white"></i>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        <NavItem to="/" iconClass="fa-solid fa-house" label="Home" />
        <NavItem to="/explore" iconClass="fa-solid fa-magnifying-glass" label="Explore" />
        <NavItem to="/notification" iconClass="fa-regular fa-bell" label="Notifications" />
        <NavItem to="/messages" iconClass="fa-regular fa-envelope" label="Messages" />
        <NavItem to="/communities" iconClass="fa-solid fa-users" label="Communities" />
        <NavItem to="/premium" iconClass="fa-brands fa-x-twitter" label="Premium" />
        <NavItem to="/business" iconClass="fa-solid fa-briefcase" label="Business" />
        <NavItem to="/profile" iconClass="fa-regular fa-user" label="Profile" />
        <NavItem to="/more" iconClass="fa-solid fa-ellipsis" label="More" />
      </nav>

      {/* Post Button */}
      <button className="w-[90%] mt-4 py-3 rounded-full bg-white text-black text-lg font-semibold hover:bg-blue-600 transition">
        Post
      </button>

      {/* Profile Section */}
      <div className="mt-auto flex items-center gap-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer w-full">
        <img className="w-12 h-12 rounded-full" src="/profile.jpeg" alt="Profile" />
        <div className="text-white">
          <p className="font-medium">Reuben_dev</p>
          <p className="text-gray-500 text-sm">@reubenluka555</p>
        </div>
        <i className="fa-solid fa-ellipsis text-white ml-auto"></i>
      </div>
    </div>
  );
};

export default Sidebar;
