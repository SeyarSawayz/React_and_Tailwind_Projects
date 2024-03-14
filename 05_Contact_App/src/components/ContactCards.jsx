import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../customeHooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCards = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Card deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className=" bg-yellow flex justify-between items-center rounded-lg p-2 overflow-hidden "
      >
        <div className="flex gap-1 items-center">
          <HiOutlineUserCircle className="text-orange text-4xl" />

          <div>
            <h1 className="font-medium">{contact.name}</h1>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-2xl gap-1 pr-2 ">
          <RiEditCircleLine
            onClick={onOpen}
            className="text-black cursor-pointer"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default ContactCards;
