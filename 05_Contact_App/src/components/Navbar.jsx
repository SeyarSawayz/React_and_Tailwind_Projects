import React from "react";
<script
  src="https://kit.fontawesome.com/67f2c88127.js"
  crossorigin="anonymous"
></script>;

const Navbar = () => {
  return (
    <>
      <div className="h-[60px] bg-white my-4 rounded-xl flex items-center justify-center gap-3">
        <img src="/firebase.svg" alt="" />
        <h1 className="font-medium text-lg">Firebase Contact App</h1>
      </div>
    </>
  );
};

export default Navbar;
