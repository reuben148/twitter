import React from "react";

const RightSidebar = () => {
  const people = [
    { id: 1, name: "Reuben", username: "reuben.dev", avatar: "/reuben.jpeg" },
    { id: 2, name: "Manoah", username: "Mano.dev", avatar: "/shark.jpg" },
    { id: 3, name: "Paul257", username: "Paul", avatar: "/bybit.jpg" },
  ];

  return (
    <div>
      <div className=" p-4 mt-5 rounded-2xl shadow-sm">
        <h2 className="text-xl font-extrabold text-white mb-3">Who to follow</h2>
        {people.map((person) => (
          <div
            key={person.id}
            className="flex justify-between items-center hover:bg-[#1D1F23] p-3 rounded-lg transition duration-200"
          >
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
    </div>
  );
};

export default RightSidebar;
