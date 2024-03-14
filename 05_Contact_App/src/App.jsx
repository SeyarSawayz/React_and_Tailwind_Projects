import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Modal from "./components/Modal";
import useDisclouse from "./customeHooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "./config/firebase";
import ContactCards from "./components/ContactCards";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contact, setContact] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(filteredContacts);
      return filteredContacts;
    });
  };

  console.log(contact);
  return (
    <>
      <div className="container mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center relative flex-grow">
            <FaSearch className="absolute text-white text-2xl ml-2  " />
            <input
              onChange={filterContacts}
              type="text"
              placeholder="Search"
              className="flex-grow rounded-md h-10 bg-transparent border border-white pl-10 px-4 text-white"
            />
          </div>

          <FaCirclePlus
            className="text-white text-4xl cursor-pointer"
            onClick={onOpen}
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contact.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contact.map((contact) => (
              <ContactCards key={contact.id} contact={contact} />
            ))
          )}
        </div>
        <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
};

export default App;
