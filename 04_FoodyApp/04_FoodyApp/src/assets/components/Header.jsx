import React, { useState } from "react";

const Header = ({ data, search, filteredFood }) => {
  const [active, setActive] = useState(false);

  const btns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <div className="bg-[#323334]">
      <div className="flex md:flex-row flex-col items-center gap-6 md:justify-between h-36 p-4 justify-center ">
        <div className="md:m-28 md:mt-36 cursor-pointer">
          <img src="/Foody Zone.svg" alt="Logo" />
        </div>
        <div className="md:m-28 md:mt-36 mb-4">
          <input
            onChange={search}
            type="text"
            placeholder="Search food..."
            className="border border-red-700 px-3 py-2 outline-none bg-transparent text-white text-xl rounded w-58 placeholder-gray-200"
          />
        </div>
      </div>
      <div className="navbar flex flex-wrap items-center justify-center gap-3 ">
        {btns.map((item, index) => (
          <div
            key={index}
            className={`bg-red-600 text-white rounded-lg mb-8 cursor-pointer px-4 py-2 ${
              index === active ? "bg-red-900" : ""
            }`}
            onClick={() => {
              setActive(index);
              filteredFood(item.type);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
