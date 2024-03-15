import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#78A083] flex gap-2 px-4 items-center justify-center max-w-[360px] h-[60px] rounded-xl mt-4 ">
        <div>
          <img src="/firebase.svg" alt="Firebase logo" />
        </div>
        <h1 className="font-medium">KayhaTech IT Service Contact App</h1>
      </div>
    </>
  );
};

export default Navbar;
