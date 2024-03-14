import React from "react";
import Modal from "./Modal";
import { Form, Formik, Field } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as yup from "yup";
import { ErrorMessage } from "formik";

const contactsValidationSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("email is not valid").required("email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (value) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, value);
      toast.success("Contact Added Successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact Updated Successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactsValidationSchema}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values.name);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">Name</label>
              <Field className="px-2 border h-10" name="name" />
              <div className="text-red-600">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <Field type="email" className="px-2 border h-10" name="email" />
              <div className="text-red-600">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange px-3 py-1.5 rounded self-end"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
