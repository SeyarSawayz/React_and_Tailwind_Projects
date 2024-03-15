import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import NoContactsFound from "./NoContactsFound";
import AddandUpdateContact from "./AddandUpdateContact";
import useDiclouse from "./customHooks/useDiclouse";
import { toast } from "react-toastify";

const CardContact = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDiclouse();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "kayhantechcontacts", id));
      toast.success("Contact deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="bg-[#50727B] h-[84px] rounded-lg p-2 mt-4 text-white  shadow-sm shadow-[#78A083] overflow-hidden mb-8"
      >
        <div className="flex items-center justify-between px-2 gap-2">
          <div className="flex items-center gap-4">
            <FaRegUserCircle className="text-3xl " />
            <div>
              <h1 className="font-medium">{contact.name}</h1>
              <p className="text-sm">{contact.email}</p>
              <p className="text-sm">{contact.Mobile}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <CiEdit onClick={onOpen} className="text-3xl cursor-pointer" />
            <RiDeleteBin5Line
              onClick={() => deleteContact(contact.id)}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      <AddandUpdateContact
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        isUpdate
        contact={contact}
      />
    </>
  );
};

export default CardContact;
