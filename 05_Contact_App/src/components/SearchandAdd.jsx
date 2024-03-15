import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import Modal from "./Modal";

const SearchandAdd = ({ isOpen, onOpen, filteredContacts }) => {
  return (
    <>
      <div className="flex  mt-4  items-center justify-center ">
        <div className="flex flex-grow items-center justify-center border border-white rounded-lg ml-4 ">
          <FaSearch className="text-4xl text-blue-400 px-2" />
          <input
            onChange={filteredContacts}
            type="text"
            className="bg-transparent placeholder:text-white text-white flex-grow  w-full outline-none "
            placeholder="Search"
          />
        </div>
        <IoIosPersonAdd
          onClick={onOpen}
          className="text-blue-400 text-4xl flex-grow cursor-pointer"
        />
      </div>
      {isOpen && <Modal />}
    </>
  );
};

export default SearchandAdd;
