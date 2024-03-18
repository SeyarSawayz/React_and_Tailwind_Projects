import React from "react";

const Navbar = ({ home = "Home", myevent = "Categories" }) => {
  return (
    <>
      <nav className="flex items-center justify-around bg-cyan-500 text-white p-4 sticky top-0">
        <div className="logo hover:scale-x-90 hover:scale-y-90 hover:transform-x-4 hover:transform-y-3 transition-all duration-500 delay-100">
          <span className="font-bold cursor-pointer">
            DoDay Task Tracker Online
          </span>
        </div>
        <ul className="flex gap-4 px-8">
          <li className="cursor-pointer hover:font-bold transition-all">
            {home}
          </li>
          <li className="cursor-pointer hover:font-bold transition-all">
            {myevent}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
