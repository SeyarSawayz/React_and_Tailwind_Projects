import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchandAdd from "./components/SearchandAdd";
import CardContact from "./components/CardContact";
import { db } from "./config/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import AddandDeleteContact from "./components/AddandUpdateContact";
import useDiclouse from "./components/customHooks/useDiclouse";
import NoContactsFound from "./components/NoContactsFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contact, setContact] = useState([]);
  const { isOpen, onClose, onOpen } = useDiclouse();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactRef = collection(db, "kayhantechcontacts");
        onSnapshot(contactRef, (contact) => {
          const contactList = contact.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactList);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  const filteredContacts = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "kayhantechcontacts");
    onSnapshot(contactRef, (contact) => {
      const contactList = contact.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filter = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filter);
    });
  };

  return (
    <>
      <div className="container mx-auto max-w-[370px] px-4">
        <Navbar />
        <SearchandAdd
          isOpen={isOpen}
          onOpen={onOpen}
          contact={contact}
          filteredContacts={filteredContacts}
        />
        {contact.length <= 0 ? (
          <NoContactsFound />
        ) : (
          contact.map((contact) => (
            <div className=" mt-8" key={contact.id}>
              <CardContact key={contact.id} contact={contact} onOpen={onOpen} />
            </div>
          ))
        )}
        <AddandDeleteContact
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
};

export default App;
