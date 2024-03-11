import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../App";

const Home = ({ data }) => {
  console.log(data);

  return (
    <div
      className={`bg-[url('/bg.png')] bg-no-repeat bg-cover flex flex-col flex-wrap w-full h-screen-46`}
    >
      <div className="  w-[80vw] h-auto mx-auto mt-8 flex flex-wrap pb-6 gap-x-4 gap-y-8 items-center justify-between">
        {data?.map(({ name, image, text, price }) => (
          <div
            key={name}
            className="w-[340px] h-[167px] rounded-2xl bg-gray-900/35 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between ">
              <div className="">
                <img
                  src={BASE_URL + image}
                  className="rounded-full h-[133px] w-[133px] mt-[7px] ml-[13px]"
                  alt="Pizza"
                />
              </div>
              <div className="content w-[168px] h-[86px] ">
                <h1 className="font-bold text-[16px] text-white">{name}</h1>
                <p className="text-[12px] text-white font-serif">{text}</p>
              </div>
            </div>
            <div className="flex items-center justify-end mx-4 my-[-10px]">
              <button className="w-[57px] h-[25px] text-center rounded-[5px]  bg-red-500 text-white">
                ${price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
