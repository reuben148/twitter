import React from "react";
import RightSidebar from "../components/rightsidebar";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "like",
      user: { name: "Lamine Yamal", username: "lamine", avatar: "/yamal.jpeg" },
      content: "liked your post",
      time: "2h",
    },
    {
      id: 2,
      type: "retweet",
      user: { name: "Twettle", username: "twettlehq", avatar: "/shark.jpg" },
      content: "retweeted your tweet",
      time: "3h",
    },
    {
      id: 3,
      type: "mention",
      user: { name: "Manoluka", username: "mano.dev", avatar: "/bybit.jpg" },
      content: "mentioned you in a tweet",
      time: "5h",
    },
    {
      id: 4,
      type: "follow",
      user: { name: "Paulluka257", username: "paulluka", avatar: "/profile.jpeg" },
      content: "followed you",
      time: "1d",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <i className="fa-solid fa-heart text-red-500"></i>;
      case "retweet":
        return <i className="fa-solid fa-retweet text-green-500"></i>;
      case "mention":
        return <i className="fa-solid fa-at text-blue-400"></i>;
      case "follow":
        return <i className="fa-solid fa-user-plus text-yellow-500"></i>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Middle Section - Notifications */}
      <div className="w-[900px] h-screen overflow-y-auto border-r border-gray-700">
        {/* Header */}
        <div className="sticky top-0 bg-black z-10 p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Notifications</h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-around border-b border-gray-700 p-3">
          <p className="border-b-4 border-blue-500 cursor-pointer">All</p>
          <p className="pb-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">Verified</p>
          <p className="pb-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">Mentions</p>
        </div>

        {/* Notification List */}
        <div className="mt-2">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center gap-3 p-4 hover:bg-gray-900 cursor-pointer border-b border-gray-800">
              {/* Icon */}
              <div className="text-xl">{getIcon(notification.type)}</div>

              {/* Profile Picture */}
              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="w-10 h-10 rounded-full"
              />

              {/* Notification Content */}
              <div>
                <p className="text-white">
                  <span className="font-semibold">{notification.user.name}</span>{" "}
                  <span className="text-gray-500">@{notification.user.username}</span>{" "}
                  {notification.content}
                </p>
                <p className="text-gray-500 text-sm">{notification.time} ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[100px] hidden lg:block border-l border-gray-700 p-4">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Notifications;
